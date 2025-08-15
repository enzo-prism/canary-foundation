import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Microscope, Target, Users, Award, Activity, TrendingUp, Heart } from "lucide-react";

export default function ProstateCancer() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Prostate Cancer Research</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Leading groundbreaking studies that shape national screening guidelines and improve outcomes for men worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Our Prostate Cancer Program</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Foundation's prostate cancer research program includes two landmark studies that have fundamentally 
                changed how prostate cancer is managed: the Prostate Active Surveillance Study (PASS) and the PATROL study 
                for genetic risk assessment. Our research directly influences national screening guidelines and clinical practice.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over 1,100 participants in PASS and milestone enrollment of 2,000 men achieved in 2021, our studies provide 
                critical data that helps doctors and patients make informed decisions about prostate cancer screening and treatment.
              </p>
            </div>

            {/* Key Studies */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">PASS Study</h3>
                  <p className="text-gray-600 mb-4">
                    Prostate Active Surveillance Study monitoring low-risk prostate cancer patients to determine when 
                    intervention is necessary, helping avoid unnecessary treatment.
                  </p>
                  <div className="text-primary font-semibold">1,100+ Participants</div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">PATROL Study</h3>
                  <p className="text-gray-600 mb-4">
                    Prostate Cancer Screening for People at Genetic Risk for Aggressive Disease, launched in 2023 
                    to identify high-risk individuals.
                  </p>
                  <div className="text-primary font-semibold">Genetic Risk Cohort</div>
                </CardContent>
              </Card>
            </div>

            {/* PASS Study Impact */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">PASS Study Impact</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                "The PASS study's findings with over 1,100 participants have directly influenced national screening guidelines 
                and risk assessment protocols. Our research is helping doctors make better decisions about prostate cancer 
                screening, ultimately saving lives through earlier detection."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Award className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-dark">Dr. Daniel Lin</div>
                  <div className="text-gray-600 text-sm">PASS Study Lead</div>
                </div>
              </div>
            </div>

            {/* Research Achievements */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Research Achievements</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">2008</div>
                    <div className="text-gray-600 text-sm">PASS Study Begins</div>
                  </CardContent>
                </Card>
                <Card className="bg-white text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">2014</div>
                    <div className="text-gray-600 text-sm">FDA Approves Microbubble Ultrasound</div>
                  </CardContent>
                </Card>
                <Card className="bg-white text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">2014</div>
                    <div className="text-gray-600 text-sm">NCI Award for PASS</div>
                  </CardContent>
                </Card>
                <Card className="bg-white text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">2021</div>
                    <div className="text-gray-600 text-sm">2000 Men Enrolled</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Current Research */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Current Research Focus</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Active Surveillance Optimization</h4>
                    <p className="text-gray-600">
                      Refining protocols to identify which men with low-risk prostate cancer can safely avoid or delay 
                      treatment while maintaining excellent outcomes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Genetic Risk Assessment</h4>
                    <p className="text-gray-600">
                      Through PATROL, identifying genetic markers that predict aggressive prostate cancer, enabling 
                      personalized screening strategies for high-risk men.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Biobanking Initiative</h4>
                    <p className="text-gray-600">
                      Building comprehensive tissue and blood sample repositories to support future research and 
                      biomarker discovery efforts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Imaging Innovation</h4>
                    <p className="text-gray-600">
                      Advancing FDA-approved microbubble ultrasound technology for more accurate tumor visualization 
                      and targeted biopsies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact on Guidelines */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Shaping National Guidelines</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our research doesn't just advance science—it directly impacts clinical practice. The PASS study findings 
                have been incorporated into national screening guidelines, helping physicians worldwide make better decisions 
                about prostate cancer management.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Risk Stratification</h4>
                  <p className="text-gray-600 text-sm">Improved methods to identify aggressive vs. indolent cancers</p>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Screening Protocols</h4>
                  <p className="text-gray-600 text-sm">Evidence-based guidelines for PSA testing and biopsy</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Quality of Life</h4>
                  <p className="text-gray-600 text-sm">Reducing overtreatment while maintaining excellent outcomes</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Prostate Cancer Research</h3>
              <p className="text-gray-600 mb-6">
                Help us continue groundbreaking studies that improve outcomes for men with prostate cancer worldwide.
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