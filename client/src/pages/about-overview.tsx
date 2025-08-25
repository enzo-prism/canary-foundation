import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function AboutOverview() {
  const { toast } = useToast();
  
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
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                About Canary Foundation
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                The world's first non-profit organization dedicated solely to the funding, discovery, 
                and development of tests for early cancer detection.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    To support research aimed at creating reliable and affordable early detection tests for cancer.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Founded in 2004 by Don Listwin after he lost his mother to misdiagnosed ovarian cancer, 
                    he envisioned a world of simple and safe tests that could identify and isolate cancer 
                    at its earliest, most curable stage.
                  </p>
                </div>
                <div>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-4">Our Impact</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Over $75 million raised for early detection research
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          World's first non-profit dedicated solely to early cancer detection
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Results-only business approach with global collaborations
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Cross-disciplinary partnerships with renowned institutions
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Canary, Why Now */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Why Canary, Why Now</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    No one gets time back. And for those with cancer and their families, that can be devastating. 
                    The Canary Foundation has started to do something about that.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Today, a short 17 years later, the Canary Foundation has raised more than $75 million 
                    to support early detection research. And we've moved faster than science typically moves, 
                    from theory to tractable problem to clinical use in many areas, thanks to Canary's 
                    collaborative approach.
                  </p>
                  <blockquote className="text-xl font-semibold text-primary italic border-l-4 border-primary pl-6">
                    "The National Cancer Institute estimates that one in two men will get cancer in their lifetime, 
                    and one in three women. We aren't waiting any longer, the time for action is now."
                  </blockquote>
                </div>
                <div>
                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-4">Key Partnerships</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-dark">Canary Center at Stanford</h4>
                          <p className="text-gray-600 text-sm">Leading cancer early detection research</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-dark">Fred Hutchinson Cancer Center</h4>
                          <p className="text-gray-600 text-sm">Center of Excellence for early detection</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-dark">Cancer Research UK (CRUK)</h4>
                          <p className="text-gray-600 text-sm">International collaboration partner</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-dark">Cambridge University</h4>
                          <p className="text-gray-600 text-sm">Global research collaboration</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Cancer Calling */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Our Cancer Calling—Biomarkers and Imaging</h2>
              
              <div className="text-center mb-12">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Early detection saves lives. There's no debate. So what if someday soon, cancer screening 
                  was as simple as a urine or blood test or an inexpensive imaging test at your annual doctor's appointment?
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Signs of cancer could be exposed before they technically became cancer. And treatment would be 
                  so minor, you might even forget you ever had it. That's the world we envision. We want early 
                  cancer detection tests to be commonplace—and always the first line of defense for cancer.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-6">Two-Prong Diagnostic Strategy</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Blood-based Biomarkers</h4>
                        <p className="text-gray-600">
                          Discovering biological 'fingerprints' that show the presence or progress of disease. 
                          These identify individuals who are likely to have cancer.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Molecular Imaging</h4>
                        <p className="text-gray-600">
                          Advanced imaging technologies paired with biomarkers to pinpoint and verify 
                          specific cancer types with unprecedented accuracy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-bold text-dark mb-4">Clinical Programs</h4>
                      <p className="text-gray-600 mb-4">
                        Our clinical programs today cover tumors across five cancer types:
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="font-semibold text-dark">Breast</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="font-semibold text-dark">Lung</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="font-semibold text-dark">Ovarian</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="font-semibold text-dark">Pancreatic</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg col-span-2">
                          <div className="font-semibold text-dark">Prostate</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Highlights */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Innovation Highlights</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Magneto-Nano Sensor</h3>
                    <p className="text-gray-600 mb-4">
                      Breakthrough device developed to measure blood biomarkers for prostate cancer. 
                      This innovative sensor is 10,000 times more sensitive than existing tests.
                    </p>
                    <div className="text-sm text-primary font-semibold">10,000x more sensitive</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Microbubble Project</h3>
                    <p className="text-gray-600 mb-4">
                      Novel enhanced ultrasound-based imaging technique that has recently received 
                      FDA approval for clinical use.
                    </p>
                    <div className="text-sm text-primary font-semibold">FDA Approved</div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <blockquote className="text-lg italic text-gray-600 border-l-4 border-primary pl-6 max-w-3xl mx-auto">
                  "We are very grateful to the Canary Foundation for this gift establishing the Canary Center 
                  at Stanford for Cancer Early Detection. It will enable researchers to focus on early discovery, 
                  saving lives and benefiting many in the greater community."
                  <footer className="text-base text-gray-500 mt-4 not-italic">— John Hennessy, President of Stanford</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}