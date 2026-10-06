# Financial document drop folder

Approved public filings belong here. The Financials page reads availability from `client/src/data/financial-documents.ts`. A `null` `href` renders a coming-soon state and never a broken link.

Don Listwin's 2025 package has four pieces. Source files may arrive as Word or PowerPoint; convert to PDF before dropping them in. Real files are still inbound.

| Document | Source | Drop this file | Then set `href` to |
| --- | --- | --- | --- |
| 2025 Narrative | Word → PDF | `2025-narrative.pdf` | `/docs/financials/2025-narrative.pdf` |
| 2025 Overview | PowerPoint (~4 slides) → PDF | `2025-overview.pdf` | `/docs/financials/2025-overview.pdf` |
| 2025 Form 990 | PDF | `2025-form-990.pdf` | `/docs/financials/2025-form-990.pdf` |
| 2025 QuickBooks summary | PDF | `2025-quickbooks-summary.pdf` | `/docs/financials/2025-quickbooks-summary.pdf` |

Do not commit draft, unaudited, or unapproved financial files. Candy or Don approve public financial documents before they are posted.
