import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function ApproachOverview() {
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
                Canary Approach
              </h1>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Discover. Invent. Collaborate. Innovate. Repeat.
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                This is the Canary approach, and it's what makes it possible for us to maximize results in early cancer detection. Like a startup, we embrace investing early, failing forward, and continually pivoting to achieve success.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Approach */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Self-Sustaining Platform</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Where other foundations may have a single model for investment, we see our success as building a 'self-sustaining platform' that is enabling everything from world class research facilities to collaborations with academia and partnerships with industry to ongoing clinical programs, and successful spinouts of diagnostic companies.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    But our real success will be measured by the lives we ultimately save with breakthrough innovations in early cancer detection. The cancer fight requires this kind of bold, innovative approach.
                  </p>
                </div>
                <div>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-dark mb-4">Platform Components</h3>
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          World class research facilities
                        </div>
                        <div className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Academic collaborations
                        </div>
                        <div className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Industry partnerships
                        </div>
                        <div className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Ongoing clinical programs
                        </div>
                        <div className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Diagnostic company spinouts
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Strategy */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Funding Strategy</h2>
              
              <div className="grid gap-16">
                
                {/* Funding New Ideas */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">Funding New Ideas—New Ways of Thinking and Doing</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      We are all about the big idea in cancer research, but that doesn't mean we can't start small. Canary funds small, short-term discovery projects for new ideas and technologies.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      The pilot data and other discoveries from these small projects give our scientists a competitive advantage in the government fund-raising process with grants from the National Institutes of Health, one of the world's foremost medical research centers, and others. And it's working.
                    </p>
                  </div>
                  <div>
                    <Card className="bg-white">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-dark mb-4">Funding Approach</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <span className="text-gray-700">Small Discovery Projects</span>
                            <span className="text-primary font-semibold">Short-term</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <span className="text-gray-700">Pilot Data Generation</span>
                            <span className="text-primary font-semibold">Competitive Edge</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <span className="text-gray-700">NIH Grant Success</span>
                            <span className="text-primary font-semibold">Proven Results</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* University Collaborations */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <Card className="bg-white">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-dark mb-4">Canary Center at Stanford</h4>
                        <div className="space-y-3">
                          <div className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            $50-million, 10-year investment
                          </div>
                          <div className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            First integrated diagnostic center
                          </div>
                          <div className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            In vivo and in vitro diagnostics
                          </div>
                          <div className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Molecular imaging and proteomics
                          </div>
                          <div className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Chemistry and bioinformatics
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">Breaking New Ground on University Collaborations</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      The Canary Center at Stanford was formed in 2009 with a $50-million, 10-year investment.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      It is the model for future early cancer detection centers, and the first center in the world to integrate research in both in vivo and in vitro diagnostics to deliver these tests by housing state of the art core facilities and collaborative research programs in molecular imaging, proteomics, chemistry, and bioinformatics.
                    </p>
                  </div>
                </div>

                {/* Spinout Companies */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">Spinning Out New Diagnostics Companies</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      As we spin out new diagnostic test companies, or medical device and imaging technology, we feel confident that the Canary funding platform and approach works. Commercial viability is the ultimate test. Canary-funded research is finding its way into commercialization.
                    </p>
                  </div>
                  <div>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-dark mb-4">Commercial Success</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          Our spinout companies represent the ultimate validation of the Canary approach—transforming breakthrough research into real-world diagnostic solutions.
                        </p>
                        <div className="text-sm text-gray-500">
                          Commercial viability is the ultimate test of our platform's effectiveness.
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}