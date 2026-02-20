# Deployment Guide

## Cloudflare Pages Setup

1. Connect repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Set root directory: `web`
5. Add custom domain: `agentcrew.helmcode.com`

## Local Development

```bash
cd web
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy manually with Wrangler

```bash
npm install -g wrangler
cd web
wrangler pages deploy dist --project-name agentcrew-landing
```
