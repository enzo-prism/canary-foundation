import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Science() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Science
              </h1>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-8">
                It's All About the Science
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                And the science doesn't lie. From imaging technology to biomarkers, Canary researchers and scientists are unraveling the biological and molecular complexities and underpinnings of cancer.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                They're peering into cells and tissues and cancer tumors in ways never before possible. They're asking not 'what if' but 'why not.' They're changing the game in cancer with a single focus on early cancer detection techniques. One goal, one focus, and one revolution in cancer research are all we need.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Scientist */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="bg-white shadow-lg border-l-4 border-primary">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-bold text-dark mb-4">Featured Scientist</h2>
                      <h3 className="text-xl font-bold text-primary mb-3">Jelena Levi</h3>
                      <div className="text-lg text-gray-600 mb-4">Scientist</div>
                      <p className="text-gray-600 leading-relaxed">
                        Canary Center at Stanford's Jelena Levi, Director of Chemistry Core, testing an imaging agent. Her groundbreaking work in chemistry and imaging agents represents the cutting-edge research happening at our centers.
                      </p>
                    </div>
                    <div className="bg-primary/5 p-8 rounded-lg">
                      <h4 className="text-lg font-bold text-dark mb-4">Research Focus</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Chemistry Core leadership
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Imaging agent development
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Early detection technologies
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Molecular imaging innovations
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Scientific Revolution */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Changing the Game in Cancer</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Imaging Technology</h3>
                    <p className="text-gray-600 mb-4">
                      Revolutionary imaging techniques that peer into cells and tissues in ways never before possible, revealing cancer's earliest signatures.
                    </p>
                    <div className="text-sm text-primary font-semibold">Advanced Visualization</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Biomarker Discovery</h3>
                    <p className="text-gray-600 mb-4">
                      Unraveling the biological and molecular complexities of cancer through cutting-edge biomarker research and development.
                    </p>
                    <div className="text-sm text-primary font-semibold">Molecular Insights</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Early Detection Focus</h3>
                    <p className="text-gray-600 mb-4">
                      Single-minded focus on early cancer detection techniques, asking not 'what if' but 'why not' in pursuit of breakthrough discoveries.
                    </p>
                    <div className="text-sm text-primary font-semibold">Revolutionary Approach</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* One Revolution */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">One Revolution in Cancer Research</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our scientists and researchers are united by a single mission: revolutionizing cancer care through early detection. With one goal, one focus, and one revolution in cancer research, we're transforming how cancer is detected and treated.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">One</div>
                  <div className="text-gray-600 font-semibold">Goal</div>
                  <div className="text-sm text-gray-500 mt-2">Early Cancer Detection</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">One</div>
                  <div className="text-gray-600 font-semibold">Focus</div>
                  <div className="text-sm text-gray-500 mt-2">Scientific Excellence</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">One</div>
                  <div className="text-gray-600 font-semibold">Revolution</div>
                  <div className="text-sm text-gray-500 mt-2">Cancer Research</div>
                </div>
              </div>

              <div className="mt-12">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">The Science Revolution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      From molecular imaging to biomarker discovery, our scientists are pushing the boundaries of what's possible in cancer detection. They're not just asking questions – they're finding answers that could save millions of lives through earlier intervention and treatment.
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