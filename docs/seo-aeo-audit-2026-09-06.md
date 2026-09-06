# SEO and answer-engine visibility audit — 6 September 2026

## Scope and release state

Repository: `enzo-prism/canary-foundation`. Baseline: `9f1e534` on `main`. Work was performed in a clean separate checkout, with independent metadata, crawl, content, rendering, and final review agents.

This release improves the source and production build. **GitHub main and the live Replit deployment are separate states.** The user authorized pushing the verified source to main. Replit publication has not been performed in this task. The live baseline was checked at `https://canaryfoundation.org/`; it returned HTTP 200 and an empty React root with generic noscript content. Deploy and verify the reviewed commit on Replit before claiming these improvements are live.

## Findings and implemented changes

| Finding | Change and intended effect |
| --- | --- |
| Page titles were injected on the server, but actual page content required JavaScript. Every route had the same generic noscript fallback. | Render the actual React route before responding, then hydrate that same app. All 47 public routes now send page-specific text and links in initial HTML. No bot-specific content or user-agent branching. |
| Eleven static research/center routes fell back to duplicated metadata. Individual page effects could overwrite shared metadata. | Unique exact metadata for all 35 static routes; 12 blog details use their content records. One shared resolver serves both server and SPA navigation. |
| Organization schema was duplicated in the HTML template and shared code, classified the foundation as a medical provider, and lacked stable entity references. | Shared NGO, WebSite, WebPage and Article builders with linked identifiers. Founder/contact information matches visible site content. Organization bylines remain Organizations. Article modification dates cannot predate publication. |
| Canonical duplicates included `/take-action`, `/index.html`, case and trailing-slash variants. Raw `/index.html` bypassed injected content. | Known aliases permanently redirect before static/React handling. Host, alias, and slash normalization happen in one hop and preserve query parameters. Unknown and retired routes remain 404 with noindex. |
| Five pages were discoverable only through interactive menu state. | Contextual links connect leadership council, clinical studies/progress, Fred Hutch, and invitation-based funding from relevant pages. An automated graph traversal checks that every canonical page is reachable from the homepage through initial-HTML anchors. |
| Sitemap dates reset to the build date, blog metadata was manually duplicated, and HTML scanning could add unrelated files. | Generate canonical URLs from the route manifest and actual blog records. Omit unknown last-modification dates; optional verified dates are supported. Only the last two days of genuinely published articles qualify for the news sitemap. XML is escaped and output is deterministic. |
| Separate permissive AI crawler groups bypassed shared exclusions. Legacy AI instructions made unsupported content and ranking implications. | One robots group applies the same exclusions to all agents. Keep `ai.txt` and `llm.xml` as compatibility resources with factual descriptions, without asserting special ranking value. |
| Homepage lacked a concise explanation of the organization; research navigation repeatedly used generic labels. | Add a clear entity description, four visible research questions/answers, descriptive link labels, and related dated research-report links. |
| Clinical pages and repeated marketing cards contained unsupported approval, sensitivity, study-count and patient-impact claims. | Replace affected claims with research-stage explanations supported by the public June/July 2026 team reports. Explicitly identify historical 2020 expense ratios as historical. Approved report text was preserved. |
| Homepage reveal CSS hid content until JavaScript ran; reduced-motion rendering could differ between server and browser. | Content is visible by default; animation enhances visible sections. Media preference is applied after hydration. Splash remains client-only. |
| Blog body could introduce a second H1; missing blog slugs redirected after a server 404. | Preserve one page H1, use semantic publication dates, and show the missing-page component without redirecting. |
| Compressed asset handler could resolve encoded traversal paths outside the public directory. | Add public-directory containment and a regression check using an encoded path plus an outside-public fixture. |

## Content evidence and boundaries

The clinical summaries link to the approved public records in `client/src/data/team-updates.ts`: Ovarian Cancer Team June 2026, Prostate Cancer Team July 2026, and Pancreas Cancer Team July 2026. They explain PASS active surveillance, PATROL inherited-risk screening, ultrasound evaluation, and research progress with dates and links to full context. They do not present experimental research as approved screening or promise patient outcomes.

This is a substantive SEO/AEO improvement, not a certification of every historical statement. Attributed quotations elsewhere in the legacy site still warrant an editorial provenance review. Historical research statistics should retain their time period and source when maintained. Pending Q4 and CTUC report shells remain private and content-free; existing safety tests pass.

## Validation

- `npm ci`, `npm run check`, and production build (browser, SSR chunks, Express, generated crawler files, compressed assets).
- `npm run test:seo`: 35 static metadata entries, entity identity, author types, dates, script serialization, 47 canonical crawl URLs, catalog discovery, deterministic dates/XML/robots.
- `BASE_URL=http://127.0.0.1:5191 npm run test:ssr`: all 47 routes plus two genuine 404s; initial content, metadata/schema, canonical redirects/query preservation, one H1, and complete initial-HTML internal discovery.
- Existing `test:awards`, `test:ga4-lead`, `test:team-updates`, `test:home-splash`, and `test:web-cleanse`.
- Existing production HTTP smoke scripts: server, crawl assets, www crawler files, SEO, legacy redirects, platform hardening, production fix, and final production check. `SKIP_BUILD=1` reuses the exact freshly built artifact.
- `npm run check:links -- --network`: 54 discovered external URLs checked; no confirmed 404/410 or static-integrity failures. Timeouts/blocked external responses are not proof of reachability.
- Browser verification covers desktop/mobile rendering, normal/reduced motion, SPA metadata updates, contact hydration, missing pages, and script-blocked initial content. No external form submission is part of this audit.

Screenshots are stored alongside this document in `seo-aeo-audit-assets/`. Local browser checks and raw HTTP checks do not establish search indexing, field Core Web Vitals, or live production deployment.

## Remaining release and measurement work

1. Publish this exact reviewed commit using the Replit project and preserve the full `dist/ssr` directory with `dist/public` and `dist/index.js`. Verify live asset hashes, all canonical/404/crawler behaviors, and representative page content afterward.
2. Review dependencies separately: the installation baseline reported five production audit findings (one high, three moderate, one low) across `nanoid`, `qs`, `body-parser`, `express`, and `postcss-selector-parser`. No major dependency migration was attempted in this SEO change. Re-run `npm audit --omit=dev` before deployment; advisory state changes over time.
3. Use Search Console after publication to inspect key URLs, submit the standard sitemap, and monitor indexing, impressions, clicks, query/page performance, and available AI-search reporting. No Search Console account or analytics reporting was accessed in this task.
4. Track representative research queries and referral/conversion quality over time. Search rankings and inclusion/citation in generated answers cannot be guaranteed by code changes.

## Guidance used

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): indexability, accessible text/internal links, and structured data matching visible content; no special AI files required.
- [Google: Search documentation updates](https://developers.google.com/search/updates): FAQ rich results were retired in May 2026. Visible useful answers were added without promising FAQ rich results.
- [Google: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article).
- [Schema.org NGO](https://schema.org/NGO) and [Nonprofit501c3](https://schema.org/Nonprofit501c3).

## Rollback

The pre-change source is `9f1e534`. Revert the SEO/AEO commit as a whole, rebuild, and republish if needed; the browser hydration entry and SSR server/build changes must move together. A GitHub revert alone does not roll back a Replit deployment.
