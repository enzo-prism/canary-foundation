import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

interface ScientificLeader {
  name: string;
  credentials: string;
  role: string;
  institution: string;
  profileUrl: string;
}

interface ScientificProgram {
  name: string;
  description: string;
  leaders: ScientificLeader[];
}

const scientificPrograms: ScientificProgram[] = [
  {
    name: "Canary Center at Stanford for Cancer Early Detection",
    description:
      "Translational research connecting engineering, imaging, and early disease detection.",
    leaders: [
      {
        name: "Joseph DeSimone",
        credentials: "PhD",
        role: "Co-Director, Canary Center; Sanjiv Sam Gambhir Professor of Translational Medicine and Professor of Chemical Engineering",
        institution: "Stanford University",
        profileUrl: "https://cheme.stanford.edu/people/joseph-desimone",
      },
      {
        name: "Garry Gold",
        credentials: "MD, MS",
        role: "Co-Director, Canary Center; Professor of Radiology",
        institution: "Stanford University",
        profileUrl: "https://med.stanford.edu/profiles/garry-gold",
      },
    ],
  },
  {
    name: "Canary Pancreas Team",
    description:
      "Clinical research focused on pancreatic disorders, biomarkers, and earlier diagnosis.",
    leaders: [
      {
        name: "Walter Park",
        credentials: "MD",
        role: "Professor of Medicine, Gastroenterology and Hepatology",
        institution: "Stanford University",
        profileUrl: "https://med.stanford.edu/profiles/walter-park",
      },
    ],
  },
  {
    name: "Canary Ovary Team",
    description:
      "Research into the origins, prevention, and earlier detection of ovarian cancer.",
    leaders: [
      {
        name: "Ronny Drapkin",
        credentials: "MD, PhD",
        role: "Franklin Payne Professor of Pathology in Obstetrics and Gynecology",
        institution: "University of Pennsylvania",
        profileUrl: "https://www.med.upenn.edu/apps/faculty/index.php/g275/p8790102",
      },
      {
        name: "Charles Drescher",
        credentials: "MD",
        role: "Gynecologic Oncologist and Medical Director, Gynecologic Cancer Research",
        institution: "Swedish Cancer Institute; Affiliate Investigator, Fred Hutch",
        profileUrl: "https://www.swedish.org/doctors/gynecologic-oncology/wa/seattle/charles-drescher-1710939855",
      },
    ],
  },
  {
    name: "Canary Prostate Team",
    description:
      "Patient-centered research in prostate cancer screening, surveillance, and precision care.",
    leaders: [
      {
        name: "Daniel Lin",
        credentials: "MD",
        role: "Chair of Urology; Director, Institute for Prostate Cancer Research",
        institution: "Fred Hutch and University of Washington",
        profileUrl: "https://urology.uw.edu/people/faculty/daniel-lin",
      },
      {
        name: "Peter Nelson",
        credentials: "MD",
        role: "Vice President, Precision Oncology; Professor and Physician",
        institution: "Fred Hutch and University of Washington",
        profileUrl: "https://www.fredhutch.org/en/people/n/peter-nelson.html",
      },
    ],
  },
  {
    name: "Canary Translational Ultrasound Center",
    description:
      "AI-driven and molecular ultrasound research for accessible cancer detection and care.",
    leaders: [
      {
        name: "Ahmed El Kaffas",
        credentials: "PhD",
        role: "Associate Professor of Radiology; Principal Investigator, Translational Ultrasound Lab",
        institution: "University of California San Diego",
        profileUrl: "https://tul.ucsd.edu/team/1",
      },
    ],
  },
];

export default function ScientificLeadership() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <section className="bg-light py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                The people guiding our science
              </p>
              <h1 className="mb-6 text-4xl font-bold text-dark md:text-5xl">
                Scientific Leadership
              </h1>
              <p className="text-xl leading-relaxed text-gray-600">
                Canary Foundation works with scientific leaders across research centers and
                disease-focused teams to move early detection discoveries toward patient care.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl space-y-14">
              {scientificPrograms.map((program) => (
                <section
                  key={program.name}
                  aria-labelledby={program.name.replaceAll(" ", "-").toLowerCase()}
                >
                  <div className="mb-7 max-w-3xl">
                    <h2
                      id={program.name.replaceAll(" ", "-").toLowerCase()}
                      className="mb-3 text-2xl font-bold text-dark md:text-3xl"
                    >
                      {program.name}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                      {program.description}
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {program.leaders.map((leader) => (
                      <Card
                        key={leader.name}
                        className="border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                      >
                        <CardContent className="p-7">
                          <div className="flex items-start gap-5">
                            <div
                              aria-hidden="true"
                              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary"
                            >
                              {leader.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-dark">
                                {leader.name}, {leader.credentials}
                              </h3>
                              <p className="mt-2 leading-relaxed text-gray-700">{leader.role}</p>
                              <p className="mt-2 text-sm font-medium text-gray-500">
                                {leader.institution}
                              </p>
                              <a
                                href={leader.profileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                              >
                                View institutional profile
                                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}

              <p className="border-t border-gray-200 pt-8 text-sm leading-relaxed text-gray-500">
                Leadership affiliations and profile links reflect current institutional
                information. Select a profile to learn more about each leader's work.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
