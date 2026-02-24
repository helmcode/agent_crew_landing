# AgentCrew

**The Kubernetes of AI Agents.** Build, deploy, and orchestrate AI agent teams for any purpose.

AgentCrew is an open-source AI agent orchestrator. Just as Kubernetes orchestrates containers regardless of what runs inside, AgentCrew orchestrates AI agents regardless of their purpose. Create teams for software engineering, marketing, finance, data analysis, content creation, operations, or anything else.

**Live site:** [agentcrew.helmcode.com](https://agentcrew.helmcode.com)

## Get Started

```bash
curl -fsSL https://agentcrew.helmcode.com/install.sh | bash
```

One command. Docker required. Open `http://localhost:8080` and start building your first agent team.

## How It Works

1. **Define your team** with a leader and specialized workers
2. **Write the mission** in Markdown. Agent behavior is driven entirely by documentation
3. **Deploy** with one click. AgentCrew provisions the infrastructure automatically
4. **Chat and monitor** your team in real time through the web interface

## Key Features

- **Purpose-agnostic**: agents for any domain, defined by text, not code
- **Documentation-driven**: CLAUDE.md + Markdown files define agent behavior
- **Extensible skills**: install capabilities from GitHub repos via [skills.sh](https://skills.sh)
- **Self-hosted**: runs on your infrastructure with Docker or Kubernetes
- **Real-time chat**: send tasks and watch your team collaborate live

## Links

- [Documentation](https://agentcrew.helmcode.com/docs)
- [Quick Start](https://agentcrew.helmcode.com/docs/quick-start)
- [Project Roadmap](https://github.com/orgs/helmcode/projects/2/views/2)
- [GitHub](https://github.com/helmcode/agent_crew_landing)

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build to dist/
npm run preview   # preview production build
npm run test:e2e  # run Playwright e2e tests
```

### Tech Stack

- [Astro v5](https://astro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Playwright](https://playwright.dev)
- [Cloudflare Pages](https://pages.cloudflare.com)

### Deployment

Automated via GitHub Actions on every push to `main` that modifies files under `web/`.

Required secret: `CLOUDFLARE_API_TOKEN` (set in GitHub repository secrets).

---

Open source. [AGPL-3.0 License](LICENSE). Built by [Helmcode](https://helmcode.com).
