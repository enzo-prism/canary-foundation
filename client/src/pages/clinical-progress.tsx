import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, TrendingUp, Target, Users, Award, Shield, Heart, ArrowRight } from "lucide-react";

export default function ClinicalProgress() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Clinical Progress</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">From Theory to Tractable Problem to Clinical Studies</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The goal of our cancer programs is to develop early detection screening strategies, consisting of blood tests and molecular imaging techniques, that will allow us to detect lethal cancers early enough to be curable.
            </p>
            <p className="text-lg text-gray-600 mt-4 italic">
              Working in the Multimodality Molecular Imaging Lab
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">From Lab to Clinic</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Foundation's clinical progress represents the critical bridge between laboratory discoveries 
                and patient care. Our carefully designed clinical studies test new biomarkers, imaging technologies, 
                and screening protocols to ensure they are safe, effective, and ready for widespread clinical use.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every breakthrough in our laboratories undergoes rigorous clinical validation through trials that meet 
                the highest standards of scientific integrity and patient safety. This systematic approach ensures that 
                our discoveries translate into real improvements in cancer detection and patient outcomes.
              </p>
            </div>

            {/* Clinical Studies Card */}
            <div className="mb-12">
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-dark mb-4">Clinical Studies Program</h3>
                      <p className="text-gray-600 mb-6">
                        Our comprehensive clinical studies program tests and validates early detection technologies 
                        across multiple cancer types. From the landmark PASS study in prostate cancer to biomarker 
                        validation trials, we're advancing the science of early detection.
                      </p>
                      <Link 
                        href="/science/programs/clinical-studies"
                        className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300 font-semibold"
                      >
                        Explore Clinical Studies <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Clinical Achievements */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Major Clinical Achievements</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Award className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark mb-2">PASS Study Success</h4>
                      <p className="text-gray-600">
                        The Prostate Active Surveillance Study with over 2,400 participants has directly influenced 
                        national screening guidelines, helping thousands avoid unnecessary treatment while maintaining 
                        excellent outcomes.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark mb-2">HE4 Biomarker Validation</h4>
                      <p className="text-gray-600">
                        Clinical validation of the HE4 biomarker for ovarian cancer detection, now used worldwide 
                        as a standard diagnostic tool, improving early detection rates significantly.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Target className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Microbubble Technology FDA Approval</h4>
                      <p className="text-gray-600">
                        FDA approval in 2014 for microbubble ultrasound technology that can detect pancreatic 
                        tumors smaller than 1mm, representing a breakthrough in early detection capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Translation Process */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Clinical Translation Pathway</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Preclinical Validation</h4>
                    <p className="text-gray-600">
                      Rigorous laboratory testing establishes safety and efficacy before human trials begin.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Phase I/II Trials</h4>
                    <p className="text-gray-600">
                      Initial human studies determine safety, dosing, and preliminary effectiveness.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Large-Scale Validation</h4>
                    <p className="text-gray-600">
                      Multi-center trials with hundreds or thousands of participants confirm clinical utility.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Regulatory Approval</h4>
                    <p className="text-gray-600">
                      FDA and international regulatory approval enables widespread clinical adoption.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Clinical Implementation</h4>
                    <p className="text-gray-600">
                      Integration into standard care protocols with ongoing monitoring and optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Clinical Pipeline */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Active Clinical Pipeline</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-dark mb-3">In Clinical Trials</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-primary mt-1" />
                      <span>Multi-cancer early detection blood tests</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-primary mt-1" />
                      <span>AI-enhanced imaging analysis systems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-primary mt-1" />
                      <span>Novel biomarker panels for 5+ cancers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-primary mt-1" />
                      <span>Point-of-care diagnostic devices</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-3">Recently Completed</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <Heart className="w-4 h-4 text-primary mt-1" />
                      <span>PASS 10-year outcomes analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Heart className="w-4 h-4 text-primary mt-1" />
                      <span>Lung cancer biomarker validation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Heart className="w-4 h-4 text-primary mt-1" />
                      <span>Photoacoustic imaging trials</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Heart className="w-4 h-4 text-primary mt-1" />
                      <span>BRCA risk assessment studies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Clinical Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-gray-600 text-sm">Active Clinical Trials</div>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3,000+</div>
                    <div className="text-gray-600 text-sm">Trial Participants</div>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5</div>
                    <div className="text-gray-600 text-sm">FDA Approvals</div>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-gray-600 text-sm">Technologies in Clinic</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Partnerships */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Clinical Partnerships</h3>
              <p className="text-gray-600 mb-6">
                Our clinical progress is accelerated through partnerships with leading medical centers and research institutions:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-dark">Stanford Medicine</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-dark">Fred Hutchinson</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-dark">MD Anderson</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-dark">Mayo Clinic</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-dark">NCI Centers</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-dark">International Sites</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Clinical Progress</h3>
              <p className="text-gray-600 mb-6">
                Your support helps accelerate clinical trials that bring life-saving early detection technologies to patients faster.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  className="bg-primary text-white hover:bg-primary-dark"
                  onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                >
                  Donate Now
                </Button>
                <Link href="/science/programs/clinical-studies">
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    View Clinical Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}