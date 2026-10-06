import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  FINANCIAL_DOCUMENTS_DIRECTORY,
  financialDocuments,
  financialDocumentStatus,
} from "../client/src/data/financial-documents";

const root = resolve(import.meta.dirname, "..");
const read = (path: string) => readFileSync(resolve(root, path), "utf8");

const header = read("client/src/components/header.tsx");
const footer = read("client/src/components/footer.tsx");
const financialsPage = read("client/src/pages/financials.tsx");
const homeLower = read("client/src/components/home/home-lower.tsx");
const slots = read("client/src/components/financial-document-slots.tsx");
const readme = read("client/public/docs/financials/README.md");

assert.match(header, />News</);
assert.match(header, /href="\/blog"/);
assert.doesNotMatch(header, />Blog</);
assert.match(footer, /\["News", "\/blog"\]/);

const desktopNav = header.slice(header.indexOf("hidden items-center gap-1 xl:flex"));
assert.match(
  desktopNav,
  /aria-current=\{location === "\/" \? "page" : undefined\}>Home<\/Link>\s*<Link href="\/blog"/,
  "Desktop News must sit immediately after Home",
);
assert.match(
  header,
  /aria-current=\{location === "\/" \? "page" : undefined\}>Home<\/Link>\s*<Link href="\/blog"/,
  "Mobile News must sit immediately after Home",
);

const expectedIds = [
  "narrative-2025",
  "overview-2025",
  "form-990-2025",
  "quickbooks-summary-2025",
];
assert.equal(financialDocuments.length, 4);
assert.deepEqual(
  financialDocuments.map((document) => document.id),
  expectedIds,
);
assert.equal(
  financialDocuments.some((document) => document.id === "statements-2025"),
  false,
  "The old single Financial Statements slot must not remain",
);

for (const document of financialDocuments) {
  assert.equal(document.href, null, `${document.id} must stay coming soon until a file is posted`);
  assert.equal(financialDocumentStatus(document), "coming_soon");
  assert.equal(document.dropPath.startsWith(`${FINANCIAL_DOCUMENTS_DIRECTORY}/`), true);
  assert.equal(document.formatLabel, "PDF");
}

assert.match(slots, /Coming soon/);
assert.match(financialsPage, /FinancialDocumentSlots/);
assert.match(homeLower, /FinancialDocumentSlots/);
assert.doesNotMatch(financialsPage, /\$3,963,900|12\.6¢|\$3,621,840/);
assert.doesNotMatch(homeLower, /\$3,963,900|12\.6¢|\$3,621,840|financialChart2020|AmazonSmile/);
assert.match(readme, /2025-narrative\.pdf/);
assert.match(readme, /2025-overview\.pdf/);
assert.match(readme, /2025-form-990\.pdf/);
assert.match(readme, /2025-quickbooks-summary\.pdf/);
assert.doesNotMatch(readme, /2025-financial-statements\.pdf/);
assert.doesNotMatch(financialsPage, /2025 financial statements/);
assert.doesNotMatch(homeLower, /2025 financial statements/);
assert.match(
  financialDocuments.find((document) => document.id === "overview-2025")?.description ?? "",
  /PowerPoint/,
);

console.log("Financial document slots, News nav, and retired 2020/AmazonSmile checks passed.");
