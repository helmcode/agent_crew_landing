# AgentCrew Landing

Landing page for [AgentCrew](https://github.com/helmcode/agent_crew) — an open-source platform to build, deploy, and monitor collaborative AI agent teams powered by Claude Code.

**Live:** [agentcrew.helmcode.com](https://agentcrew.helmcode.com)

## Structure

```
.
├── web/                        # Astro project (source code)
│   ├── src/
│   │   ├── components/         # Page sections (Navbar, Hero, Features, etc.)
│   │   ├── layouts/            # Base layout with SEO meta tags
│   │   ├── pages/              # index.astro
│   │   └── styles/             # global.css
│   ├── public/                 # Static assets
│   ├── tests/e2e/              # Playwright tests
│   ├── astro.config.mjs
│   ├── wrangler.toml           # Cloudflare Pages config
│   └── package.json
├── .github/workflows/
│   └── deploy.yml              # CI/CD — auto deploy to Cloudflare Pages on push to main
├── CLAUDE.md                   # Agent team instructions
└── TASKS.md                    # Pending tasks
```

## Development

```bash
cd web
npm install
npm run dev       # http://localhost:4321
```

## Build & Test

```bash
cd web
npm run build         # production build → dist/
npm run test:e2e      # Playwright e2e tests
```

## Deployment

Every push to `main` that modifies files under `web/` triggers an automatic deployment to Cloudflare Pages via GitHub Actions.

**Required secret:** `CLOUDFLARE_API_TOKEN` (set in GitHub repository secrets).

Manual deploy:

```bash
cd web
npm run build
wrangler pages deploy dist --project-name agentcrew-landing
```

## Tech Stack

- [Astro v5](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first CSS
- [Playwright](https://playwright.dev) — end-to-end testing
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting & CDN

---

Built by [Helmcode](https://helmcode.com)
