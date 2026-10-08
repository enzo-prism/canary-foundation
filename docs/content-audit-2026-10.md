> 8 October update: Don canceled the QuickBooks summary. Its slot and references have been removed from both public financial surfaces and SEO. Narrative and Overview remain pending; the approved Form 990 remains available. The earlier four-part package below is superseded. The homepage intro now uses Don’s 5-second photo, 3-second title, and 3-second team caption sequence, once per browser-tab session. The requested 2004 caption remains pending date confirmation against the April 2005 photo label.

# Content audit — October 2026

Site-wide review of public routes, content files, and navigation before the News / Financials change set. Scope is `enzo-prism/canary-foundation` as of the `main` snapshot this branch started from. Merge to production and Replit Publish wait on Enzo's approval.

## Method

- Enumerated every canonical route in `seo/routes.json` plus redirects in `server/index.ts`.
- Read every routed page under `client/src/pages/`, homepage slices in `client/src/components/home/`, and content modules in `client/src/data/`.
- Searched for 2020-era (or older) financials, annual-report language, dates framed as current, staff/board lists, campaign CTAs, and outbound URLs.
- No 2020 Form 990 or financial-statement PDFs exist in the repo. The obsolete 2020 material was HTML metrics plus a pie-chart image.
- Items that are clearly obsolete were removed or hidden in this PR. Everything ambiguous stays live and is marked `update-needs-client-input`.

## Action taken in this PR

| Page / route | Item | Why it's stale | Proposed action |
| --- | --- | --- | --- |
| `/about/financials` | 2020 performance metrics, expense breakdown, and dollar totals ($3,963,900; 91%; 12.6¢) | Six-year-old figures presented as current stewardship | **remove** — replaced with 2025 document slots in a coming-soon state |
| `/` homepage `#financials` | 2020 expenses chart (`Canary Foundation 2020 Expenses_*.webp`) and matching totals | Same obsolete 2020 figures repeated above the fold of the homepage financials block | **remove** — chart and totals no longer render; leftover public file `client/public/financial-chart-2020.webp` deleted (nothing linked to it). The original source image remains in `attached_assets` and is not served |
| `/` homepage Ways to Give | “AmazonSmile contributions” listed as a current giving method | AmazonSmile ended in 2023; donate page already says it is discontinued | **remove** |
| Header / footer | “Blog” label for `/blog` | News is the public name; Blog sat after Oral History | **update** — labeled **News** and moved higher (after Home on desktop and mobile) |

## Needs client input — left untouched

| Page / route | Item | Why it may be stale | Proposed action |
| --- | --- | --- | --- |
| `/about/staff`, `/` Core Staff | Heidi Auman, Therese Quinlan, Renata Barnes, Candy Gularte and titles | Roster and titles (e.g. Heidi as “Scientific Program Manager” vs later “Scientific Program Director”) need confirmation | update-needs-client-input |
| `/about/board-directors`, `/` Board cards | Michael Ball as CEO, Contextual Genomics | Company/role may have changed; confirm current board seat and title | update-needs-client-input |
| `/about/board-directors`, `/` | Kevin Kennedy titles (Blue Ridge Partners; former Avaya CEO; KLA-Tencor / Digital Realty boards) | Executive and board affiliations age quickly | update-needs-client-input |
| `/about/board-directors` | Don Listwin bio (ISchemaView; Robin Systems; POET Technologies; NCI BSA) | Company names and board seats may have changed (ISchemaView is now commonly associated with RapidAI) | update-needs-client-input |
| `/about/board-directors` | Dale Jantzen and Hilary Valentine bios | Confirm they remain current directors and that bios are still the approved public text | update-needs-client-input |
| `/about/leadership-council` | Member list including Reid Dennis, Greg McAdoo (“Partner, Sequoia Capital”), Charles/Jenny Beeler, John/Ellen Drew, Nicki Riedel | Some titles look historical; confirm living memorial vs current council membership | update-needs-client-input |
| `/about/scientific-leadership` | Current program leaders and founding-advisor links | July 2026 cleanse approved the current set; still confirm no 2026 roster changes | update-needs-client-input |
| `/` leadership cards | Joseph M. DeSimone as “Current Director” | Scientific Leadership lists DeSimone and Garry Gold as Co-Directors | update-needs-client-input |
| `/about/overview`, `/` | “Over $75 million raised” | Cumulative figure may be outdated; do not invent a replacement | update-needs-client-input |
| `/about/awards`, `/about/awards/gambhir` | “Nominations are open for future years” | Confirm whether a 2026 cycle is open and whether the Gambhir recipient should be announced | update-needs-client-input |
| `/blog/don-listwin-award-2025-ruth-etzioni` | External nomination URL `earlydetectionresearch.com/award` | Confirm the form is still the public nomination path | update-needs-client-input |
| `/donate` | Vehicles For Charity partnership and 1-866-628-2277 | Confirm the vehicle-donation partner and phone are still current | update-needs-client-input |
| `/donate` | “Donate while you shop” after AmazonSmile | Copy already notes AmazonSmile ended; confirm whether any replacement shop-to-give program should be named | update-needs-client-input |
| `/` Community Outreach | Baywell Health, FQHC conversations, Teal Health, POCUS, grant-project language | Presented as active programs; confirm which partnerships are still public | update-needs-client-input |
| `/` Support Our Research | “Join Our Team” card links to `/donate` | CTA reads like hiring/fellowships but goes to giving | update-needs-client-input |
| Tumor / center pages | Historical 2017–2019 milestones (lung biomarker, BRCA partnership, ACED) | Fine as history if still accurate; confirm none should be reframed or retired | update-needs-client-input |
| Science program pages | PASS / PATROL / POCUS claims | June–July 2026 team reports are the approved public source; do not add newer numbers without Heidi/Don | update-needs-client-input |

## Reviewed and not treated as stale

These are historical or recently approved and are **not** removed:

- Homepage timeline entries through 2020 (Gambhir remembrance) and later research milestones — presented as history, not current financials.
- Homepage “Latest News” cards for 2026 press/research, 2023 PATROL, and 2020 Gambhir remembrance.
- Blog posts for EDx22–EDx25, Listwin awards 2022–2025, April 2026 science meetings, Cinelli partnership, and the 2025 program report — dated news, not upcoming events.
- Team updates for ovarian (June 2026), prostate and pancreas (July 2026).
- Oral history 2018 Computer History Museum interview and transcript downloads.
- Donate Donorbox campaign `https://donorbox.org/canary-campaign` — current giving destination unless the client says otherwise.
- No public page frames a past campaign or conference as still upcoming.

## Dead or retired links

| Surface | Item | Finding | Action |
| --- | --- | --- | --- |
| `/` Ways to Give | AmazonSmile as a live option | Program retired 2023 | **remove** (this PR) |
| `/donate` | AmazonSmile mention | Already explained as discontinued; no smile.amazon URL | leave |
| Financials / homepage | 2020 PDF downloads | None present; only the 2020 chart image was live | **remove** image from public render |
| Scientific Leadership | Founding-advisor URLs | Enforced by `npm run test:web-cleanse`; no `smile.amazon` URLs in source | leave pending client review of any new 404s |
| Unrouted files | `canary-approach.tsx`, `science.tsx`, `collaborations.tsx`, `imaging.tsx`, `biomarkers.tsx` | Not in the public router or sitemap | leave (already hidden) |

A full live HEAD/GET crawl of every outbound URL was not treated as a merge gate (hosts often block automated checkers). `npm run check:links` covers static HTTPS integrity and retired AmazonSmile URL patterns.

## Financials file drop (for later)

Operator drop instructions live in `docs/financials-drop.md` (not under `client/public/`). Approved files go in `client/public/docs/financials/`. Then set `href` in `client/src/data/financial-documents.ts`. Real files are still inbound from Don (6 Oct 2026); the preview holds four coming-soon slots.

| Document | Drop file | Set `href` to |
| --- | --- | --- |
| 2025 Narrative (Word → PDF) | `2025-narrative.pdf` | `/docs/financials/2025-narrative.pdf` |
| 2025 Overview (PowerPoint ~4 slides → PDF) | `2025-overview.pdf` | `/docs/financials/2025-overview.pdf` |
| 2025 Form 990 | `2025-form-990.pdf` | `/docs/financials/2025-form-990.pdf` |
| 2025 QuickBooks summary | `2025-quickbooks-summary.pdf` | `/docs/financials/2025-quickbooks-summary.pdf` |

Candy or Don approve public financial documents before they are posted. A `null` `href` renders “Coming soon” and never a broken link. The earlier two-item “Form 990 + Financial Statements” list was replaced so the page matches this four-part package.
