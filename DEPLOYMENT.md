# Canary Foundation Production Deployment Guide

## Runtime

The site is deployed on **Replit** (autoscale deployment). The live app is the bundled Express server at `dist/index.js`, started with `npm run start`. Replit's deployment build/run commands are defined in `.replit` (`build = npm run build`, `run = npm run start`).

The Express server — not a static host — is what serves the app in production, so it is responsible for per-route HTML/meta injection, legacy redirects, host canonicalization, crawler assets, and security headers. Keep that in mind when changing routing or SEO behavior.

## Build And Start Commands

### Build
```bash
npm ci && npm run build && node postbuild.js
```

### Start
```bash
npm run start
```

## What The Production Server Now Handles

- Canonical host redirects from `www.canaryfoundation.org` to `https://canaryfoundation.org` for regular pages
- Direct serving of generated crawl assets on both `www` and apex:
  `robots.txt`, `sitemap.xml`, `sitemap-index.xml`, `news-sitemap.xml`, `llm.xml`, `ai.txt`
- Legacy URL redirects for old Canary routes
- Brotli and gzip delivery for built `.js` and `.css` assets when the precompressed files exist
- Security headers:
  `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `X-XSS-Protection`, `Permissions-Policy`, and a report-only Content Security Policy
- Real `404` HTML with `noindex` for unknown page routes, plus JSON `404` responses for unknown API routes
- Immutable one-year caching for hashed assets and `no-store` for HTML documents
- Size-limited, honeypot-protected, rate-limited contact submissions
- Per-route `<head>` metadata + JSON-LD injection and removal of the dev-only Replit banner

## Environment Variables

- `DATABASE_URL` — when set, contact-form submissions are durably persisted to Postgres (Neon) via Drizzle. When unset, the server falls back to in-memory storage and submissions are **not** retained across restarts.
- `CONTACT_ADMIN_TOKEN` — required to read submissions via `GET /api/contact` (send `Authorization: Bearer <token>`). When unset, that endpoint is disabled (returns 404) so contact PII is never publicly exposed.

The contact endpoint returns `201` only when the message is durably stored in Postgres. Without `DATABASE_URL`, it returns `202` and explains that the message is only in temporary server memory. Email notification is not configured; adding it requires an approved delivery provider, destination, and secret.

## Local Verification

### Build The Production Bundle
```bash
./deploy-build.sh
```

### Start The Production Server Locally
```bash
PORT=3000 npm run start
```

### Run The Verification Scripts
```bash
./test-server.sh
./test-crawl-assets.sh
./test-www-crawler-files.sh
./test-seo-fix.sh
./test-redirects.sh
./scripts/test-platform-hardening.sh
npm run test:team-updates
npm run check:links -- --network
./final-test-production.sh
```

## Deployment Checklist

1. Build with `npm ci && npm run build && node postbuild.js`
2. Start with `npm run start`
3. Confirm the crawl assets exist in `dist/public/`
4. Run the local verification scripts above and confirm `npm audit --omit=dev` reports no findings
5. Confirm pending Team Updates have no public route, metadata, sitemap entry, or built content
6. Deploy from Replit's Publishing tool. A GitHub push updates `main`, but production remains on the previous Replit deployment until the Replit app is published again.
7. Verify the public domain and crawler endpoints after deploy

## Public Smoke Checks

```bash
curl -I https://canaryfoundation.org/
curl -I https://www.canaryfoundation.org/about
curl -I https://canaryfoundation.org/robots.txt
curl -I https://canaryfoundation.org/sitemap.xml
curl -I https://canaryfoundation.org/sitemap-index.xml
curl -I https://canaryfoundation.org/news-sitemap.xml
curl -I https://canaryfoundation.org/llm.xml
curl -I https://canaryfoundation.org/ai.txt
```
