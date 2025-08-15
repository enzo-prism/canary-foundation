import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Microscope, Users, Award, Heart, TrendingUp, Target, Shield } from "lucide-react";

export default function FHCRC() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">FHCRC</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Early Cancer Detection Research at the HUTCH</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              After the death of Grace Listwin in 2001, her son Don set out to find a research institution that focused on the early detection of ovarian cancer. The search led to a researcher by the name of Dr. Nicole Urban located in Seattle at the Fred Hutchinson Cancer Research Center (FHCRC).
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Partnership with Fred Hutch</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Don started funding some of Dr. Urban's work and also started learning about this new field called biomarkers. One marker, CA 125, was already being used as an indicator for ovarian cancer in women, but it was not proving to be an adequate marker for all women, especially for early detection.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Don later met Nobel Laureate Dr. Lee Hartwell, director of the FHCRC.  The idea of creating a full scale Biomarker Discovery and Analysis Program at the HUTCH was born. Don's $10-million investment helped establish the core of a biomarker discovery and analysis program, and the HUTCH remains one of Canary's 'Centers of Excellence' today.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Canary-funded research at the Hutch has gone from finding promising ovarian cancer detection blood biomarkers in clinical trials to now validating them in large clinical trials. 
              </p>
            </div>

            {/* Historical Partnership */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">A Partnership Born from Purpose</h3>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 mb-4">
                    In 2002, shortly after the Canary Foundation was established following Grace Listwin's death from ovarian cancer, 
                    Don Listwin provided funding to Dr. Nicole Urban at Fred Hutch for biomarker research. This marked the beginning 
                    of a partnership that has transformed ovarian cancer detection.
                  </p>
                  <p className="text-gray-600 italic">
                    "The support from Canary Foundation allowed us to pursue high-risk, high-reward research that traditional 
                    funding wouldn't support. This freedom led to discoveries that are now saving lives." - Dr. Nicole Urban
                  </p>
                </div>
              </div>
            </div>

            {/* Research Achievements */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Research Achievements at Fred Hutch</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Microscope className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">HE4 Biomarker Validation</h4>
                    <p className="text-gray-600">
                      Dr. Urban's team validated the HE4 biomarker in 2008, now used worldwide for ovarian cancer detection 
                      and monitoring, improving diagnostic accuracy significantly.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Population-Based Studies</h4>
                    <p className="text-gray-600">
                      Large-scale epidemiological studies identifying risk factors and screening strategies for high-risk 
                      populations, informing national screening guidelines.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Prevention Research</h4>
                    <p className="text-gray-600">
                      Pioneering work on cancer prevention strategies, including studies on prophylactic surgery and 
                      chemoprevention for high-risk individuals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Collaborative Networks</h4>
                    <p className="text-gray-600">
                      Building international research networks that accelerate discovery and ensure findings benefit 
                      diverse populations globally.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Key Researchers */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Leading Researchers</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-dark mb-2">Dr. Nicole Urban</h4>
                  <p className="text-gray-600 mb-2">
                    Senior investigator leading ovarian cancer biomarker research since 2002. Dr. Urban's work has 
                    fundamentally changed how we approach ovarian cancer detection.
                  </p>
                  <div className="flex items-center text-primary">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-sm">HE4 Biomarker Discovery & Validation</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-dark mb-2">Dr. Lee Hartwell</h4>
                  <p className="text-gray-600 mb-2">
                    Nobel Laureate and former Fred Hutch Director who championed the partnership with Canary Foundation, 
                    bringing institutional support for early detection research.
                  </p>
                  <div className="flex items-center text-primary">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-sm">2001 Nobel Prize in Physiology or Medicine</span>
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
                    <h4 className="font-semibold text-dark mb-2">Multi-Cancer Early Detection</h4>
                    <p className="text-gray-600">
                      Developing blood tests that can detect multiple cancer types from a single sample, focusing on 
                      cancers that lack current screening methods.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Immunoprevention Studies</h4>
                    <p className="text-gray-600">
                      Investigating vaccines and immunotherapies that could prevent cancer development in high-risk 
                      individuals before tumors form.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Health Disparities Research</h4>
                    <p className="text-gray-600">
                      Addressing cancer detection disparities in underserved populations through community-based 
                      research and culturally appropriate screening programs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Precision Prevention</h4>
                    <p className="text-gray-600">
                      Using genetic and molecular profiling to identify individuals at highest risk and develop 
                      personalized prevention strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Statistics */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Partnership Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">22+</div>
                  <div className="text-gray-600 text-sm">Years of Partnership</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-gray-600 text-sm">Biomarkers Validated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000s</div>
                  <div className="text-gray-600 text-sm">Lives Impacted</div>
                </div>
              </div>
            </div>

            {/* Future Directions */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Future Directions</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary-Fred Hutch partnership continues to evolve, focusing on translating discoveries into clinical practice 
                and ensuring that early detection technologies reach all communities. Our shared vision includes:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">Global Implementation</h4>
                    <p className="text-gray-600 text-sm">Deploying detection technologies worldwide</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">Expanded Collaboration</h4>
                    <p className="text-gray-600 text-sm">Growing multi-institutional networks</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">Community Impact</h4>
                    <p className="text-gray-600 text-sm">Ensuring equitable access to screening</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Our Partnership</h3>
              <p className="text-gray-600 mb-6">
                Help us continue this productive partnership that has already transformed cancer detection and saved countless lives.
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