# Dev Workspace

## Language

All conversations MUST be in Spanish. All code, commits, PRs, and documentation written to repositories MUST be in English.

## Project

Landing page for [AgentCrew](https://github.com/helmcode/agent_crew) — built with Astro and deployed to Cloudflare Pages at [agentcrew.helmcode.com](https://agentcrew.helmcode.com).

Source code lives in `web/`. Deployments are automated via GitHub Actions on every push to `main` that modifies files under `web/`.

## Development Guidelines

- **Always commit** when a feature, fix, or task is completed — do not accumulate uncommitted changes.
- **Always run related tests** after completing any task to validate nothing is broken.
- **Validate UI changes with Playwright MCP** to ensure user flows work correctly end-to-end.
- **Build validation** — if the project has a build step, run it and confirm it succeeds before committing.
- **Tests are mandatory** — write e2e, functional, and unit tests for every new feature. Tests live in `web/tests/`.
- **Docs completeness** — when adding a new documentation page, ALWAYS update: (1) the "Documentation Sections" list in the docs overview (`web/src/pages/docs/index.astro` and `web/src/pages/es/docs/index.astro`), (2) the sidebar in `web/src/layouts/DocsLayout.astro`, and (3) the translations in `web/src/i18n/ui.ts`.
