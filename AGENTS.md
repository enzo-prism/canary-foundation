# Repository Guidelines

## Project Structure & Module Organization
- `server/` holds the Express entrypoint (`server/index.ts`), route wiring, and storage (`server/storage.ts`: Postgres via Drizzle when `DATABASE_URL` is set, else in-memory); middleware order matters because redirects must execute before Vite (`server/vite.ts`).
- `client/src/` is the Vite React app: `pages/` contains route surfaces, `components/` reusable UI (`components/home/` is the homepage split: upper/middle/lower), `hooks/` shared logic, `lib/` helpers, and `assets/` static data. Global styles sit in `client/src/index.css` plus `client/public/` for static files.
- Blog content is data-driven in `client/src/data/blog-posts.ts`; shared blog sorting/date-display behavior lives in `client/src/lib/blog-post-utils.ts`.
- Data contracts live in `shared/schema.ts` and are consumed with the `@shared` alias defined in `tsconfig.json`.
- SEO is centralized in `shared/seo.ts` (route metadata table + JSON-LD builders). It is the single source of truth consumed by both the Express server (`server/vite.ts`, which injects per-route `<head>` meta + JSON-LD into served HTML) and the client router (`client/src/App.tsx`, which keeps them in sync on SPA navigation). Add new routes' metadata here, not in `App.tsx`.
- SEO, automation, and crawl tooling lives in `scripts/`, `seo/`, and `attached_assets/`; they expect build outputs in `dist/`.

## Build, Test, and Development Commands
- `npm run dev` — starts the Express server through `tsx` with Vite dev middleware on port 5000.
- `npm run build` — runs the Vite client build and bundles `server/index.ts` with esbuild into `dist/`.
- `node postbuild.js` — generates `dist/public/llm.xml` and other crawl assets; run after every production build.
- `npm run start` — serves the bundled app from `dist/index.js` in production mode.
- `npm run check` — TypeScript project-wide type-check.
- `npm run db:push` — pushes the Drizzle schema (see `drizzle.config.ts`) to the configured Neon/Postgres database.

## Coding Style & Naming Conventions
Use TypeScript and ES modules end-to-end. Match the established two-space indentation, double quotes, and semicolons (`server/index.ts`). Favor named exports, PascalCase component names, camelCase hooks/helpers, and co-locate component-specific styles. Tailwind utility strings live inline; extract repeated combinations into helpers in `client/src/lib/`. Preserve ordered middleware (redirects → logging → Vite/static) so legacy routes keep working.

## Testing Guidelines
Testing relies on repo scripts instead of Jest. Run `./test-server.sh` for API smoke tests, `./test-seo-improvements.js` or `./test-seo-fix.sh` after content/metadata edits, `./test-crawl-assets.sh` when touching sitemap or robots files, and `./verify-production-fix.sh` before deployment. Run `npm run test:web-cleanse` after leadership, route-removal, navigation, or legacy-copy changes. Most scripts assume a fresh `npm run build`. Name any new checks `test-*.sh`, make them idempotent, and document inputs at the top of the file.

## Commit & Pull Request Guidelines
History shows short, imperative commits (e.g., “Update donation links across the website to the new campaign”). Reference the feature surface (“client/pages/about”) to aid reviewers. PRs should explain user impact, list commands/tests executed, attach screenshots for UI changes, call out redirect or sitemap updates, and link related docs (e.g., `DEPLOYMENT.md`).

## Cursor Cloud specific instructions
- This is a single monolithic full-stack service (Express host + Vite React SPA); there is no separate backend/frontend to start. Standard commands live in the "Build, Test, and Development Commands" section above and `README.md`.
- `npm run dev` is the only service to run for local development. It auto-picks the next free port in the range 5000–5024 if 5000 is taken and prints the chosen URL as `[dev] Preview: http://localhost:<port>`; read that line rather than assuming 5000.
- The app runs with no environment variables. Without `DATABASE_URL` it uses in-memory storage, so `POST /api/contact` returns `202` with `"persisted":false` (not `201`). This is expected in the cloud dev environment and is not a failure — do not treat it as a bug or add a database just to make it `201`.
- The `test-*.sh` scripts and `npm run test:platform` each run their own `npm run build` and boot their own production server on an auto-picked free port (see `scripts/production-test-helpers.sh`), so they do not conflict with a running `npm run dev`. They are safe to run while dev is up.
- Known quirk: `./test-seo-fix.sh` uses BSD `stat -f%z` and errors on Linux with `stat: invalid option -- '%'`. This is a pre-existing script portability issue, not an environment problem; the underlying SEO/compression behavior is still covered by `./test-server.sh` and `npm run test:platform`.
- The Replit config pins `nodejs-20`, but the environment's Node 22 runs dev, build, type-check, and all test scripts without issue.
