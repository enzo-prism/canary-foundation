import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import type { PublishedTeamUpdate } from "@/data/team-updates";

interface TeamUpdateCardProps {
  update: PublishedTeamUpdate;
}

export function TeamUpdateCard({ update }: TeamUpdateCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md motion-reduce:transition-none">
      <div className="h-2 bg-primary" aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-5 flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-emerald-800">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Published
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            {update.dateLabel}
          </span>
        </div>

        <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-600">
          {update.teamName}
        </p>
        <h2 className="mb-4 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
          {update.title}
        </h2>
        <p className="mb-7 flex-1 text-base leading-7 text-slate-700">
          {update.summary}
        </p>

        <Link
          href={update.route}
          className="inline-flex min-h-11 items-center gap-2 self-start rounded-md bg-slate-950 px-5 py-3 font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-reduce:transition-none"
          aria-label={`Read the ${update.dateLabel} ${update.teamName} update`}
        >
          Read the update
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
