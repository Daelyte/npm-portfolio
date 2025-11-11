# Deployment Guide – JMFG Portfolio (Next.js)

Date: 2025-11-11

This project is a Next.js + Tailwind (v4) app deployed on Vercel.

## Commands
- Dev: `npm run dev`
- Prod build: `NODE_ENV=production npm run build`
- Start (local prod): `npm start`

## Vercel configuration
- Framework preset: Next.js (auto)
- Install: `npm ci`
- Build: `next build`
- Output: Next.js (no `out/`)
- Root directory: project root (this folder)

## Domains
Add in Vercel → Project → Settings → Domains
- `jmfg.ca` (A record → 76.76.21.21)
- `www.jmfg.ca` (CNAME → cname.vercel-dns.com)
Then Assign the latest “Ready” deployment to the domain if needed.

## Environment variables (optional)
- `NEXT_PUBLIC_SITE_URL` → `https://jmfg.ca`

## Playwright smoke test
- Install: `npm i -D @playwright/test`
- Run: `npx playwright install && npx playwright test e2e/smoke.spec.ts`
- Against prod: `PW_BASE_URL=https://jmfg.ca npx playwright test e2e/smoke.spec.ts`

## Notes
- Sitemap has been rebuilt with safe fallbacks and will include routes and markdown posts.
- If you re-enable date-based features, ensure any date is valid before calling `toISOString()`.