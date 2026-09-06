import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Dna, ScanLine, Waves, ShieldCheck } from "lucide-react";

export default function Programs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="main-content" tabIndex={-1}>
        <section className="border-b border-[#e4e6dc] bg-[#f8f7f2] py-12 md:py-20">
          <div className="container mx-auto max-w-6xl px-5 md:px-8">
            <p className="eyebrow mb-5">Our science / Research programs</p>
            <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[1.1] text-dark md:text-6xl">Research with a shared purpose.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#64695a]">Explore our work in prostate, ovarian, pancreatic, and lung cancer, and the science connecting earlier detection with better decisions.</p>
            <nav aria-label="Choose a cancer research program" className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Prostate cancer", path: "prostate", icon: ShieldCheck },
                { name: "Ovarian cancer", path: "ovarian", icon: Dna },
                { name: "Pancreatic cancer", path: "pancreatic", icon: Waves },
                { name: "Lung cancer", path: "lung", icon: ScanLine },
              ].map(({ name, path, icon: Icon }) => (
                <Link key={path} href={`/science/programs/tumors/${path}`} className="group flex min-h-24 items-center gap-3 rounded-xl border border-[#e0e3d7] bg-white p-4 transition-colors hover:border-[#b7c29f] hover:bg-[#fcfdf8]">
                  <span className="science-icon"><Icon aria-hidden="true" strokeWidth={1.6} /></span>
                  <span className="text-sm font-semibold text-dark">{name}</span><ArrowUpRight aria-hidden="true" className="ml-auto h-4 w-4 shrink-0 text-[#69754b]" />
                </Link>
              ))}
            </nav>
          </div>
        </section>
        {/* Research context */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-8 text-3xl font-medium text-dark">Why earlier matters</h2>
              <div className="text-lg text-gray-700 leading-relaxed mb-8 space-y-4">
                <p className="font-semibold text-xl">
                  10 more years… Imagine the gift of 10 more years after hearing the big, ugly C word. Unfortunately, today that gift is rare—a vast majority of patients live a few months past their diagnosis. Early detection can change that.
                </p>
                <p>
                  10 more years for a parent translates to giving your kids the foundation to be a good human being. 10 more years means a parent could watch his or her child graduate and go to prom. 10 more years may mean living to hold your grandchild. We may not be able to cure cancer in this lifetime, but we definitely have a shot at early detection, early treatment and loving life longer.
                </p>
                <p className="italic text-gray-600">
                  Dr. Nishita Kothary<br />
                  Associate Professor, Radiology, Stanford Medicine
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Our Focus: 4 Cancer Types—How Many Lives Saved?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                What if we could improve lung cancer screening for all people, regardless of smoking status? Or identify ovarian, pancreatic, or prostate cancer early enough to change a patient's options? This is the program work done at the Canary Foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Leadership */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="bg-white shadow-none border border-[#e0e3d7] rounded-2xl">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-4">Research Leadership</h3>
                      <h4 className="text-xl font-bold text-primary mb-3">Sanjiv Sam Gambhir</h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Sanjiv Sam Gambhir discussed next-generation technologies developed at Canary Center at Stanford. His pioneering work in molecular imaging and cancer detection revolutionized early diagnosis approaches.
                      </p>
                      <div className="bg-primary/5 p-6 rounded-lg">
                        <h5 className="font-bold text-dark mb-2">Research Focus</h5>
                        <p className="text-gray-600 text-sm">
                          Next-generation technologies for early cancer detection and molecular imaging innovations at Stanford.
                        </p>
                      </div>
                    </div>
                    <div className="bg-light p-8 rounded-lg">
                      <h5 className="text-lg font-bold text-dark mb-4">Technology Development</h5>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Next-generation imaging systems
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Molecular detection platforms
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Biomarker identification tools
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Clinical translation strategies
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinical Programs Overview */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-8">Clinical Programs</h2>
              <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto">
                Today, our active clinical program pages cover lung, ovarian, pancreatic, and prostate cancer. We bring together multidisciplinary teams that approach cancer problems in new ways. Each team works with practicing clinicians on specific clinical questions, and many of these teams have ongoing clinical studies. Identifying early-stage cancers saves lives.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <Card className="bg-white shadow-none border border-[#e0e3d7] rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Lung Cancer</h3>
                    <p className="text-gray-600 mb-4">
                      What if we could improve lung cancer screening for all people, regardless of smoking status?
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm text-primary font-semibold">Research Focus:</div>
                      <div className="text-sm text-gray-600">Universal screening beyond smoking history</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-none border border-[#e0e3d7] rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Ovarian Cancer</h3>
                    <p className="text-gray-600 mb-4">
                      What if we found a way to identify ovarian cancer long before it became lethal?
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm text-primary font-semibold">Research Focus:</div>
                      <div className="text-sm text-gray-600">Early identification before lethality</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-none border border-[#e0e3d7] rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Pancreatic Cancer</h3>
                    <p className="text-gray-600 mb-4">
                      Advanced detection methods for one of the most challenging cancers to diagnose early.
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm text-primary font-semibold">Research Focus:</div>
                      <div className="text-sm text-gray-600">Early detection of aggressive tumors</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-none border border-[#e0e3d7] rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Prostate Cancer</h3>
                    <p className="text-gray-600 mb-4">
                      Improving precision in diagnosis and reducing unnecessary interventions through better detection.
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm text-primary font-semibold">Research Focus:</div>
                      <div className="text-sm text-gray-600">Precision diagnosis and monitoring</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-none border border-[#e0e3d7] rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Multidisciplinary Approach</h3>
                    <p className="text-gray-600 mb-4">
                      Cross-cancer insights and technologies that benefit Canary's active programs through shared innovation.
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600 font-semibold">Research Focus:</div>
                      <div className="text-sm text-gray-600">Universal detection platforms</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Approach */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Multidisciplinary Team Approach</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-dark mb-4">Practicing Oncologists</h3>
                    <p className="text-gray-600 mb-4">
                      Each team works with practicing oncologists who understand real-world clinical challenges and patient needs.
                    </p>
                    <div className="text-sm text-primary font-semibold">Clinical Expertise</div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-dark mb-4">Specific Clinical Problems</h3>
                    <p className="text-gray-600 mb-4">
                      Teams focus on specific clinical problems, ensuring research directly addresses patient care gaps.
                    </p>
                    <div className="text-sm text-primary font-semibold">Targeted Solutions</div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-dark mb-4">Ongoing Clinical Trials</h3>
                    <p className="text-gray-600 mb-4">
                      Many teams have ongoing clinical trials underway, translating research into real-world applications.
                    </p>
                    <div className="text-sm text-primary font-semibold">Clinical Translation</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Lives Saved Impact */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8">
                Identifying Early Stage Cancers Saves Lives
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                They know, and we know, that identifying early-stage cancers saves lives. Our multidisciplinary approach across active cancer programs creates new possibilities for early detection and better patient outcomes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">4</h3>
                    <h4 className="text-lg font-bold text-dark mb-2">Cancer Types</h4>
                    <p className="text-gray-600">
                      Active program pages covering lung, ovarian, pancreatic, and prostate cancers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">∞</h3>
                    <h4 className="text-lg font-bold text-dark mb-2">Lives to Save</h4>
                    <p className="text-gray-600">
                      Every breakthrough in early detection has the potential to save countless lives worldwide.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-4 text-3xl font-bold text-dark">Follow the research into clinical studies</h2>
            <p className="mb-6 leading-relaxed text-gray-600">Read about the studies and explore dated reports from the research teams.</p>
            <ul className="flex flex-wrap gap-4">
              <li><Link href="/science/programs/clinical-studies" className="inline-flex min-h-11 items-center rounded-lg border border-primary/20 bg-white px-5 py-3 font-semibold text-dark hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Explore clinical studies</Link></li>
              <li><Link href="/science/programs/clinical-progress" className="inline-flex min-h-11 items-center rounded-lg border border-primary/20 bg-white px-5 py-3 font-semibold text-dark hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Read about clinical progress</Link></li>
              <li><Link href="/science/funding-by-invitation" className="inline-flex min-h-11 items-center rounded-lg border border-primary/20 bg-white px-5 py-3 font-semibold text-dark hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Learn about research funding by invitation</Link></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
