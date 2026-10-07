// Public 2025 financials package shown on /about/financials and the homepage.
// Structure matches Don Listwin's four-part set (6 Oct 2026): Narrative,
// Overview slides, Form 990, and QuickBooks summary. Real files are still inbound.
//
// To publish a document after Candy or Don approves it:
// 1. Convert Word/PowerPoint sources to PDF if needed.
// 2. Place the PDF in the matching dropPath (under client/public/).
// 3. Set href to the matching publicPath (one-line change).
// A null href never renders a download link.

export type FinancialDocumentStatus = "available" | "coming_soon";

export interface FinancialDocument {
  id: string;
  title: string;
  description: string;
  year: number;
  formatLabel: "PDF";
  /** Public URL once the file exists. Null keeps the slot in a coming-soon state. */
  href: string | null;
  /** URL to assign to href after the file is dropped in. */
  publicPath: string;
  /** Repository path for the approved file. */
  dropPath: string;
}

export const FINANCIAL_DOCUMENTS_DIRECTORY = "client/public/docs/financials";

export const financialDocuments: FinancialDocument[] = [
  {
    id: "narrative-2025",
    title: "2025 Narrative",
    description: "A narrative account of the Foundation's 2025 work and finances.",
    year: 2025,
    formatLabel: "PDF",
    href: null,
    publicPath: "/docs/financials/2025-narrative.pdf",
    dropPath: "client/public/docs/financials/2025-narrative.pdf",
  },
  {
    id: "overview-2025",
    title: "2025 Overview",
    description: "A short overview of the Foundation's 2025 finances.",
    year: 2025,
    formatLabel: "PDF",
    href: null,
    publicPath: "/docs/financials/2025-overview.pdf",
    dropPath: "client/public/docs/financials/2025-overview.pdf",
  },
  {
    id: "form-990-2025",
    title: "2025 Form 990",
    description: "The Foundation's IRS Form 990 for the 2025 tax year.",
    year: 2025,
    formatLabel: "PDF",
    href: null,
    publicPath: "/docs/financials/2025-form-990.pdf",
    dropPath: "client/public/docs/financials/2025-form-990.pdf",
  },
  {
    id: "quickbooks-summary-2025",
    title: "2025 QuickBooks summary",
    description: "A summary of the Foundation's 2025 finances.",
    year: 2025,
    formatLabel: "PDF",
    href: null,
    publicPath: "/docs/financials/2025-quickbooks-summary.pdf",
    dropPath: "client/public/docs/financials/2025-quickbooks-summary.pdf",
  },
];

export function financialDocumentStatus(
  document: FinancialDocument,
): FinancialDocumentStatus {
  return document.href ? "available" : "coming_soon";
}
