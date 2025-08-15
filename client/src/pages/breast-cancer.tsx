import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Microscope, Target, TrendingUp, Users, Shield, Award, Lightbulb } from "lucide-react";

export default function BreastCancer() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Breast Cancer Research</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Advancing early detection technologies and precision medicine for breast cancer through innovative research and multidisciplinary collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Our Breast Cancer Program</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Foundation's breast cancer research program focuses on developing breakthrough technologies for early detection, 
                when treatment is most effective. Our team of world-class researchers works across multiple disciplines to identify 
                biomarkers, develop advanced imaging techniques, and create innovative screening methods.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through partnerships with leading institutions and researchers, we're advancing the understanding of breast cancer 
                biology and developing tools that can detect cancer at its earliest, most treatable stages.
              </p>
            </div>

            {/* Key Research Areas */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Biomarker Discovery</h3>
                  <p className="text-gray-600">
                    Identifying novel protein and genetic markers that indicate the presence of breast cancer before symptoms appear, 
                    enabling earlier intervention and better outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Advanced Imaging</h3>
                  <p className="text-gray-600">
                    Developing next-generation imaging technologies including molecular imaging and AI-enhanced detection systems 
                    for more accurate and earlier diagnosis.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Risk Assessment</h3>
                  <p className="text-gray-600">
                    Creating comprehensive risk models that combine genetic, lifestyle, and environmental factors to identify 
                    individuals at highest risk for breast cancer.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Patient-Centered Care</h3>
                  <p className="text-gray-600">
                    Developing personalized screening protocols and treatment pathways based on individual patient characteristics 
                    and tumor biology.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Current Studies */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Current Research Initiatives</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Triple-Negative Breast Cancer Detection</h4>
                    <p className="text-gray-600">
                      Developing specialized detection methods for aggressive triple-negative breast cancer subtypes that 
                      disproportionately affect younger women and have limited treatment options.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Liquid Biopsy Development</h4>
                    <p className="text-gray-600">
                      Creating non-invasive blood tests that can detect circulating tumor DNA and proteins, enabling 
                      regular monitoring and early detection without radiation exposure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">AI-Enhanced Mammography</h4>
                    <p className="text-gray-600">
                      Implementing artificial intelligence algorithms to improve mammography accuracy, reduce false positives, 
                      and identify subtle changes that may indicate early-stage cancer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Research Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600 text-sm">Active Studies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-gray-600 text-sm">Biomarkers Identified</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-gray-600 text-sm">Clinical Trials</div>
                </div>
              </div>
            </div>

            {/* Collaborations */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Research Collaborations</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our breast cancer research program benefits from collaborations with leading cancer centers and research institutions 
                worldwide. These partnerships accelerate discovery and ensure our findings translate into clinical practice.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">Stanford Cancer Institute</h4>
                    <p className="text-gray-600 text-sm">Leading molecular imaging research</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">NCI Partnerships</h4>
                    <p className="text-gray-600 text-sm">National Cancer Institute collaboration</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Lightbulb className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">International Alliance</h4>
                    <p className="text-gray-600 text-sm">Global early detection network</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Breast Cancer Research</h3>
              <p className="text-gray-600 mb-6">
                Your support helps accelerate breakthrough discoveries in breast cancer early detection and saves lives.
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