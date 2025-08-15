import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Target, Shield, Activity, Award, FileText, Lightbulb } from "lucide-react";

export default function ClinicalStudies() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Clinical Studies</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Translating breakthrough research into clinical practice through innovative trials and patient-centered studies
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Clinical Research Excellence</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Foundation's clinical studies represent the critical bridge between laboratory discoveries and 
                real-world patient care. Our carefully designed trials test new biomarkers, imaging technologies, and 
                screening protocols to ensure they are safe, effective, and ready for widespread clinical use.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each study is conducted with the highest ethical standards and scientific rigor, in collaboration with 
                leading medical centers and under strict regulatory oversight. Our goal is to accelerate the translation 
                of promising discoveries into tools that save lives.
              </p>
            </div>

            {/* Active Studies Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Active Clinical Studies</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">PASS Study</h4>
                    <p className="text-gray-600 mb-4">
                      Prostate Active Surveillance Study monitoring over 1,100 men with low-risk prostate cancer to optimize 
                      treatment timing and avoid unnecessary interventions.
                    </p>
                    <div className="flex items-center text-primary">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm font-semibold">1,100+ Participants</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">PATROL Study</h4>
                    <p className="text-gray-600 mb-4">
                      Prostate Cancer Screening for People at Genetic Risk, launched in 2023 to identify and screen 
                      individuals with genetic predisposition to aggressive disease.
                    </p>
                    <div className="flex items-center text-primary">
                      <Target className="w-4 h-4 mr-2" />
                      <span className="text-sm font-semibold">Genetic Risk Focus</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Biomarker Validation Trials</h4>
                    <p className="text-gray-600 mb-4">
                      Multi-center trials validating novel blood and tissue biomarkers for early detection of ovarian, 
                      pancreatic, and lung cancers.
                    </p>
                    <div className="flex items-center text-primary">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="text-sm font-semibold">5 Cancer Types</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Imaging Technology Trials</h4>
                    <p className="text-gray-600 mb-4">
                      Testing advanced imaging modalities including microbubble ultrasound and photoacoustic imaging 
                      for improved cancer detection accuracy.
                    </p>
                    <div className="flex items-center text-primary">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm font-semibold">FDA-Approved Technologies</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Study Process */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Our Clinical Study Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Discovery & Preclinical Validation</h4>
                    <p className="text-gray-600">
                      Promising biomarkers and technologies undergo rigorous laboratory testing to establish safety 
                      and efficacy before human trials.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Protocol Development</h4>
                    <p className="text-gray-600">
                      Expert teams design detailed study protocols that meet regulatory requirements while ensuring 
                      patient safety and scientific validity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Patient Enrollment & Monitoring</h4>
                    <p className="text-gray-600">
                      Carefully selected participants receive close monitoring throughout the study, with regular 
                      safety reviews and data collection.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Analysis & Publication</h4>
                    <p className="text-gray-600">
                      Study results undergo rigorous statistical analysis and peer review, with findings published 
                      in leading medical journals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Statistics */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Clinical Research Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600 text-sm">Active Studies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3,000+</div>
                  <div className="text-gray-600 text-sm">Total Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10</div>
                  <div className="text-gray-600 text-sm">Partner Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-gray-600 text-sm">FDA Approvals</div>
                </div>
              </div>
            </div>

            {/* Regulatory Compliance */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Regulatory Excellence</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                All Canary Foundation clinical studies are conducted in full compliance with FDA regulations, Good Clinical 
                Practice guidelines, and institutional review board oversight. We maintain the highest standards of patient 
                safety, data integrity, and ethical conduct.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">IRB Approved</h4>
                    <p className="text-gray-600 text-sm">All studies reviewed by institutional review boards</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">FDA Compliant</h4>
                    <p className="text-gray-600 text-sm">Full adherence to FDA regulations and guidelines</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">GCP Standards</h4>
                    <p className="text-gray-600 text-sm">Following Good Clinical Practice protocols</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Clinical Research</h3>
              <p className="text-gray-600 mb-6">
                Your support helps accelerate clinical trials that bring life-saving early detection technologies to patients faster.
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