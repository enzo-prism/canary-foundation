# Team Update Publication Workflow

This workflow prevents draft, confidential, or scientifically unapproved research material from reaching the public website.

## Publication states

- `draft`: A private working state. It must not be imported by the browser application, routed publicly, included in generated metadata, or listed in a sitemap.
- `review`: Content is being checked for scientific accuracy, public-use permission, accessibility, and donor-friendly clarity. It remains private.
- `approved`: The named approver has given written permission for public use and the final facts match the approved source.
- `published`: The approved update is live and has passed production verification.
- `archived`: A previously published update remains available as a dated historical record.

## Required evidence before publication

Every public report must record:

1. The final public source filename or source URL.
2. The program and reporting period.
3. The person who approved scientific accuracy.
4. The person who approved public use.
5. The written approval date.
6. Whether the source PDF may be offered as a download.
7. Sources for every metric, chart, and medical claim.
8. Alt text and a visible caption for every public figure.

## Roles

- Don approves priorities, naming, titles, and the final publication decision.
- Heidi coordinates donor-friendly research copy and scientific approval.
- Scientific leads approve medical and research claims.
- Candy approves public financial documents.
- Renata approves donation operations and donor-facing operational copy, not scientific claims.

## Safe implementation sequence

1. Keep raw reports and private working files outside `client/`, `client/public/`, and generated build output.
2. Create only a content-free shell under `internal/` until written approval exists. Never import it from `client/`.
3. Build the private preview from the approved source and produce a fact checklist.
4. Confirm that confidential terms and superseded metrics are absent.
5. Obtain written approval for the exact preview and any downloadable PDF.
6. Change the content state to `approved` and add the route to public metadata and sitemap sources.
7. Build and run the content-safety, type, SEO, accessibility, and production checks.
8. Publish only after explicit release approval.
9. Verify the public page, metadata, sitemap, downloads, redirects, and rollback target.

## Current report status

| Report | State | Public action |
| --- | --- | --- |
| Ovarian Team Progress, June 2026 | Approved and published | Preserve the final donor-friendly facts. |
| Prostate Program, July 2026 | Awaiting explicit public-use approval | Keep content private; do not publish or expose report details. |
| Pancreatic update | Not supplied | Keep a content-free placeholder only. |
| Q4 general overview | Not supplied | Keep a content-free placeholder only. |
| UCSD CTUC launch | Not supplied | Keep a content-free placeholder only. |

## Known safety rules

- Never restore facts from the earlier confidential ovarian draft.
- Do not treat receiving an attachment as permission to publish it.
- Do not host a full paper without confirmed open-access rights; link to an official citation or PubMed instead.
- Never publish unaudited or incomplete internal financial material.
- Do not add a pending route to client navigation, metadata, JSON-LD, crawler files, or a sitemap.
