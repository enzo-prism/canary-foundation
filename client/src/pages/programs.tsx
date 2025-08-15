import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Programs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
                Programs
              </h1>
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
                Our Focus: 5 Cancer Types—How Many Lives Saved?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                What if we could improve lung cancer screening for all people, regardless of smoking status? Or what if we found a way to identify ovarian cancer long before it became lethal? And why can't benign breast cancer tissue be more easily identified from cancerous tissue, resulting in less worry and trauma for the patient? This is the program work done at the Canary Foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Leadership */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="bg-white shadow-lg border-l-4 border-primary">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-4">Research Leadership</h3>
                      <h4 className="text-xl font-bold text-primary mb-3">Dr. Sanjiv (Sam) Gambhir</h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Dr. Sanjiv (Sam) Gambhir discusses next-generation technologies being developed at Canary Center at Stanford. His pioneering work in molecular imaging and cancer detection has revolutionized early diagnosis approaches.
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
                Today, our clinical programs cover tumors across five cancer types: breast, lung, ovarian, pancreatic, and prostate. As part of our approach, we pull together multidisciplinary teams that approach cancer problems in new ways. Each team works with a practicing oncologist, focusing on a specific clinical problem, and many of these teams now have ongoing clinical trials underway. They know, and we know, that identifying early stage cancers saves lives.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Breast Cancer</h3>
                    <p className="text-gray-600 mb-4">
                      Why can't benign breast cancer tissue be more easily identified from cancerous tissue, resulting in less worry and trauma for the patient?
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm text-primary font-semibold">Research Focus:</div>
                      <div className="text-sm text-gray-600">Distinguishing benign from malignant tissue</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
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

                <Card className="bg-white shadow-lg border-l-4 border-primary">
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

                <Card className="bg-white shadow-lg border-l-4 border-primary">
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

                <Card className="bg-white shadow-lg border-l-4 border-primary">
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

                <Card className="bg-white shadow-lg border-l-4 border-gray-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Multidisciplinary Approach</h3>
                    <p className="text-gray-600 mb-4">
                      Cross-cancer insights and technologies that benefit all five cancer types through shared innovation.
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
                They know, and we know, that identifying early stage cancers saves lives. Our multidisciplinary approach across five cancer types creates new possibilities for early detection and better patient outcomes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">5</h3>
                    <h4 className="text-lg font-bold text-dark mb-2">Cancer Types</h4>
                    <p className="text-gray-600">
                      Comprehensive programs covering breast, lung, ovarian, pancreatic, and prostate cancers.
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
      </main>

      <Footer />
    </div>
  );
}