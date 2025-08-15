import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Microscope, Target, Users, Shield, Award, Heart, AlertCircle } from "lucide-react";

export default function LungCancer() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Lung Cancer Research</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Pioneering early detection methods for lung cancer, including research for never-smokers and high-risk populations
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Our Lung Cancer Program</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Foundation's lung cancer research program addresses one of the deadliest cancers through innovative 
                early detection strategies. We focus particularly on underserved populations, including never-smokers who develop 
                lung cancer and communities with limited access to screening.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our research includes breakthrough biomarker discovery that has attracted licensing interest from industry partners, 
                and community outreach programs that expand screening access to those who need it most.
              </p>
            </div>

            {/* Key Research Areas */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Wind className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Never-Smoker Research</h3>
                  <p className="text-gray-600">
                    Dedicated research into lung cancer in never-smokers, particularly focusing on Asian populations who show 
                    higher incidence rates despite no smoking history.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Biomarker Discovery</h3>
                  <p className="text-gray-600">
                    In 2017, we discovered a lung cancer biomarker that attracted significant industry licensing interest, 
                    advancing the field of non-invasive detection methods.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Community Outreach</h3>
                  <p className="text-gray-600">
                    Partnership with Baywell Health in Oakland, serving the Black community for 50 years with expanded 
                    lung cancer screening programs and education.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Expanded Screening Criteria</h3>
                  <p className="text-gray-600">
                    Working with FQHCs to broaden screening criteria, including 20 years of smoking vs. 20 pack-years, 
                    and including family history considerations.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Special Focus: Health Disparities */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Addressing Health Disparities</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our lung cancer program prioritizes addressing disparities in cancer detection and treatment. We're working to 
                ensure that all communities have access to life-saving early detection technologies.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <AlertCircle className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Never-Smoker Initiative</h4>
                  <p className="text-gray-600 text-sm">
                    Special focus on lung cancer in never-smokers, particularly in Asian populations where incidence 
                    is higher despite no smoking history.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Heart className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Community Partnerships</h4>
                  <p className="text-gray-600 text-sm">
                    Collaborations with community health centers to bring screening to underserved populations and 
                    reduce barriers to early detection.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Research */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Current Research Initiatives</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Low-Dose CT Screening Optimization</h4>
                    <p className="text-gray-600">
                      Improving low-dose CT screening protocols to reduce false positives while maintaining high sensitivity 
                      for early-stage lung cancer detection.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Circulating Tumor DNA Analysis</h4>
                    <p className="text-gray-600">
                      Developing blood-based tests that can detect lung cancer DNA fragments, enabling non-invasive 
                      monitoring and early detection.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Environmental Risk Factors</h4>
                    <p className="text-gray-600">
                      Studying environmental and occupational exposures that contribute to lung cancer risk, particularly 
                      in non-smoking populations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnerships */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Key Partnerships</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">MD Anderson</h4>
                    <p className="text-gray-600 text-sm">Collaborative research initiatives</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">Baywell Health</h4>
                    <p className="text-gray-600 text-sm">Community screening programs</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">Industry Partners</h4>
                    <p className="text-gray-600 text-sm">Biomarker commercialization</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Lung Cancer Research</h3>
              <p className="text-gray-600 mb-6">
                Help us advance early detection for all communities, including never-smokers and underserved populations.
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