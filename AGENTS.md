# Repository Guidelines

## Project Structure & Module Organization
- `server/` holds the Express entrypoint (`server/index.ts`), route wiring, and in-memory storage; middleware order matters because redirects must execute before Vite (`server/vite.ts`).
- `client/src/` is the Vite React app: `pages/` contains route surfaces, `components/` reusable UI, `hooks/` shared logic, `lib/` helpers, and `assets/` static data. Global styles sit in `client/src/index.css` plus `client/public/` for static files.
- Blog content is data-driven in `client/src/data/blog-posts.ts`; shared blog sorting/date-display behavior lives in `client/src/lib/blog-post-utils.ts`.
- Data contracts live in `shared/schema.ts` and are consumed with the `@shared` alias defined in `tsconfig.json`.
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
Testing relies on repo scripts instead of Jest. Run `./test-server.sh` for API smoke tests, `./test-seo-improvements.js` or `./test-seo-fix.sh` after content/metadata edits, `./test-crawl-assets.sh` when touching sitemap or robots files, and `./verify-production-fix.sh` before deployment. Most scripts assume a fresh `npm run build`. Name any new checks `test-*.sh`, make them idempotent, and document inputs at the top of the file.

## Commit & Pull Request Guidelines
History shows short, imperative commits (e.g., “Update donation links across the website to the new campaign”). Reference the feature surface (“client/pages/about”) to aid reviewers. PRs should explain user impact, list commands/tests executed, attach screenshots for UI changes, call out redirect or sitemap updates, and link related docs (e.g., `DEPLOYMENT.md`).
