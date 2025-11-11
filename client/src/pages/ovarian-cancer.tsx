import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Microscope, Target, Shield, Users, AlertTriangle, Award, Lightbulb } from "lucide-react";

export default function OvarianCancer() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Ovarian Cancer Research</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Pioneering early detection for the "silent killer" through biomarker discovery and innovative prevention strategies
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Our Ovarian Cancer Program</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Foundation was founded after Don Listwin's mother, Grace, died from late-stage ovarian cancer that was 
                initially misdiagnosed. This personal tragedy drives our commitment to developing early detection methods for ovarian 
                cancer, often called the "silent killer" because symptoms typically appear only in advanced stages.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our ovarian cancer research began in 2002 with biomarker work for Dr. Nicole Urban at the Fred Hutch Cancer Research 
                Center. Since then, we've made significant advances including the validation of the HE4 biomarker in 2008 and the 
                discovery of gene fusions in 2011.
              </p>
            </div>

            {/* Key Research Areas */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">HE4 Biomarker Validation</h3>
                  <p className="text-gray-600">
                    In 2008, we validated the HE4 biomarker for ovarian cancer, providing a crucial tool for early detection 
                    and monitoring treatment response.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">BRCA Pre-Cancer Atlas</h3>
                  <p className="text-gray-600">
                    Developing comprehensive molecular profiles of pre-cancerous changes in BRCA mutation carriers to identify 
                    the earliest signs of ovarian cancer development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Fallopian Tube Research</h3>
                  <p className="text-gray-600">
                    Studying fallopian tube precursor lesions as many ovarian cancers actually originate in the fallopian tubes, 
                    opening new avenues for prevention.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Prevention Initiatives</h3>
                  <p className="text-gray-600">
                    Collaborating with BRCA Foundation on prevention initiatives and advocating for prophylactic fallopian tube 
                    removal during non-gynecologic procedures.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Historical Timeline */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Research Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2002</div>
                  <div>
                    <h4 className="font-semibold text-dark">First Biomarker Work</h4>
                    <p className="text-gray-600 text-sm">Funded Dr. Nicole Urban's research at Fred Hutch Cancer Research Center</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2008</div>
                  <div>
                    <h4 className="font-semibold text-dark">HE4 Validation</h4>
                    <p className="text-gray-600 text-sm">Validated HE4 biomarker improving early detection capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2011</div>
                  <div>
                    <h4 className="font-semibold text-dark">Gene Fusion Discovery</h4>
                    <p className="text-gray-600 text-sm">Discovered gene fusion advancing understanding of tumor biology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2018</div>
                  <div>
                    <h4 className="font-semibold text-dark">BRCA Partnership</h4>
                    <p className="text-gray-600 text-sm">Launched prevention initiative with BRCA Foundation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Current Research Focus</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">CA-125 Enhancement</h4>
                    <p className="text-gray-600">
                      Improving CA-125 testing accuracy through combination with other biomarkers and developing 
                      point-of-care ultrasound tools for biomarker confirmation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">High-Risk Population Studies</h4>
                    <p className="text-gray-600">
                      Focused research on BRCA mutation carriers and women with family history, developing personalized 
                      screening protocols for high-risk individuals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Surgical Prevention Advocacy</h4>
                    <p className="text-gray-600">
                      Working to overcome administrative barriers to opportunistic salpingectomy (fallopian tube removal) 
                      during other procedures to reduce ovarian cancer risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Honor Grace Listwin's Memory</h3>
              <p className="text-gray-600 mb-6">
                Support ovarian cancer research to ensure no family experiences the loss the Listwin family endured.
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