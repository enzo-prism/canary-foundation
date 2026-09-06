import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const reports = [
  {
    title: "Prostate cancer: surveillance, inherited risk, and imaging",
    date: "July 2026",
    href: "/science/programs/team-updates/prostate-july-2026",
    description: "The prostate team reports progress in PASS active surveillance research, PATROL screening for inherited risk, prostate-specific imaging, and patient tools. The work connects research on cancer risk with decisions about monitoring and treatment.",
  },
  {
    title: "Pancreatic cancer: evaluating ultrasound approaches",
    date: "July 2026",
    href: "/science/programs/team-updates/pancreas-july-2026",
    description: "The pancreas team is evaluating handheld point-of-care ultrasound, microbubble contrast enhancement, and quantitative ultrasound. Its report describes clinical comparisons with endoscopic ultrasound and partnerships supporting the research.",
  },
  {
    title: "Ovarian cancer: imaging and risk research",
    date: "June 2026",
    href: "/science/programs/team-updates/ovarian-june-2026",
    description: "The ovarian team reports work on fallopian tube imaging, blood tests, personalized risk resources, and preventive surgery approaches. Its report distinguishes research already evaluated from studies and pilot procedures still being prepared.",
  },
];

export default function ClinicalProgress() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold text-dark md:text-5xl">Clinical Progress</h1>
            <p className="text-xl leading-relaxed text-gray-600">
              Follow Canary-supported research from laboratory questions to clinical studies. The research teams' dated reports explain what has been studied, what is being evaluated, and what comes next.
            </p>
          </div>
        </section>
        <section aria-labelledby="progress-heading" className="py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 id="progress-heading" className="mb-4 text-3xl font-bold text-dark">What progress are the research teams reporting?</h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              These summaries are based on the June and July 2026 team reports. Each report provides the context for its research findings and plans.
            </p>
            <div className="space-y-6">
              {reports.map((report) => (
                <Card key={report.href} className="border-primary/20">
                  <CardContent className="p-6 md:p-8">
                    <p className="mb-2 text-sm font-semibold text-gray-600">Team report · {report.date}</p>
                    <h3 className="mb-4 text-2xl font-semibold text-dark">{report.title}</h3>
                    <p className="mb-5 leading-relaxed text-gray-600">{report.description}</p>
                    <Link href={report.href} className="inline-flex min-h-11 items-center gap-2 font-semibold text-dark underline decoration-primary underline-offset-4 hover:decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      Read the {report.date} team report <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 rounded-xl bg-light p-6 md:p-8">
              <h2 className="mb-3 text-2xl font-semibold text-dark">Explore the clinical studies</h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                Learn how PASS and PATROL address different prostate cancer research questions and how the pancreas team is evaluating imaging approaches.
              </p>
              <Button asChild className="bg-primary text-dark hover:bg-primary-dark">
                <Link href="/science/programs/clinical-studies">Read about Canary clinical studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
