import { useEffect } from "react";
import { FileText } from "lucide-react";
import { TeamUpdateCard } from "@/components/team-updates/team-update-card";
import { TeamUpdatesLayout } from "@/components/team-updates/team-updates-layout";
import { publishedTeamUpdates } from "@/data/team-updates";

export default function TeamUpdates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TeamUpdatesLayout>
      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-sm">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Team Updates
          </div>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Progress From Canary Research Teams
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
            Approved reports on how Canary teams are moving early detection
            science toward prevention and clinical impact.
          </p>
        </div>
      </section>

      <section aria-labelledby="published-updates" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-9 max-w-3xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-600">
              Research reports
            </p>
            <h2
              id="published-updates"
              className="mb-4 text-3xl font-bold text-slate-950 sm:text-4xl"
            >
              Published Updates
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              Each update below has been cleared for public use. New reports
              will appear here only after approval.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {publishedTeamUpdates.map((update) => (
              <TeamUpdateCard key={update.id} update={update} />
            ))}
          </div>
        </div>
      </section>
    </TeamUpdatesLayout>
  );
}
