import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Dna,
  FileText,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const updateQueue = [
  {
    name: "Ovarian Cancer Team",
    status: "June 2026 update posted",
    description:
      "Advancing earlier detection and prevention of high-grade serous ovarian cancer.",
  },
  {
    name: "Prostate Cancer Team",
    status: "Update coming next",
    description:
      "A dedicated prostate update will be added when the next report is ready.",
  },
  {
    name: "Pancreatic Cancer Team",
    status: "Update pending",
    description:
      "The pancreatic team update slot is ready for the next program report.",
  },
];

const highlights = [
  {
    label: "37",
    title: "candidate biomarkers nominated",
    text: "The team used computational approaches and prior studies, including Precancer Atlas work, to nominate candidates for early detection testing.",
  },
  {
    label: "5",
    title: "ovarian-cell-specific signals",
    text: "Laboratory testing on 20 candidates identified five that appear to be present only in ovarian cells.",
  },
  {
    label: "0.973",
    title: "AUC for the four-marker panel",
    text: "The strongest initial blood panel combined FTC1p, FTC2, CA125, and HE4 across a 160-sample case-control cohort.",
  },
  {
    label: "365+",
    title: "STIC lesions assembled",
    text: "The international STIC network has built the world's largest collection of these rare fallopian tube precursor lesions.",
  },
];

const strategies = [
  {
    icon: Dna,
    title: "Earlier blood-based detection markers",
    purpose:
      "Find molecules that appear in blood early enough to detect cancer before symptoms develop.",
    progress:
      "The team generated the Ovarian Precancer Atlas, built a pipeline from fallopian tube biology to blood testing, nominated 37 candidate biomarkers, tested 20 in the lab, and identified five ovarian-cell-specific signals. FTC1p and FTC2 are now priority markers for deeper blood-sample validation.",
  },
  {
    icon: Microscope,
    title: "Understanding which lesions become dangerous",
    purpose:
      "Learn which early fallopian tube lesions progress to aggressive cancer and which remain harmless.",
    progress:
      "The international STIC network now spans 20 participating institutions and has assembled the world's largest collection of these rare fallopian tube precursor lesions, totaling more than 365 cases. The team has completed molecular profiling on 36 STIC samples and built a centralized REDCap database to integrate pathology, molecular, and clinical outcome data.",
  },
  {
    icon: ShieldCheck,
    title: "Expanding preventive surgery approaches",
    purpose:
      "Prevent ovarian cancer through salpingectomy — removing the fallopian tubes while preserving the ovaries and their hormone function.",
    progress:
      "A multidisciplinary team of surgeons, gynecologic oncologists, health-outcomes researchers, and communication experts is working with the Michigan Surgical Quality Collaborative to promote fallopian tube removal during non-gynecologic abdominal surgeries as a statewide quality initiative for 2026-2027. Starting at the University of Michigan and backed by new philanthropic and grant support, the group is addressing billing, surgeon training, consent, and pathology workflows before the first pilot procedures begin in late 2026, with later expansion across Michigan and into Washington state under exploration.",
  },
  {
    icon: Users,
    title: "Personalized risk reduction resources",
    purpose:
      "Give women and clinicians clearer tools for prevention, early detection, and informed decision-making.",
    progress:
      "The team is building an ovarian cancer risk calculator, patient-friendly education, and links to current resources, clinical studies, and trials. Work includes collaborating with international experts to update CRUK/Cambridge's validated CanRisk platform, running focus groups for average-risk women, and evaluating regulatory and launch requirements.",
  },
  {
    icon: Stethoscope,
    title: "Ultrasound and MR-based imaging strategies",
    purpose:
      "Develop imaging methods that can directly visualize fallopian tubes and detect tiny early lesions, complementing the emerging blood tests and improving diagnostic accuracy.",
    progress:
      "The team has an IRB-approved protocol for high-frequency and intravascular ultrasound imaging of surgically removed fallopian tubes, submitted a first-of-its-kind 2D and 3D microbubble contrast-enhanced ultrasound study for high-risk patients, and evaluated an advanced MR diffusion model on 44 patients.",
  },
];

export default function TeamUpdates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <section className="bg-light py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Team Updates
                </div>
              </div>
              <h1 className="mb-6 text-4xl font-bold text-dark md:text-5xl">
                Current Progress From Canary Research Teams
              </h1>
              <p className="text-xl leading-relaxed text-gray-600">
                Focused updates on the ovarian, prostate, and pancreatic cancer teams as they move earlier detection science toward prevention and clinical impact.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 grid gap-6 md:grid-cols-3">
                {updateQueue.map((item) => (
                  <Card
                    key={item.name}
                    className="border-2 border-primary/20 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center text-sm font-semibold text-primary">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        {item.status}
                      </div>
                      <h2 className="mb-3 text-xl font-bold text-dark">
                        {item.name}
                      </h2>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-l-4 border-primary bg-light shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="mb-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-primary">
                    <span className="inline-flex items-center rounded-full bg-white px-4 py-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      June 2026
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white px-4 py-2">
                      Ovarian Cancer Team
                    </span>
                  </div>
                  <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
                    Advancing Earlier Detection and Prevention of High-Grade Serous Ovarian Cancer
                  </h2>
                  <div className="space-y-5 text-lg leading-relaxed text-gray-700">
                    <p>
                      High-grade serous ovarian cancer is the most common and aggressive form of ovarian cancer. Because most women are still diagnosed at a late, hard-to-treat stage, the Canary Ovarian Cancer Team is focused on finding cancer sooner and expanding practical prevention.
                    </p>
                    <p>
                      A core insight now shapes the program: many of these cancers begin in the fallopian tubes. What began as a discovery about cancer origin is now guiding work in blood biomarkers, precursor-lesion biology, preventive surgery, personalized risk resources, and imaging.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-light py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-dark md:text-4xl">
                Key Progress Signals
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {highlights.map((item) => (
                  <Card key={item.title} className="bg-white shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-3 text-4xl font-bold text-primary">
                        {item.label}
                      </div>
                      <h3 className="mb-3 text-lg font-bold text-dark">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-6 text-center text-3xl font-bold text-dark md:text-4xl">
                Five-Part Research Strategy
              </h2>
              <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
                The ovarian update is organized around five connected strategies: find earlier signals, understand which lesions become dangerous, expand prevention, support personalized decisions, and improve imaging.
              </p>

              <div className="space-y-6">
                {strategies.map((strategy) => {
                  const Icon = strategy.icon;
                  return (
                    <Card
                      key={strategy.title}
                      className="border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                    >
                      <CardContent className="p-6 md:p-8">
                        <div className="grid gap-6 md:grid-cols-[64px_1fr]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="mb-3 text-2xl font-bold text-dark">
                              {strategy.title}
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                              <strong>Purpose:</strong> {strategy.purpose}
                            </p>
                            <p className="leading-relaxed text-gray-600">
                              <strong>Progress:</strong> {strategy.progress}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
                  Early Blood Test Evidence
                </h2>
                <div className="space-y-5 text-lg leading-relaxed text-gray-700">
                  <p>
                    The report's clearest visual evidence is the biomarker panel chart. It shows that combining the known markers CA125 and HE4 with the newly discovered FTC1p and FTC2 improves the team's ability to distinguish ovarian cancer cases from healthy controls in an initial cohort of 160 blood samples — 90 from ovarian cancer patients and 60 from healthy women.
                  </p>
                  <p>
                    This is still validation-stage science, so we frame it as encouraging progress rather than a finished screening test. The next step is testing these markers in blood collected up to years before diagnosis to confirm whether they can detect cancer earlier.
                  </p>
                </div>
              </div>

              <figure className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <img
                  src="/team-updates/ovarian-biomarker-panel-roc.png"
                  alt="Four receiver operating characteristic charts comparing ovarian cancer biomarker panel performance."
                  className="w-full bg-white"
                />
                <figcaption className="border-t border-gray-100 p-4 text-sm leading-relaxed text-gray-600">
                  Initial case-control results: FTC1p alone showed AUC 0.899; FTC1p plus FTC2 showed AUC 0.944; adding CA125 increased AUC to 0.972; adding HE4 reached AUC 0.973.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
                Looking Ahead
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                The next wave of work includes expanding blood biomarker validation, beginning fallopian tube ultrasound studies in summer 2026, scaling prevention implementation efforts statewide, and continuing to build the STIC network and centralized data infrastructure.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-primary-dark"
                >
                  <Link href="/science/programs/tumors/ovarian">
                    Explore Ovarian Research <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <Link href="/donate">Support the Research</Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-gray-500">
                Source: Canary Foundation Ovarian Cancer Team Progress Report, June 2026.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
