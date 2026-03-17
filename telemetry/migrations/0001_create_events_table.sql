-- Telemetry events table for tracking AgentCrew installations
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event TEXT NOT NULL,
  os TEXT,
  arch TEXT,
  version TEXT,
  ip_hash TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX idx_events_created_at ON events(created_at);
CREATE INDEX idx_events_ip_hash_created ON events(ip_hash, created_at);
CREATE INDEX idx_events_event ON events(event);
