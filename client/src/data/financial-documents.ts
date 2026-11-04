// Public 2025 financials package shown on /about/financials and the homepage.
// Don confirmed on 3 Nov 2026 that the public Form 990 is the only
// 2025 financial document to display.
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
    id: "form-990-2025",
    title: "2025 Form 990 (public inspection copy)",
    description: "The public inspection copy of the Foundation's IRS Form 990 for the 2025 tax year.",
    year: 2025,
    formatLabel: "PDF",
    href: "/docs/financials/2025-form-990.pdf",
    publicPath: "/docs/financials/2025-form-990.pdf",
    dropPath: "client/public/docs/financials/2025-form-990.pdf",
  },
];

export function financialDocumentStatus(
  document: FinancialDocument,
): FinancialDocumentStatus {
  return document.href ? "available" : "coming_soon";
}
