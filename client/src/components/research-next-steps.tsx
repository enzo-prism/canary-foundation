import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

type ResearchNextStepsProps = {
  update?: { href: string; label: string };
};

/** Connect program summaries to the underlying research and dated reports. */
export function ResearchNextSteps({ update }: ResearchNextStepsProps) {
  const links = [
    ...(update ? [update] : []),
    { href: "/science/centers/stanford/biomarkers", label: "Biomarker research at Stanford" },
    { href: "/science/centers/stanford/imaging", label: "Imaging research at Stanford" },
    { href: "/science/programs/tumors", label: "Explore all cancer research programs" },
  ];

  return (
    <nav aria-label="Related research" className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
      <h2 className="mb-3 text-2xl font-semibold text-dark">Explore the research</h2>
      <p className="mb-5 leading-relaxed text-gray-600">
        Follow the research from program overviews to the technologies and team reports behind it.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="flex min-h-11 items-center justify-between gap-3 rounded-lg bg-white p-4 font-semibold text-dark hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              {label}
              <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
