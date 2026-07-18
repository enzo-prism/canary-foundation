import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Dna,
  FileText,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import type {
  PublishedTeamUpdate,
  TeamUpdateIcon,
} from "@/data/team-updates";

const strategyIcons = {
  dna: Dna,
  microscope: Microscope,
  "shield-check": ShieldCheck,
  stethoscope: Stethoscope,
  users: Users,
} satisfies Record<TeamUpdateIcon, typeof Dna>;

interface PublishedTeamUpdateProps {
  update: PublishedTeamUpdate;
}

export function PublishedTeamUpdateReport({
  update,
}: PublishedTeamUpdateProps) {
  return (
    <article>
      <header className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-slate-600">
              <li>
                <Link
                  href="/science/programs/team-updates"
                  className="inline-flex min-h-11 items-center gap-2 rounded-sm py-2 underline decoration-slate-300 underline-offset-4 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Team Updates
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{update.teamName}</li>
            </ol>
          </nav>

          <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {update.dateLabel}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <FileText className="h-4 w-4" aria-hidden="true" />
              {update.teamName}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {update.title}
          </h1>
        </div>
      </header>

      <section aria-labelledby="report-introduction" className="py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <h2 id="report-introduction" className="sr-only">
            Report introduction
          </h2>
          <div className="border-l-4 border-primary pl-5 sm:pl-8">
            <div className="space-y-5 text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
              {update.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="progress-signals"
        className="bg-slate-50 py-12 sm:py-16 lg:py-20"
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="progress-signals"
            className="mb-10 text-3xl font-bold text-slate-950 sm:text-4xl"
          >
            {update.highlightsTitle}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {update.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="mb-3 text-4xl font-bold text-slate-950">
                  {highlight.label}
                </p>
                <h3 className="mb-3 text-lg font-bold leading-snug text-slate-950">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-6 text-slate-700">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="research-strategy" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 max-w-3xl">
            <h2
              id="research-strategy"
              className="mb-4 text-3xl font-bold text-slate-950 sm:text-4xl"
            >
              {update.strategySectionTitle}
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              {update.strategySectionSummary}
            </p>
          </div>

          <ol className="space-y-5">
            {update.strategies.map((strategy, index) => {
              const Icon = strategyIcons[strategy.icon];
              return (
                <li
                  key={strategy.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="grid gap-6 sm:grid-cols-[64px_1fr]">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-slate-950"
                      aria-hidden="true"
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-600">
                        Strategy {index + 1}
                      </p>
                      <h3 className="mb-4 text-2xl font-bold leading-tight text-slate-950">
                        {strategy.title}
                      </h3>
                      <dl className="space-y-4 leading-7 text-slate-700">
                        <div>
                          <dt className="font-bold text-slate-950">Purpose</dt>
                          <dd>{strategy.purpose}</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-slate-950">Progress</dt>
                          <dd>{strategy.progress}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {update.features && update.features.length > 0 ? (
        <section
          aria-labelledby="report-tools"
          className="bg-slate-50 py-12 sm:py-16 lg:py-20"
        >
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <h2
              id="report-tools"
              className="mb-10 text-3xl font-bold text-slate-950 sm:text-4xl"
            >
              Patient Tools
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {update.features.map((feature) => {
                const Icon = strategyIcons[feature.icon];
                return (
                  <article
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                  >
                    <div
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-slate-950"
                      aria-hidden="true"
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      {feature.text}
                    </p>
                    {feature.link ? (
                      <a
                        href={feature.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md border-2 border-slate-900 bg-white px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-reduce:transition-none"
                      >
                        {feature.link.label}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {update.evidence ? (
        <section
          aria-labelledby="evidence-title"
          className="bg-slate-50 py-12 sm:py-16 lg:py-20"
        >
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <h2
                id="evidence-title"
                className="mb-5 text-3xl font-bold text-slate-950 sm:text-4xl"
              >
                {update.evidence.title}
              </h2>
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                {update.evidence.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src={update.evidence.image.src}
                alt={update.evidence.image.alt}
                className="h-auto w-full bg-white"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="border-t border-slate-200 p-5 text-sm leading-6 text-slate-700">
                {update.evidence.image.caption}
              </figcaption>
            </figure>
          </div>
        </section>
      ) : null}

      <section aria-labelledby="looking-ahead" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2
            id="looking-ahead"
            className="mb-5 text-3xl font-bold text-slate-950 sm:text-4xl"
          >
            {update.lookingAheadTitle}
          </h2>
          <p className="mx-auto mb-9 max-w-3xl text-lg leading-8 text-slate-700">
            {update.lookingAhead}
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={update.programRoute}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              {update.programLinkLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/donate"
              className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-slate-900 bg-white px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              Support the Research
            </Link>
          </div>
          <p className="mt-9 text-sm leading-6 text-slate-600">
            Source: {update.sourceLabel}
          </p>
        </div>
      </section>
    </article>
  );
}
