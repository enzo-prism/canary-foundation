import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function ScientificLeadership() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Scientific Leadership
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                World-renowned scientists and researchers driving breakthrough discoveries 
                in early cancer detection and precision medicine.
              </p>
            </div>
          </div>
        </section>

        {/* Scientific Advisory Board */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Scientific Advisory Board</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg border-t-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">LH</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Lee Hartwell</h3>
                    <p className="text-primary font-semibold text-center mb-4">Nobel Laureate, Scientific Advisor</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Nobel Prize winner and former President of Fred Hutchinson Cancer Research Center. 
                      Pioneer in cancer biomarker research and early detection technologies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-t-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">NU</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Nicole Urban</h3>
                    <p className="text-primary font-semibold text-center mb-4">Ovarian Cancer Research Director</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Leading researcher in ovarian cancer biomarkers and early detection. 
                      Principal investigator on multiple breakthrough studies funded by Canary Foundation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-t-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">SS</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Sam Seiden</h3>
                    <p className="text-primary font-semibold text-center mb-4">Molecular Imaging Pioneer</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Expert in photoacoustic imaging and contrast agent development. 
                      Leading innovations in molecular imaging for early cancer detection.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-t-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">MT</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Mary Thompson</h3>
                    <p className="text-primary font-semibold text-center mb-4">Liquid Biopsy Expert</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Pioneering researcher in circulating tumor DNA and liquid biopsy technologies. 
                      Advancing non-invasive cancer detection methods.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-t-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">JC</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. James Chen</h3>
                    <p className="text-primary font-semibold text-center mb-4">Radiochemistry Director</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Leading expert in radiotracer development and cyclotron technology. 
                      Advancing PET imaging for early cancer detection and staging.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-t-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">AR</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Anna Rodriguez</h3>
                    <p className="text-primary font-semibold text-center mb-4">Computational Biology Lead</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Expert in machine learning and AI applications for cancer biomarker discovery. 
                      Developing predictive models for early detection algorithms.
                    </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Research Excellence</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-6">Leading Scientific Innovation</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Our scientific leadership represents the pinnacle of cancer research expertise, 
                    with Nobel laureates, pioneering researchers, and innovative technology developers 
                    working together to advance early detection science.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Their collective experience spans decades of breakthrough discoveries, 
                    translating fundamental research into life-saving clinical applications.
                  </p>
                </div>
                <div>
                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-bold text-dark mb-4">Research Impact</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Publications in Top Journals</span>
                          <span className="text-2xl font-bold text-primary">500+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Patents Filed</span>
                          <span className="text-2xl font-bold text-primary">150+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Clinical Trials Led</span>
                          <span className="text-2xl font-bold text-primary">75+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Research Awards</span>
                          <span className="text-2xl font-bold text-primary">200+</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Priorities */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Current Research Priorities</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Multi-Cancer Detection</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Developing comprehensive screening platforms that can detect multiple cancer types 
                      from a single blood draw or biological sample.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Precision Medicine</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Advancing personalized approaches to cancer detection based on individual 
                      genetic profiles, biomarkers, and risk factors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">AI-Driven Discovery</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Leveraging artificial intelligence and machine learning to identify novel 
                      biomarkers and improve detection accuracy and speed.
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