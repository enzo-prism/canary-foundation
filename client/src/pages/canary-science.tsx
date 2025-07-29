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
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Canary is the world's only non-profit focused solely on early cancer detection. We have multidisciplinary science teams focused on blood-based biomarkers or biological 'fingerprints' that show the presence or progress of disease.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're pairing those biomarkers with advanced imaging technologies that will help us visualize a cancer type with more sensitivity and specificity.
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Programs Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-8">Clinical Programs</h2>
              <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto">
                Our clinical programs cover tumors across five cancer types: breast, lung, ovarian, pancreas, and prostate.
              </p>
              
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-dark mb-6">Where Canary Science is Happening</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Breast Cancer</h3>
                    <p className="text-gray-600 mb-4">
                      Advanced imaging technologies and biomarker research focused on early detection and improving screening sensitivity.
                    </p>
                    <div className="text-sm text-primary font-semibold">Research Focus: Imaging & Biomarkers</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Lung Cancer</h3>
                    <p className="text-gray-600 mb-4">
                      Never-smoker biomarkers, MD Anderson partnerships, and community outreach initiatives for early detection.
                    </p>
                    <div className="text-sm text-primary font-semibold">Research Focus: Never-Smoker Biomarkers</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Ovarian Cancer</h3>
                    <p className="text-gray-600 mb-4">
                      BRCA pre-cancer atlas and fallopian tube precursor studies for early detection biomarker development.
                    </p>
                    <div className="text-sm text-primary font-semibold">Research Focus: BRCA Pre-Cancer Atlas</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Pancreatic Cancer</h3>
                    <p className="text-gray-600 mb-4">
                      Advanced ultrasound imaging and POCUS technology for early pancreatic cancer detection.
                    </p>
                    <div className="text-sm text-primary font-semibold">Research Focus: Advanced Imaging</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Prostate Cancer</h3>
                    <p className="text-gray-600 mb-4">
                      PASS study with 1,100+ participants and PATROL genetic risk cohort advancing personalized screening.
                    </p>
                    <div className="text-sm text-primary font-semibold">Research Focus: Active Surveillance</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-gray-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Collaborations</h3>
                    <p className="text-gray-600 mb-4">
                      Strategic partnerships across institutions, government agencies, corporations, and foundations worldwide.
                    </p>
                    <div className="text-sm text-gray-600 font-semibold">Research Focus: Global Partnerships</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-8">Research Centers</h2>
              <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto">
                To further ensure our success, we funded the Canary Center at Stanford for Cancer Early Detection, a world-class facility that hopes to save lives through early detection. We also have a center of excellence in early cancer detection at the Fred Hutchinson Cancer Research Center in Seattle. The 'HUTCH' as it's called was the genesis for the Canary Foundation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-dark mb-4">Canary Center at Stanford for Cancer Early Detection</h3>
                    <div className="text-sm text-primary font-semibold mb-4">Stanford University, California</div>
                    <p className="text-gray-600 mb-6">
                      A world-class facility that hopes to save lives through early detection. This dedicated center represents our commitment to advancing breakthrough technologies and fostering the next generation of early detection innovations.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <div>
                          <h4 className="font-semibold text-dark">Research Focus</h4>
                          <p className="text-gray-600 text-sm">Advanced imaging, biomarker discovery, and precision medicine</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <div>
                          <h4 className="font-semibold text-dark">Mission</h4>
                          <p className="text-gray-600 text-sm">Saving lives through early cancer detection</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-dark mb-4">Fred Hutchinson Cancer Research Center</h3>
                    <div className="text-sm text-primary font-semibold mb-4">Seattle, Washington</div>
                    <p className="text-gray-600 mb-6">
                      The 'HUTCH' as it's called was the genesis for the Canary Foundation. We have a center of excellence in early cancer detection that continues to drive breakthrough research and serves as our founding institutional partner.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <div>
                          <h4 className="font-semibold text-dark">Historical Significance</h4>
                          <p className="text-gray-600 text-sm">Genesis institution for Canary Foundation</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <div>
                          <h4 className="font-semibold text-dark">Center of Excellence</h4>
                          <p className="text-gray-600 text-sm">Early cancer detection research and innovation</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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