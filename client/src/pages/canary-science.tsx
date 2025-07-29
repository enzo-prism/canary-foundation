import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function CanaryScience() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Canary Science
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advancing the science of early cancer detection through innovative research programs, 
                cutting-edge technologies, and collaborative excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Research Programs Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Research Programs</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Prostate Cancer Program</h3>
                    <p className="text-gray-600 mb-4">
                      PASS study with 1,100+ participants and PATROL genetic risk cohort 
                      advancing personalized screening approaches.
                    </p>
                    <div className="text-sm text-primary font-semibold">Active Studies: 3</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Ovarian Cancer Program</h3>
                    <p className="text-gray-600 mb-4">
                      BRCA pre-cancer atlas and fallopian tube precursor studies 
                      for early detection biomarker development.
                    </p>
                    <div className="text-sm text-primary font-semibold">Active Studies: 4</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Pancreatic Cancer Program</h3>
                    <p className="text-gray-600 mb-4">
                      Advanced ultrasound imaging and POCUS technology 
                      for early pancreatic cancer detection.
                    </p>
                    <div className="text-sm text-primary font-semibold">Active Studies: 2</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Liquid Biopsy Center</h3>
                    <p className="text-gray-600 mb-4">
                      Urine analysis, interstitial fluid research, and microneedle patches 
                      for non-invasive cancer detection.
                    </p>
                    <div className="text-sm text-primary font-semibold">Active Studies: 5</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Molecular Imaging</h3>
                    <p className="text-gray-600 mb-4">
                      Photoacoustic imaging and microbubble contrast agents 
                      for precise tumor visualization.
                    </p>
                    <div className="text-sm text-primary font-semibold">Active Studies: 3</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Lung Cancer Program</h3>
                    <p className="text-gray-600 mb-4">
                      Never-smoker biomarkers, MD Anderson partnerships, 
                      and community outreach initiatives.
                    </p>
                    <div className="text-sm text-primary font-semibold">Active Studies: 3</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Research Centers */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Research Centers</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-6">Specialized Research Facilities</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Our research centers provide state-of-the-art facilities and expertise 
                    for advancing early cancer detection technologies across multiple disciplines.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-dark">Cyclotron & Radiochemistry Facility</h4>
                        <p className="text-gray-600 text-sm">36+ FDA-approved radiotracers and radiation safety education</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-dark">Interventional Radiology (IRIS)</h4>
                        <p className="text-gray-600 text-sm">Endovascular neuromodulation and stem cell implantation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-dark">Education & Training Center</h4>
                        <p className="text-gray-600 text-sm">NCI R25 CREST program and Phillips Postdoc Fellowship</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-bold text-dark mb-4">Research Impact</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Active Research Projects</span>
                          <span className="text-2xl font-bold text-primary">45+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Research Publications</span>
                          <span className="text-2xl font-bold text-primary">250+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Clinical Trials</span>
                          <span className="text-2xl font-bold text-primary">20+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Patent Applications</span>
                          <span className="text-2xl font-bold text-primary">75+</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Excellence */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Scientific Excellence</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">Publications</h3>
                    <p className="text-sm text-gray-600">
                      High-impact publications in leading scientific journals
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">Funding</h3>
                    <p className="text-sm text-gray-600">
                      Invitation-only funding for breakthrough research initiatives
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">Innovation</h3>
                    <p className="text-sm text-gray-600">
                      Cutting-edge technologies and novel detection methods
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">Translation</h3>
                    <p className="text-sm text-gray-600">
                      Rapid translation from laboratory to clinical practice
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