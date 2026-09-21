# Q4 overview and CTUC at UCSD: editorial readiness

Reviewed September 20, 2026. This document is an internal preparation checklist, not approved website copy. The July 7 donor-report email thread confirms Don's request for a Q4 general overview and space for CTUC at UCSD in October. October 1, 2026 is eleven days after this review; no exact public launch date is confirmed.

## Implementation ready for content

Both items already have content-free records in `internal/team-update-shells.ts`. The existing Team Updates system supports an index card, dated detail page, report sections, optional evidence, metadata, and sitemap discovery. Use that presentation after approval rather than publishing empty pages now.

The records remain pending and explicitly unapproved. They have no browser imports, public routes, metadata, report facts, or assets. These preparation documents and shell records must not be copied to `client/public/` or included in generated crawler assets.

## Intake checklist

| Required input | Q4 general overview | CTUC at UCSD |
| --- | --- | --- |
| Intended public use | Confirm general overview audience and scope with Don. | Confirm whether this is a center introduction, launch announcement, or team report. |
| Final source | Obtain donor-friendly copy from Don or Heidi. | Obtain donor-friendly copy and the approved full center name from Don or Heidi. |
| Timing | Confirm publication date within Q4 2026. | Confirm October date and whether an announcement embargo applies. |
| Facts | Identify source and reporting period for each scientific claim and metric. | Confirm institution naming, leadership, affiliations, research scope, and source of each claim. |
| Media and downloads | Confirm approved images, captions, alt text, credits, and separate download permission. | Confirm approved images, captions, alt text, credits, and separate download permission. |
| Final approval | Record approval of exact page preview by Don or Heidi. | Record approval of exact page preview by Don or Heidi. |

Receiving a source file is not public-use or download approval. Do not infer a scientific program, launch date, or institutional endorsement from the working label “CTUC at UCSD.”

## Fill-in handoff record

Complete one record per item outside public application data. Leave unknown values explicitly pending.

```text
Shell ID: q4-overview / ctuc
Approved public title: pending
Audience and scope: pending
Final source filename/version: pending
Source supplied by and date: pending
Fact checklist and source locations: pending
Approved institutional names and affiliations: pending
Reporting period: pending
Requested publication date and embargo/time zone: pending
Images/captions/alt text/credit permission: pending
Download permission, separately confirmed: pending
Exact preview reviewed: pending
Public-use approver, date, and evidence: pending
Release approver and date: pending
Production page and verification date: pending
```

## Promotion and verification

1. Complete intake and create an access-controlled preview from the final source. Do not expose unapproved content through a public preview URL.
2. Obtain written approval for the exact preview. Follow `docs/team-update-publication-workflow.md` for claim and download restrictions.
3. Add the approved record to `client/src/data/team-updates.ts`, reuse the shared report presentation, and wire its route and loading entry. Add matching metadata and canonical sitemap discovery only at this stage.
4. Remove the corresponding pending shell and update `scripts/test-team-updates.ts` to reflect the newly approved report, retaining the private-content protections for any remaining shell.
5. Run type, Team Updates, SEO, SSR, route-loading, and relevant accessibility checks against a fresh production build. Inspect the card and full report on desktop and mobile, including any approved downloads.
6. Record release authorization, publish the approved build, then verify the production page, index card, metadata, sitemap, and permitted downloads. A main-branch push alone does not complete the Replit deployment.

## Current boundary

Preparation is available; publication remains blocked on approved source content, timing, and exact-preview approval. This document does not mark either requested update as publicly complete.
