# Release And Rollback Checklist

GitHub `main` and the Replit production deployment are separate release states. A push does not publish the live site.

The 30 August 2026 design-audit pass (layout, contrast, and interaction) is documented in [design-audit-2026-08-30.md](./design-audit-2026-08-30.md). It is a visual-only release: no science copy, Team Update facts, or Donorbox destinations changed.

**Release state on 30 August 2026**

- GitHub `enzo-prism/canary-foundation` `main` holds the design-audit source (homepage split at `290af644` and later).
- Local preview was verified on that source (homepage, donate, about, blog, mobile hamburger).
- Production at canaryfoundation.org is **not** this commit until Replit Publish runs on `replit.com/@enzo78/CanaryWebsite`.

## Before review

- Confirm the working tree contains only intended Canary Foundation changes.
- Record the current production commit and public asset hashes.
- Confirm no raw reports, credentials, contact submissions, or unapproved content are present in source or build artifacts.
- Run `npm ci`, `npm run check`, and `npm run build`.
- Run all repository smoke, crawler, SEO, redirect, content-safety, and security checks.
- Review the site at mobile, tablet, laptop, and desktop widths.
- Test keyboard navigation, visible focus, 200% zoom, reduced motion, form errors, and screen-reader labels.
- Verify that unknown routes return a real `404` response.
- Verify that approved routes have matching title, description, canonical URL, JSON-LD, and sitemap entries.
- Verify that pending report routes do not appear in public HTML, navigation, metadata, JSON-LD, crawler files, or sitemaps.

## Release approval

- Show the exact commit, change summary, screenshots, test results, known limitations, and rollback target.
- Obtain approval before pushing the reviewed release to `main`.
- Obtain a separate explicit approval immediately before publishing through Replit.

## Production verification

- Confirm the public domain serves the reviewed commit and asset hashes.
- Verify the homepage, contact page, Team Updates hub, approved report details, financials, donation routes, and public crawler assets.
- Verify canonical host redirects and representative legacy redirects.
- Submit a non-sensitive contact-form test only when a safe test destination and production approval are available.
- Confirm response security and caching headers.
- Confirm there are no console errors or broken first-party assets.
- Record the production verification date, commit, deployment identifier, and checker.

## Rollback

If verification fails:

1. Remove sensitive or unapproved content from public access first.
2. Restore the prior Replit deployment when available, or revert the release commit and republish.
3. Re-run the production smoke checks.
4. Record the incident, affected routes, rollback commit/deployment, and follow-up owner.
