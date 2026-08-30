# Design audit — 30 August 2026

Visual QA of [canaryfoundation.org](https://canaryfoundation.org) against the current React/Express source. This pass fixed layout, contrast, and interaction bugs. It did not change approved science copy, Team Update content, or donation destinations.

## Bugs found and fixed

### P0 — visual breaks

| Issue | Where | Fix |
| --- | --- | --- |
| Inner pages added `pt-20` on `<main>` while the header is `sticky` (in document flow), creating a double header gap | About, Donate, Financials, Staff, Science, Team Updates, and 13 other pages | Removed the extra padding; kept `id="main-content"` for skip-link |
| Logo video Pause/Play control sat inside a circular `overflow-hidden` mask and was clipped | Homepage video | Moved the control below the circle |
| Two homepage “Read More →” news items were buttons with no destination | PATROL and Gambhir cards | Linked PATROL to the prostate program page and Gambhir to Scientific Leadership |
| Community carousel arrows used conflicting `top` values and sat relative to the whole card (caption included) | Homepage gallery | Centered arrows on the image only |

### P1 — obvious polish

| Issue | Where | Fix |
| --- | --- | --- |
| Desktop nav crowded at 1024px (7 items + Take Action) | Header | Desktop nav from `lg` to `xl`; hamburger below that |
| Timeline was a 26-card horizontal strip with a mobile-only hint and no desktop controls | Homepage journey | Added prev/next controls and a scroll hint on all viewports |
| Timeline cards used a fixed `h-48` that clipped selected copy | Homepage journey | Min-height cards that show the full description |
| Empty yellow/black gradient blocks looked like missing images | Program, news, and impact sections | Replaced with icon headers, real Challenge photos, or text cards |
| Program cards were inconsistent (only Prostate had a CTA) | Research Programs | Every card links to the matching program or center page |
| Internal links used the ExternalLink icon | Homepage CTAs | Replaced with ArrowRight |
| Yellow buttons declared `text-white` (fails contrast on Canary yellow) | Homepage, Donate, Blog | Dark text on yellow; CSS utility already forces this as a fallback |
| Footer hover used Canary yellow on charcoal | Footer | White hover on dark for readable links |
| Blog breadcrumb always appended `...` after the first 50 characters | Blog posts | CSS truncate of the full title |
| Blog posts added `pt-24` as if the header were `fixed` | Blog posts | Normal in-flow spacing under the sticky header |
| 2025 Highlights callout could wrap the arrow off-card on small screens | Homepage hero | Stacked layout with `min-w-0` |

### P2 — smaller

| Issue | Where | Fix |
| --- | --- | --- |
| Scroll-in animations started at `opacity: 0`, so content stayed invisible if JS never marked them visible | Global CSS | Default visible; fade-in only when motion is allowed |
| Carousel dots reserved space for hidden hover titles, causing uneven wrapping | Homepage gallery | Simple dots with accessible names |
| Header wordmark could wrap against the hamburger | Mobile header | Truncate + nowrap wordmark |
| Twelve program/center pages had no `<main>`, so skip-to-content had nothing to target | Tumor, Stanford, FHCC, and clinical pages | Wrapped page content in `<main id="main-content">` |
| Remaining yellow CTAs and numbered chips still declared `text-white` | Donate, program, founder, and science pages | Dark text on Canary yellow |

## Left unchanged on purpose

- Homepage splash (“THE BEGINNING.”) — intentional, skippable with click or Escape
- Donorbox note `(opens Donorbox, secure)` on Donate Online CTAs
- 2020 financials (latest approved public figures)
- Retired `/science/science/*` routes staying 404
- Replit remaining the production host for canaryfoundation.org until a separate Replit publish

## Verification

- `npm run check` (TypeScript)
- Local preview of homepage, donate, about, blog, and a blog post at desktop and mobile widths
- Keyboard skip-link still targets `#main-content`

## Shipping

Source of truth is GitHub `enzo-prism/canary-foundation` on `main`. Production at [canaryfoundation.org](https://canaryfoundation.org) is a separate Replit autoscale deployment. Pushing `main` does **not** republish the live site.

To put these design fixes on production:

1. Confirm the reviewed commit is on GitHub `main`.
2. Open the Replit app (`replit.com/@enzo78/CanaryWebsite`) and **Publish** so the new build is what the domain serves.
3. Smoke-check the homepage (skip splash), Donate, About, Blog, and a Team Updates page on the public domain.

Rollback: restore the previous Replit deployment, or revert the GitHub `main` commit and republish.
