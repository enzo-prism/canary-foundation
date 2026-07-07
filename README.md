# Canary Foundation Website

The marketing and content website for the [Canary Foundation](https://canaryfoundation.org), a nonprofit dedicated solely to the **early detection of cancer**. The site presents the foundation's mission, research programs (ovarian, prostate, pancreatic, lung, breast), scientific approach, leadership, blog/oral histories, and ways to give.

It is a content-first single-page app (SPA) served by an Express server, deployed on Replit.

---

## Tech stack

| Area | Choice |
| --- | --- |
| Frontend | React 18 + TypeScript, built with **Vite** |
| Routing | [wouter](https://github.com/molefrog/wouter) (lightweight, all pages lazy-loaded) |
| UI | Radix UI + **shadcn/ui**, Tailwind CSS, Lucide icons |
| Server state / forms | TanStack Query, React Hook Form + Zod |
| Backend | **Express** (TypeScript via `tsx` in dev, bundled with esbuild for prod) |
| Database | PostgreSQL (Neon serverless) via **Drizzle ORM** — optional; in-memory fallback |
| Analytics | Google Analytics 4 + Hotjar (configured in code, not env) |
| Deployment | **Replit** autoscale (bundled Express server) |

## Project structure

```
client/            Vite React SPA
  index.html       HTML template (OG/Twitter tags, Organization JSON-LD, noscript fallback)
  src/
    pages/         Route surfaces (~50 pages, lazy-loaded)
    components/    Reusable UI (ui/ = shadcn components)
    data/          Data-driven content (blog-posts.ts, leadership.ts, oral history)
    hooks/         Shared hooks (analytics, mobile, toast)
    lib/           Helpers (analytics, queryClient, blog-post-utils, cn)
    App.tsx        Router + client-side metadata/JSON-LD sync
server/            Express app
  index.ts         Entry: compression, security headers, host canonicalization, legacy 301s, logging
  routes.ts        API routes (/api/contact) + crawler asset serving
  vite.ts          Dev Vite middleware + prod static serving + per-route <head> injection
  storage.ts       IStorage: DatabaseStorage (Postgres) or MemStorage (fallback)
  db.ts            Neon/Drizzle connection (only when DATABASE_URL is set)
shared/
  schema.ts        Drizzle + Zod data contracts (users, contact_messages)
  seo.ts           Single source of truth for route metadata + JSON-LD builders
scripts/           dev runner, SEO crawl-asset generator, asset compression
seo/routes.json    Canonical list of routes used for sitemap generation
postbuild.js       Generates crawler assets (sitemaps, robots, llm.xml, ai.txt) + precompresses
```

Path aliases (see `tsconfig.json`): `@/*` → `client/src/*`, `@shared/*` → `shared/*`, `@assets/*` → `attached_assets/*`.

## Getting started

Requires **Node.js 20**.

```bash
npm install          # install dependencies
npm run dev          # start dev server (Vite HMR + Express)
```

The dev server starts on **http://localhost:5000**, or the next free port if 5000 is taken (it prints the chosen URL). Set `PORT` to override.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server: Express + Vite middleware with HMR (`scripts/dev.mjs`). |
| `npm run build` | Vite client build → `dist/public`, esbuild server bundle → `dist/index.js`. Runs `postbuild` automatically. |
| `npm run start` | Production: serves the bundled app from `dist/index.js` (`NODE_ENV=production`). |
| `npm run check` | Project-wide TypeScript type-check (`tsc`). |
| `npm run db:push` | Push the Drizzle schema to the configured Postgres database (requires `DATABASE_URL`). |
| `node postbuild.js` | Regenerate crawler assets only (also runs as the `postbuild` lifecycle hook after `build`). |

## Environment variables

The app runs without any environment variables (with reduced functionality). Set these to enable optional features:

| Variable | Effect |
| --- | --- |
| `DATABASE_URL` | When set, contact submissions are **durably persisted** to Postgres (Neon) via Drizzle. When unset, the server uses in-memory storage and submissions are **not** retained across restarts. |
| `CONTACT_ADMIN_TOKEN` | Required to read submissions via `GET /api/contact` (send `Authorization: Bearer <token>`). When unset, that endpoint is disabled (returns 404) so contact PII is never publicly exposed. |
| `PORT` | Override the listen port (default 5000). |

> Not yet wired: emailing new contact submissions to the team. Submissions persist to the DB (when configured) but no notification is sent — see [DEPLOYMENT.md](./DEPLOYMENT.md).

## SEO architecture

SEO is a primary concern for this site, and the design is deliberate:

- **`shared/seo.ts` is the single source of truth** for per-route metadata (title/description) and JSON-LD builders (Organization, WebPage, Article). It is consumed by **both** the server and the client so crawlers and users see identical metadata.
- **Server-side `<head>` injection** (`server/vite.ts`): because production runs the Express server, it rewrites `<title>`, description, canonical, OpenGraph/Twitter tags, and injects per-page JSON-LD into the served HTML for every route — including post-specific Article schema for `/blog/:slug`. This is what fixes "every page has the same title" for non-JS crawlers.
- **Client-side sync** (`client/src/App.tsx`): on SPA navigation, the same metadata + JSON-LD is applied so it stays correct as users move between routes.
- **Sitewide Organization JSON-LD** is embedded statically in `client/index.html`, plus a `<noscript>` content/navigation fallback for non-JS crawlers.
- **Crawler assets** (`sitemap.xml`, `sitemap-index.xml`, `news-sitemap.xml`, `llm.xml`, `ai.txt`, `robots.txt`) are generated at build time by `scripts/generate-crawl-assets-enhanced.mjs` (run via `postbuild.js`) from `seo/routes.json` + the blog post list, and served by the Express server.

**Adding a route?** Add its metadata to `shared/seo.ts` and its path to `seo/routes.json` (and, for blog posts, keep the slug list in `scripts/generate-crawl-assets-enhanced.mjs` in sync with `client/src/data/blog-posts.ts`).

## Content model

Page content is data-driven and lives in `client/src/data/`:

- **`blog-posts.ts`** — blog listing + detail pages (HTML content, dual `date`/`publishedDate` semantics; sorted by `publishedDate ?? date`). Shared sorting/date-label logic in `client/src/lib/blog-post-utils.ts`.
- **`leadership.ts`**, **`don-listwin-oral-history.ts`** — reusable copy/constants and the founder oral-history content.

The **Team Updates** page (`/science/programs/team-updates`, `client/src/pages/team-updates.tsx`) summarizes research-team progress reports. Its content lives in inline data arrays at the top of the page module rather than `client/src/data/`; it currently carries the Ovarian Cancer Team's June 2026 update and mirrors Heidi's final donor-friendly PDF (`Canary Ovary Team Progress_June2026_final.pdf`). Because the earlier June PDF was pulled for confidential data, future edits should stay tightly grounded in the final/approved source: do not reintroduce superseded terms such as `CRABp2`, `ORF1p`, or `165 cases`, and do not add prostate/pancreas details until Heidi or Don sends an approved final version.

## Deployment

Deployed on **Replit** (autoscale). Build and run commands are defined in `.replit`:

```
build = npm run build
run   = npm run start
```

The production runtime is the bundled Express server (`dist/index.js`) — not a static host — which is why server-side metadata injection, legacy 301 redirects, `www`→apex canonicalization, crawler-asset serving, and security headers all work. See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the full deployment guide and smoke checks.

## Testing

There is no unit-test runner; verification is done with the repo's shell scripts (run against a fresh `npm run build` + running server):

```bash
./test-server.sh            # API smoke tests
./test-crawl-assets.sh      # sitemap / robots / crawler files
./test-redirects.sh         # legacy 301 redirects
./test-seo-fix.sh           # SEO metadata
./final-test-production.sh  # end-to-end production checks
```

## Further documentation

- **[AGENTS.md](./AGENTS.md)** — repository guidelines (structure, conventions, commands).
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** — production deployment guide, env vars, smoke checks.
- **[replit.md](./replit.md)** — architecture overview, design decisions, dependencies.
