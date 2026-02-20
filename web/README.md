# AgentCrew Landing Page

Static landing page for [AgentCrew](https://github.com/helmcode/agent_crew) — a platform to build, deploy, and monitor collaborative AI agent teams powered by Claude Code.

**Live site:** [agentcrew.helmcode.com](https://agentcrew.helmcode.com)

## Tech Stack

- [Astro v5](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first CSS
- [Playwright](https://playwright.dev) — end-to-end testing
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting & CDN

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build to dist/
npm run preview   # preview production build
```

## Testing

```bash
npm run test:e2e  # run Playwright e2e tests
```

## Deployment

Deployments are automated via GitHub Actions on every push to `main` that modifies files under `web/`.

Required secret: `CLOUDFLARE_API_TOKEN` (set in GitHub repository secrets).

See [DEPLOYMENT.md](../DEPLOYMENT.md) for manual deployment steps.

## Project Structure

```
web/
├── src/
│   ├── components/     # Astro components (Navbar, Hero, Features, etc.)
│   ├── layouts/        # Base layout with SEO meta tags
│   ├── pages/          # index.astro
│   └── styles/         # global.css (Tailwind + custom properties)
├── public/             # Static assets
├── tests/e2e/          # Playwright tests
├── astro.config.mjs
└── wrangler.toml       # Cloudflare Pages config
```

---

Built by [Helmcode](https://helmcode.com)
