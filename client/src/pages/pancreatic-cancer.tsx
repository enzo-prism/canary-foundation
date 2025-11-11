import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Microscope, Target, Shield, Users, Award, Zap, Monitor } from "lucide-react";

export default function PancreaticCancer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Pancreatic Cancer Research</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Developing revolutionary imaging technologies and biomarkers to detect pancreatic cancer at its earliest, most treatable stages
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Our Pancreatic Cancer Program</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pancreatic cancer remains one of the most challenging cancers to detect early, with most cases diagnosed at advanced 
                stages when treatment options are limited. The Canary Foundation's pancreatic cancer research program, established in 
                2005, focuses on breakthrough technologies that can identify this cancer when it's still treatable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team has achieved remarkable milestones, including the development of microbubble imaging technology that can 
                detect tumors smaller than 1mm and the advancement of point-of-care ultrasound (POCUS) technologies for accessible 
                screening.
              </p>
            </div>

            {/* Key Research Areas */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Microbubble Technology</h3>
                  <p className="text-gray-600">
                    Revolutionary imaging using FDA-approved microbubbles that can detect pancreatic tumors below 1mm, 
                    a breakthrough achieved in 2011 and approved for trials in 2014.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">POCUS Development</h3>
                  <p className="text-gray-600">
                    Advancing point-of-care ultrasound technology to make pancreatic cancer screening accessible in 
                    resource-limited settings, combined with CA-19 biomarker testing.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Gene Mutation Discovery</h3>
                  <p className="text-gray-600">
                    In 2006, we discovered pancreatic cancer gene mutations, advancing our understanding of the genetic 
                    factors that drive this aggressive cancer.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Advanced Ultrasound</h3>
                  <p className="text-gray-600">
                    Developing next-generation ultrasound imaging techniques that can detect subtle changes in pancreatic 
                    tissue before tumors become visible on standard imaging.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Technology Breakthrough */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Microbubble Imaging Breakthrough</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our microbubble technology represents a paradigm shift in pancreatic cancer detection. These microscopic bubbles, 
                when injected into the bloodstream, enhance ultrasound imaging to reveal tumors that are invisible to conventional 
                imaging methods.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">&lt;1mm</div>
                  <div className="text-gray-600 text-sm">Tumor detection size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2014</div>
                  <div className="text-gray-600 text-sm">FDA approval for trials</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10,000x</div>
                  <div className="text-gray-600 text-sm">More sensitive than standard tests</div>
                </div>
              </div>
            </div>

            {/* Research Timeline */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Research Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2005</div>
                  <div>
                    <h4 className="font-semibold text-dark">Program Established</h4>
                    <p className="text-gray-600 text-sm">First Scientific Symposium and pancreatic cancer team formed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2006</div>
                  <div>
                    <h4 className="font-semibold text-dark">Gene Mutations Discovered</h4>
                    <p className="text-gray-600 text-sm">Advanced understanding of genetic factors in pancreatic cancer</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2011</div>
                  <div>
                    <h4 className="font-semibold text-dark">Microbubble Technology Developed</h4>
                    <p className="text-gray-600 text-sm">Revolutionary imaging for sub-millimeter tumor detection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2024</div>
                  <div>
                    <h4 className="font-semibold text-dark">POCUS Advancement</h4>
                    <p className="text-gray-600 text-sm">Point-of-care ultrasound for accessible screening</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Research */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Current Research Initiatives</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">CA-19-9 Biomarker Enhancement</h4>
                    <p className="text-gray-600">
                      Improving the specificity of CA-19-9 testing through combination with imaging and other biomarkers 
                      for more accurate early detection.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">High-Risk Screening Protocols</h4>
                    <p className="text-gray-600">
                      Developing screening guidelines for individuals with family history, genetic mutations, or chronic 
                      pancreatitis who face elevated risk.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Artificial Intelligence Integration</h4>
                    <p className="text-gray-600">
                      Using machine learning to analyze imaging data and identify subtle patterns that may indicate 
                      early-stage pancreatic cancer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Pancreatic Cancer Research</h3>
              <p className="text-gray-600 mb-6">
                Help us continue developing breakthrough technologies that can detect pancreatic cancer when it's still treatable.
              </p>
              <Button 
                className="bg-primary text-white hover:bg-primary-dark"
                onClick={() => window.open('https://donorbox.org/canary-campaign', '_blank')}
              >
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}