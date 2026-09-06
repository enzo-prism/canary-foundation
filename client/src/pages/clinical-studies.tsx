import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Shield, Target, ArrowRight } from "lucide-react";

const prostateReport = "/science/programs/team-updates/prostate-july-2026";
const pancreasReport = "/science/programs/team-updates/pancreas-july-2026";
const researchStudies = [
  {
    id: "pass",
    title: "What is the Canary PASS study?",
    icon: Activity,
    description: "The Prostate Active Surveillance Study (PASS) follows men with early-stage, low-risk prostate cancer who choose active surveillance. The research studies how to distinguish favorable-risk cancers from aggressive disease and support decisions about treatment.",
    href: prostateReport,
    linkLabel: "Read the July 2026 PASS research update",
  },
  {
    id: "patrol",
    title: "What is the Canary PATROL study?",
    icon: Shield,
    description: "PATROL studies prostate cancer screening for men with inherited risk of aggressive disease. The team is investigating how imaging, biomarkers, and PSA thresholds can inform screening and biopsy decisions for this population.",
    href: prostateReport,
    linkLabel: "Read the July 2026 PATROL research update",
  },
  {
    id: "pancreatic-imaging",
    title: "How is pancreatic imaging being studied?",
    icon: Target,
    description: "The pancreas team is evaluating handheld point-of-care ultrasound, contrast enhancement with microbubbles, and quantitative ultrasound. Clinical trials compare pancreatic imaging with endoscopic ultrasound and investigate new ways to assess tissue characteristics.",
    href: pancreasReport,
    linkLabel: "Read the July 2026 pancreas research update",
  },
];

export default function ClinicalStudies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-dark md:text-5xl">Clinical Studies</h1>
              <p className="text-xl leading-relaxed text-gray-600">
                Canary-supported studies investigate active surveillance, inherited-risk screening, and imaging technologies. Explore the research questions and the teams' published progress reports.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="clinical-research-heading" className="py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 id="clinical-research-heading" className="mb-4 text-3xl font-bold text-dark">From research questions to clinical evidence</h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              Clinical research helps teams evaluate promising approaches to cancer detection and management. These summaries draw on the prostate and pancreas teams' July 2026 reports; each links to the report for further detail.
            </p>
            <div className="space-y-6">
              {researchStudies.map(({ id, title, icon: Icon, description, href, linkLabel }) => (
                <Card key={id} id={id} className="scroll-mt-24 border-primary/20">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                        <Icon aria-hidden="true" className="h-6 w-6 text-dark" />
                      </span>
                      <h3 className="text-xl font-semibold text-dark md:text-2xl">{title}</h3>
                    </div>
                    <p className="mb-5 leading-relaxed text-gray-600">{description}</p>
                    <Link href={href} className="inline-flex min-h-11 items-center gap-2 font-semibold text-dark underline decoration-primary underline-offset-4 hover:decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      {linkLabel}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 rounded-xl bg-light p-6 md:p-8">
              <h2 className="mb-3 text-2xl font-semibold text-dark">How do PASS and PATROL differ?</h2>
              <p className="leading-relaxed text-gray-600">
                PASS follows men already diagnosed with early-stage, low-risk prostate cancer who choose active surveillance. PATROL focuses on screening men with inherited risk of aggressive prostate cancer. They address different questions: monitoring a diagnosed cancer and screening a population at genetic risk.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="bg-primary text-dark hover:bg-primary-dark">
                <Link href="/science/programs/team-updates">Explore all team research updates</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/donate">Support Canary research</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
