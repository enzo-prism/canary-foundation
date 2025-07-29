import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Centers() {
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
                Centers
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Canary-Originated Worldclass Research Centers
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At the Canary Foundation, we are proud of our deep access to some of the best minds in cancer research and our groundbreaking university/research center collaborations.
              </p>
            </div>
          </div>
        </section>

        {/* Foundation Story */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">The Foundation Story</h2>
              
              <div className="space-y-8">
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-dark mb-6">The Beginning at Fred Hutchinson</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      It all began when Canary Founder Don Listwin discovered the work of epidemiologist Dr. Nicole Urban and a new field called biomarkers at the Fred Hutchinson Cancer Center in Seattle in 2001. He ended up funding some of her work and then later met Nobel Laureate Dr. Lee Hartwell, director of the center.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Don's $10-million investment helped establish the core of a biomarker discovery and analysis program at the HUTCH, and the HUTCH remains one of Canary's 'Centers of Excellence' today.
                    </p>
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h4 className="font-bold text-dark mb-2">Key Milestones</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          2001: Discovery of Dr. Nicole Urban's biomarker work
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          $10 million investment in biomarker discovery program
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Partnership with Nobel Laureate Dr. Lee Hartwell
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-dark mb-6">Expansion to Stanford University</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      But it didn't stop there. In 2009, we forged a collaboration with Stanford University to create the Canary Center at Stanford, a world-class facility dedicated to early cancer detection research programs.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      The Canary Center at Stanford is the model for future early cancer detection centers that will be developed. Our approach is to build a self-sustaining platform that will enable everything from renowned research facilities to collaborations with academia, ongoing clinical programs, and successful spinouts of diagnostic companies.
                    </p>
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h4 className="font-bold text-dark mb-2">Stanford Center Vision</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Self-sustaining research platform
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Academic collaborations
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Ongoing clinical programs
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Successful diagnostic company spinouts
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8">Looking Forward</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                In just 10 years we've achieved significant milestones and key accomplishments with numerous institutions, think what is possible in the next 10 years.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Past 10 Years</h3>
                    <p className="text-gray-600">
                      Significant milestones and key accomplishments with numerous institutions worldwide.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Next 10 Years</h3>
                    <p className="text-gray-600">
                      Unlimited possibilities for expanding early cancer detection centers globally.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Where Canary Science is Happening */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Where Canary Science is Happening</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-3">Canary Center at Stanford</h3>
                    <div className="text-sm text-primary font-semibold mb-4">Stanford, California</div>
                    <p className="text-gray-600 mb-4">
                      World-class facility dedicated to early cancer detection research programs. The model for future early cancer detection centers.
                    </p>
                    <div className="text-sm text-gray-500">Established: 2009</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-3">Fred Hutchinson Cancer Research Center</h3>
                    <div className="text-sm text-primary font-semibold mb-4">Center of Excellence, Seattle, Washington</div>
                    <p className="text-gray-600 mb-4">
                      The genesis institution for Canary Foundation. Home to biomarker discovery and analysis program.
                    </p>
                    <div className="text-sm text-gray-500">Partnership began: 2001</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-gray-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-3">MD Anderson Cancer Center</h3>
                    <div className="text-sm text-gray-600 font-semibold mb-4">Houston, Texas</div>
                    <p className="text-gray-600 mb-4">
                      Strategic partnership for advancing cancer research and clinical applications.
                    </p>
                    <div className="text-sm text-gray-500">Collaborative Partner</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-gray-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-3">CRUK</h3>
                    <div className="text-sm text-gray-600 font-semibold mb-4">London, United Kingdom</div>
                    <p className="text-gray-600 mb-4">
                      International collaboration with Cancer Research UK for global early detection initiatives.
                    </p>
                    <div className="text-sm text-gray-500">International Partner</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-gray-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-3">OHSU Knight Cancer Institute</h3>
                    <div className="text-sm text-gray-600 font-semibold mb-4">Portland, Oregon</div>
                    <p className="text-gray-600 mb-4">
                      Partnership with Oregon Health & Science University for comprehensive cancer research.
                    </p>
                    <div className="text-sm text-gray-500">Regional Partner</div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-3">Global Network</h3>
                    <div className="text-sm text-primary font-semibold mb-4">Worldwide Collaboration</div>
                    <p className="text-gray-600 mb-4">
                      Expanding network of research centers and academic partnerships dedicated to early cancer detection.
                    </p>
                    <div className="text-sm text-primary">Growing Worldwide</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Research Excellence */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Research Excellence Network</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-dark mb-4">Centers of Excellence</h3>
                    <div className="text-3xl font-bold text-primary mb-2">2</div>
                    <p className="text-gray-600">
                      Dedicated Canary-originated research centers leading early detection innovation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-dark mb-4">Collaborative Partners</h3>
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <p className="text-gray-600">
                      Strategic partnerships with world-renowned cancer research institutions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-dark mb-4">Global Reach</h3>
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <p className="text-gray-600">
                      Countries represented in our international early detection research network.
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