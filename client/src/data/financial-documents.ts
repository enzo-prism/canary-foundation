// Public financial filings shown on /about/financials and the homepage.
//
// To publish a document after Candy approves it:
// 1. Place the PDF in the matching dropPath (under client/public/).
// 2. Set href to the matching publicPath (one-line change).
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
    title: "2025 Form 990",
    description:
      "IRS Form 990 for the 2025 tax year. The download will appear here after the approved PDF is posted.",
    year: 2025,
    formatLabel: "PDF",
    href: null,
    publicPath: "/docs/financials/2025-form-990.pdf",
    dropPath: "client/public/docs/financials/2025-form-990.pdf",
  },
  {
    id: "statements-2025",
    title: "2025 Financial Statements",
    description:
      "2025 financial statements (Word source, published as PDF). The download will appear here after the approved PDF is posted.",
    year: 2025,
    formatLabel: "PDF",
    href: null,
    publicPath: "/docs/financials/2025-financial-statements.pdf",
    dropPath: "client/public/docs/financials/2025-financial-statements.pdf",
  },
];

export function financialDocumentStatus(
  document: FinancialDocument,
): FinancialDocumentStatus {
  return document.href ? "available" : "coming_soon";
}
