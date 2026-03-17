interface Env {
  DB: D1Database;
}

interface TelemetryEvent {
  event: string;
  os?: string;
  arch?: string;
  version?: string;
}

const ALLOWED_EVENTS = new Set(["start", "complete"]);
const MAX_FIELD_LENGTH = 64;
const MAX_PAYLOAD_BYTES = 1024;
const RATE_LIMIT_PER_HOUR = 10;

function sanitize(
  value: string | undefined,
  maxLen: number = MAX_FIELD_LENGTH
): string | null {
  if (!value || typeof value !== "string") return null;
  return value.slice(0, maxLen).replace(/[^\w\s\-\.]/g, "");
}

async function hashIP(ip: string): Promise<string> {
  const date = new Date().toISOString().split("T")[0];
  const data = new TextEncoder().encode(`${ip}:${date}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .substring(0, 16);
}

async function checkRateLimit(env: Env, ipHash: string): Promise<boolean> {
  const oneHourAgo = new Date(Date.now() - 3_600_000).toISOString();
  const result = await env.DB.prepare(
    "SELECT COUNT(*) as count FROM events WHERE ip_hash = ? AND created_at > ?"
  )
    .bind(ipHash, oneHourAgo)
    .first<{ count: number }>();
  return (result?.count ?? 0) < RATE_LIMIT_PER_HOUR;
}

async function handleEvent(
  request: Request,
  env: Env
): Promise<Response> {
  const ip = request.headers.get("cf-connecting-ip") || "unknown";
  const ipHash = await hashIP(ip);

  if (!(await checkRateLimit(env, ipHash))) {
    return Response.json(
      { error: "rate_limited" },
      { status: 429, headers: { "Retry-After": "3600" } }
    );
  }

  let body: TelemetryEvent;
  try {
    const text = await request.text();
    if (text.length > MAX_PAYLOAD_BYTES) {
      return Response.json({ error: "payload_too_large" }, { status: 413 });
    }
    body = JSON.parse(text);
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const event = sanitize(body.event);
  if (!event || !ALLOWED_EVENTS.has(event)) {
    return Response.json({ error: "invalid_event" }, { status: 400 });
  }

  const os = sanitize(body.os);
  const arch = sanitize(body.arch);
  const version = sanitize(body.version);
  const createdAt = new Date().toISOString();

  await env.DB.prepare(
    "INSERT INTO events (event, os, arch, version, ip_hash, created_at) VALUES (?, ?, ?, ?, ?, ?)"
  )
    .bind(event, os, arch, version, ipHash, createdAt)
    .run();

  return Response.json({ ok: true }, { status: 201 });
}

async function handleStats(env: Env): Promise<Response> {
  const [totals, byOS, byArch, daily] = await Promise.all([
    env.DB.prepare(
      "SELECT event, COUNT(*) as count FROM events GROUP BY event"
    ).all(),
    env.DB.prepare(
      "SELECT os, COUNT(*) as count FROM events WHERE event = 'complete' GROUP BY os ORDER BY count DESC"
    ).all(),
    env.DB.prepare(
      "SELECT arch, COUNT(*) as count FROM events WHERE event = 'complete' GROUP BY arch ORDER BY count DESC"
    ).all(),
    env.DB.prepare(
      `SELECT DATE(created_at) as day, event, COUNT(*) as count
       FROM events
       WHERE created_at > datetime('now', '-30 days')
       GROUP BY day, event
       ORDER BY day DESC`
    ).all(),
  ]);

  const stats = {
    totals: Object.fromEntries(
      (totals.results || []).map((r) => [r.event, r.count])
    ),
    by_os: (byOS.results || []).map((r) => ({ os: r.os, count: r.count })),
    by_arch: (byArch.results || []).map((r) => ({
      arch: r.arch,
      count: r.count,
    })),
    daily: (daily.results || []).map((r) => ({
      day: r.day,
      event: r.event,
      count: r.count,
    })),
  };

  return Response.json(stats, {
    headers: { "Cache-Control": "public, max-age=300" },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/v1/event") {
      return handleEvent(request, env);
    }

    if (request.method === "GET" && url.pathname === "/v1/stats") {
      return handleStats(env);
    }

    if (request.method === "GET" && url.pathname === "/") {
      return Response.json({ service: "agentcrew-telemetry", status: "ok" });
    }

    return new Response("Not Found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
