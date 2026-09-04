import { Link, useLocation } from "wouter";
import { GAMBHIR_AWARD_SHORT_NAME } from "@/data/awards";

const awardLinks = [
  { name: "Awards", path: "/about/awards" },
  { name: "Don Listwin Award", path: "/about/awards/listwin" },
  { name: GAMBHIR_AWARD_SHORT_NAME, path: "/about/awards/gambhir" },
] as const;

export function AwardsSubnav() {
  const [location] = useLocation();

  return (
    <nav aria-label="Awards pages" className="border-b border-slate-200 bg-white">
      <div className="container mx-auto px-4">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-2 py-3">
          {awardLinks.map((item) => {
            const isCurrent = location === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isCurrent
                      ? "bg-primary text-dark"
                      : "bg-slate-50 text-slate-700 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
