import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, TrendingUp, Award, Shield, ArrowRight, Activity } from "lucide-react";

export default function TumorsOverview() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Tumor Research Programs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive early detection research across five major cancer types, led by world-class teams developing breakthrough technologies
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Multidisciplinary Cancer Research</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Foundation's tumor research programs bring together multidisciplinary teams of scientists, 
                engineers, and clinicians focused on developing early detection methods for the deadliest cancers. 
                Each program combines biomarker discovery, advanced imaging, and population studies to create 
                comprehensive detection strategies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Led by Dr. Sanjiv Gambhir and other world-renowned researchers, our programs have made significant 
                advances in detecting cancer at its earliest, most treatable stages. From the PASS study in prostate 
                cancer to microbubble technology for pancreatic cancer, our research is transforming cancer detection.
              </p>
            </div>

            {/* Cancer Programs Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Our Cancer Research Programs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Breast Cancer</h4>
                    <p className="text-gray-600 mb-4">
                      Developing AI-enhanced imaging and blood-based biomarkers for early detection in diverse populations.
                    </p>
                    <Link 
                      href="/science/programs/tumors/breast"
                      className="text-primary hover:text-primary-dark font-semibold flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Lung Cancer</h4>
                    <p className="text-gray-600 mb-4">
                      Special focus on never-smokers and underserved communities with innovative screening approaches.
                    </p>
                    <Link 
                      href="/science/programs/tumors/lung"
                      className="text-primary hover:text-primary-dark font-semibold flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Ovarian Cancer</h4>
                    <p className="text-gray-600 mb-4">
                      Pioneering HE4 biomarker validation and prevention strategies for the "silent killer."
                    </p>
                    <Link 
                      href="/science/programs/tumors/ovarian"
                      className="text-primary hover:text-primary-dark font-semibold flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Pancreatic Cancer</h4>
                    <p className="text-gray-600 mb-4">
                      Revolutionary microbubble ultrasound technology detecting tumors smaller than 1mm.
                    </p>
                    <Link 
                      href="/science/programs/tumors/pancreatic"
                      className="text-primary hover:text-primary-dark font-semibold flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Prostate Cancer</h4>
                    <p className="text-gray-600 mb-4">
                      Leading PASS study with 1,100+ participants shaping national screening guidelines.
                    </p>
                    <Link 
                      href="/science/programs/tumors/prostate"
                      className="text-primary hover:text-primary-dark font-semibold flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

              </div>
            </div>

            {/* Common Approaches */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Integrated Research Approach</h3>
              <p className="text-gray-600 mb-6">
                All our tumor research programs share common methodologies and collaborate to accelerate discovery:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-dark mb-3">Biomarker Discovery</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                      <span>Blood-based detection methods</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                      <span>Circulating tumor DNA analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                      <span>Protein and metabolic markers</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-dark mb-3">Advanced Technologies</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                      <span>AI-enhanced imaging analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                      <span>Molecular imaging techniques</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5"></div>
                      <span>Point-of-care diagnostics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact Statistics */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Collective Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-gray-600 text-sm">Cancer Types</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-gray-600 text-sm">Active Studies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                  <div className="text-gray-600 text-sm">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600 text-sm">Biomarkers Validated</div>
                </div>
              </div>
            </div>

            {/* Research Leadership */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">World-Class Leadership</h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our tumor research programs are led by internationally recognized experts in cancer biology, 
                  molecular imaging, and clinical research. Dr. Sanjiv Gambhir's vision of detecting cancer 
                  at the cellular level continues to guide our work.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Each program benefits from collaboration with leading cancer centers including Stanford, 
                  Fred Hutchinson, MD Anderson, and the National Cancer Institute, ensuring our research 
                  translates rapidly into clinical practice.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Cancer Research</h3>
              <p className="text-gray-600 mb-6">
                Your support helps advance early detection research across all five cancer types, bringing us closer to a world where cancer is detected and treated before symptoms appear.
              </p>
              <Button 
                className="bg-primary text-white hover:bg-primary-dark"
                onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
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