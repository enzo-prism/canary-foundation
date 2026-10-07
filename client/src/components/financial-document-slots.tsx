import { Clock, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  financialDocuments,
  financialDocumentStatus,
  type FinancialDocument,
} from "@/data/financial-documents";

const focusStyle =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b38600] focus-visible:ring-offset-2";

function DocumentAction({ document }: { document: FinancialDocument }) {
  const status = financialDocumentStatus(document);

  switch (status) {
    case "available":
      return (
        <a
          href={document.href ?? undefined}
          className={`inline-flex min-h-11 items-center rounded-lg bg-[#ffc400] px-4 text-sm font-semibold text-[#242722] hover:bg-[#efd000] ${focusStyle}`}
        >
          Download {document.formatLabel}
        </a>
      );
    case "coming_soon":
      return (
        <span
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-black/10 bg-[#f2f0e6] px-4 text-sm font-semibold text-[#65685e]"
          aria-label={`${document.title} coming soon`}
        >
          <Clock aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />
          Coming soon
        </span>
      );
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}

export function FinancialDocumentSlots({
  documents = financialDocuments,
}: {
  documents?: FinancialDocument[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {documents.map((document) => (
        <Card key={document.id} className="border border-gray-200 bg-white shadow-none">
          <CardContent className="flex h-full flex-col p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100">
              <FileText aria-hidden="true" className="h-6 w-6 text-dark" strokeWidth={1.7} />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#65685e]">
              {document.year} · {document.formatLabel}
            </p>
            <h3 className="mb-3 text-xl font-semibold text-dark">{document.title}</h3>
            <p className="mb-6 flex-1 leading-relaxed text-gray-600">{document.description}</p>
            <DocumentAction document={document} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
