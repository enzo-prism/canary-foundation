# Financial document drop folder

Approved public filings belong in `client/public/docs/financials/`. The Financials page reads availability from `client/src/data/financial-documents.ts`. A `null` `href` renders a coming-soon state and never a broken link.

On 3 November 2026, Don Listwin asked to show only the 2025 Form 990. Candy supplied the approved public inspection copy on 7 October 2026. The existing file is `client/public/docs/financials/2025-form-990.pdf` and is linked from both the homepage and Financials page.

Don’s financial examples and reconciliation drafts remain on hold. Do not reinstate the canceled summary or publish replacement charts without his approval.

Do not commit draft, unaudited, or unapproved financial files. Candy or Don approve public financial documents before they are posted.

This file is repo documentation only. Do not place operator notes under `client/public/`; that directory is served on the live site.
