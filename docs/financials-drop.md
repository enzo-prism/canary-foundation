# Financial document drop folder

Approved public filings belong in `client/public/docs/financials/`. The Financials page reads availability from `client/src/data/financial-documents.ts`. A `null` `href` renders a coming-soon state and never a broken link.

Don Listwin canceled the QuickBooks summary on 8 October 2026. The remaining 2025 package has three pieces. Source files may arrive as Word or PowerPoint; convert to PDF before dropping them in. Candy supplied the approved 2025 Form 990 public inspection copy on 7 October 2026, following Don’s request to post it. That file is available; the other two documents remain pending.

| Document | Source | Drop this file | Then set `href` to |
| --- | --- | --- | --- |
| 2025 Narrative | Word → PDF | `2025-narrative.pdf` | `/docs/financials/2025-narrative.pdf` |
| 2025 Overview | PowerPoint (~4 slides) → PDF | `2025-overview.pdf` | `/docs/financials/2025-overview.pdf` |
| 2025 Form 990 | PDF | `2025-form-990.pdf` | `/docs/financials/2025-form-990.pdf` |

Don’s financial examples and reconciliation drafts remain on hold. Do not reinstate the canceled summary or publish replacement charts without his approval.

Do not commit draft, unaudited, or unapproved financial files. Candy or Don approve public financial documents before they are posted.

This file is repo documentation only. Do not place operator notes under `client/public/`; that directory is served on the live site.
