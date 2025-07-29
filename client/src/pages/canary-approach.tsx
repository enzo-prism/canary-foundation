import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function CanaryApproach() {
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
                The Canary Approach
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our comprehensive strategy for advancing early cancer detection through 
                innovative research, strategic partnerships, and collaborative excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Our Methodology</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-4">Identify</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We identify the most promising early detection technologies and biomarkers 
                      through rigorous scientific evaluation and expert assessment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-4">Accelerate</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We accelerate research through strategic funding, resource allocation, 
                      and collaborative partnerships with leading institutions worldwide.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-4">Translate</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We translate breakthrough discoveries into clinical applications 
                      that improve patient outcomes and save lives globally.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Core Principles</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-6">Patient-Centered Research</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Every research initiative is designed with the patient in mind, focusing on 
                    technologies that are accessible, affordable, and effective for early detection.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We prioritize minimally invasive detection methods that can be integrated 
                    into routine healthcare, making early detection available to everyone.
                  </p>
                </div>
                <div>
                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-bold text-dark mb-4">Impact Metrics</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Research Partners</span>
                          <span className="text-2xl font-bold text-primary">100+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Active Studies</span>
                          <span className="text-2xl font-bold text-primary">50+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Breakthrough Technologies</span>
                          <span className="text-2xl font-bold text-primary">25+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Countries Reached</span>
                          <span className="text-2xl font-bold text-primary">30+</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Focus Areas */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Strategic Focus Areas</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">Biomarker Discovery</h3>
                    <p className="text-sm text-gray-600">
                      Identifying molecular signatures that indicate early cancer presence
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">Imaging Innovation</h3>
                    <p className="text-sm text-gray-600">
                      Advanced imaging technologies for precise early tumor detection
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">Liquid Biopsies</h3>
                    <p className="text-sm text-gray-600">
                      Non-invasive blood tests for multi-cancer screening
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-dark mb-3">AI & Machine Learning</h3>
                    <p className="text-sm text-gray-600">
                      Computational approaches to enhance detection accuracy
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