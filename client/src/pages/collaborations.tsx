import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Collaborations() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Collaborations & Partnerships
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Building a global network of research institutions, healthcare organizations, 
                and technology partners to accelerate early cancer detection breakthroughs.
              </p>
            </div>
          </div>
        </section>

        {/* Key Partnerships */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Key Partnerships</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Fred Hutchinson Cancer Center</h3>
                    <p className="text-gray-600 mb-4">
                      Our founding partner and anchor institution, leading breakthrough research 
                      in ovarian cancer biomarkers and early detection technologies.
                    </p>
                    <div className="text-sm text-primary font-semibold">Seattle, WA</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Stanford University</h3>
                    <p className="text-gray-600 mb-4">
                      Collaborative research in molecular imaging, photoacoustic technologies, 
                      and advanced cancer detection methodologies.
                    </p>
                    <div className="text-sm text-primary font-semibold">Stanford, CA</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">MD Anderson Cancer Center</h3>
                    <p className="text-gray-600 mb-4">
                      Partnership in lung cancer research, focusing on biomarkers for 
                      never-smokers and underserved populations.
                    </p>
                    <div className="text-sm text-primary font-semibold">Houston, TX</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">University of Cambridge</h3>
                    <p className="text-gray-600 mb-4">
                      International collaboration in computational biology and AI-driven 
                      cancer detection algorithms and biomarker discovery.
                    </p>
                    <div className="text-sm text-primary font-semibold">Cambridge, UK</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Johns Hopkins Medicine</h3>
                    <p className="text-gray-600 mb-4">
                      Collaborative research in pancreatic cancer detection using advanced 
                      ultrasound imaging and POCUS technology innovations.
                    </p>
                    <div className="text-sm text-primary font-semibold">Baltimore, MD</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Karolinska Institute</h3>
                    <p className="text-gray-600 mb-4">
                      European partnership in precision medicine approaches and 
                      population-based cancer screening studies.
                    </p>
                    <div className="text-sm text-primary font-semibold">Stockholm, Sweden</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Model */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Our Collaboration Model</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-6">Integrated Research Network</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We foster deep, long-term partnerships that combine diverse expertise, 
                    resources, and perspectives to tackle the most challenging problems in early cancer detection.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our collaborative approach ensures that breakthroughs are shared across 
                    the network, accelerating progress and maximizing impact for patients worldwide.
                  </p>
                </div>
                <div>
                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-bold text-dark mb-4">Partnership Benefits</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Shared expertise and complementary capabilities
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Access to diverse patient populations and datasets
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Coordinated clinical trials and validation studies
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Accelerated technology development and translation
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Global reach and implementation capabilities
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Partnerships */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Industry Partnerships</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">Technology Companies</h3>
                    <p className="text-sm text-gray-600">
                      Collaborating on AI platforms and digital health solutions
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">Pharmaceutical Partners</h3>
                    <p className="text-sm text-gray-600">
                      Joint development of targeted therapies and diagnostics
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">Medical Device Companies</h3>
                    <p className="text-sm text-gray-600">
                      Innovation in imaging and detection device development
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">Healthcare Systems</h3>
                    <p className="text-sm text-gray-600">
                      Implementation and validation in clinical practice
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