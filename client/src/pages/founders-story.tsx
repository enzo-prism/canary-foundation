import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  AudioLines,
  ExternalLink,
  FileText,
  HeartPulse,
  Lightbulb,
  Microscope,
  PlayCircle,
  Users,
} from "lucide-react";
import { DON_LISTWIN_TITLE_WITH_ORG } from "@/data/leadership";
import {
  caltechTranscriptPdfUrl,
  caltechTranscriptTxtUrl,
  computerHistoryMuseumInterview,
  donListwinStoryPillars,
  oralHistoryEpisodes,
  oralHistoryHeroMetrics,
  oralHistoryThemes,
} from "@/data/don-listwin-oral-history";

const pillarIcons = {
  heart: HeartPulse,
  systems: Lightbulb,
  team: Users,
  imaging: Microscope,
} as const;

export default function FoundersStory() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Don Listwin | Founder's Story & Oral History | Canary Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <section className="bg-gradient-to-b from-primary/10 via-white to-light py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.85fr)] lg:items-start">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Don Listwin
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Founder's Story
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Oral History
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
                  Don Listwin: Founder's Story & Oral History
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  The story behind Canary Foundation starts with Grace Listwin's late-stage ovarian
                  cancer diagnosis and Don Listwin's conviction that early detection needed the same
                  systems thinking, operating rigor, and collaborative ambition that once helped build
                  the internet.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  This page is the canonical Canary Foundation home for Don's background, the oral
                  history of his journey from Cisco and Openwave to {DON_LISTWIN_TITLE_WITH_ORG}, and
                  the ideas that still shape Canary's model today: team science, catalytic funding,
                  and a biomarker-plus-imaging path to action.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-primary text-white hover:bg-primary-dark">
                    <a href="#oral-history-2025">
                      Listen to the 2025 Oral History
                      <AudioLines className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    <a
                      href={computerHistoryMuseumInterview.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch the 2018 Interview
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="text-primary hover:bg-primary/5">
                    <Link href="/donate">
                      Support Early Detection
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              <Card className="border-primary/10 bg-white/90 shadow-xl">
                <CardContent className="p-6 space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                      Why this page exists
                    </p>
                    <h2 className="text-2xl font-bold text-dark mb-3">
                      A founder story tied directly to Canary's mission
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Visitors do not just need a biography. They need to understand why Don's
                      background matters to Canary's strategy, scientific partnerships, and long-term
                      view of early detection.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    {oralHistoryHeroMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-primary/10 bg-light p-4"
                      >
                        <div className="text-3xl font-bold text-dark">{metric.value}</div>
                        <h3 className="font-semibold text-dark mt-1">{metric.label}</h3>
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                          {metric.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                  Why Don's story belongs on Canary Foundation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The most useful version of this story is not celebrity biography. It is the
                  operating history behind Canary's mission, funding model, and scientific point of
                  view.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {donListwinStoryPillars.map((pillar) => {
                  const Icon = pillarIcons[pillar.icon];

                  return (
                    <Card key={pillar.title} className="border-primary/10 bg-white shadow-md">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-dark mb-3">{pillar.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                  What visitors will hear in the oral history
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The 2025 Caltech Heritage Project series is the strongest single source on how Don
                  connects personal loss, company-building experience, philanthropy, and scientific
                  execution.
                </p>
                <ul className="space-y-4">
                  {oralHistoryThemes.map((theme) => (
                    <li key={theme} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="border-primary/10 bg-white shadow-lg">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                    Core throughline
                  </p>
                  <h3 className="text-2xl font-bold text-dark mb-4">
                    The goal is not just to detect cancer earlier. It is to make early action possible.
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Across the interviews, Don returns to the same practical idea: early detection has
                    to connect scientific signal to confident intervention. That is why Canary keeps
                    investing in biomarkers, imaging, and cross-disciplinary translation rather than a
                    single magical test.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The series also explains why Canary has always cared about leverage, milestones,
                    and institutional partnerships. Those are not side tactics. They are the operating
                    model.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="oral-history-2025" className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-4xl mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Caltech Heritage Project
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Recorded March-April 2025
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                  2025 Oral History Series
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Recorded with David Zierler for the Caltech Heritage Project, this four-part series
                  traces Don Listwin's path from building Cisco's growth engine to reshaping his life
                  around early cancer detection through Canary Foundation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                <Button asChild className="bg-primary text-white hover:bg-primary-dark">
                  <a href={caltechTranscriptPdfUrl} target="_blank" rel="noopener noreferrer">
                    Full transcript (PDF)
                    <FileText className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  <a href={caltechTranscriptTxtUrl} target="_blank" rel="noopener noreferrer">
                    Full transcript (TXT)
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="grid gap-6">
                {oralHistoryEpisodes.map((episode) => (
                  <Card key={episode.title} className="border-primary/10 bg-white shadow-md">
                    <CardContent className="p-6 space-y-5">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                            Recorded {episode.date}
                          </p>
                          <h3 className="text-2xl font-semibold text-dark">{episode.title}</h3>
                          <p className="text-gray-600 mt-2">{episode.subtitle}</p>
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-primary h-fit">
                          {episode.runtime}
                        </Badge>
                      </div>

                      <audio className="w-full" controls preload="metadata">
                        <source src={episode.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>

                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                          <a href={episode.audioUrl} target="_blank" rel="noopener noreferrer">
                            Open audio
                            <PlayCircle className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                        <Button asChild variant="ghost" className="text-primary hover:bg-primary/5">
                          <a href={episode.transcriptUrl} target="_blank" rel="noopener noreferrer">
                            Episode transcript
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>

                      <ul className="grid gap-3 md:grid-cols-2">
                        {episode.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="rounded-2xl bg-light px-4 py-3 text-sm text-gray-600 leading-relaxed"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
              <div>
                <div className="aspect-video overflow-hidden rounded-3xl border border-primary/10 shadow-xl bg-black">
                  <iframe
                    src={computerHistoryMuseumInterview.embedUrl}
                    title={computerHistoryMuseumInterview.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {computerHistoryMuseumInterview.year}
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Computer History Museum
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                  Earlier oral history: the broader career arc
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {computerHistoryMuseumInterview.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {computerHistoryMuseumInterview.summaryPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-primary text-white hover:bg-primary-dark">
                    <a
                      href={computerHistoryMuseumInterview.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    <a
                      href={computerHistoryMuseumInterview.transcriptPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read transcript
                      <FileText className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Keep exploring Canary Foundation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                If you wanted the founder's story, the next useful step is understanding how that
                story shaped Canary's mission, research approach, and the work still ahead.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="bg-primary text-white hover:bg-primary-dark">
                  <Link href="/about/overview">
                    About Canary
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  <Link href="/approach/overview">
                    Canary Approach
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="text-primary hover:bg-primary/5">
                  <Link href="/donate">
                    Support the Mission
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
