import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Rocket, Target, TrendingUp, Award, FlaskConical, Users, Heart } from "lucide-react";

export default function SeedGrants() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Technology Seed Grants</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fueling breakthrough innovations in cancer early detection through strategic seed funding
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Innovation Through Seed Funding</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Foundation's Technology Seed Grants program provides crucial early-stage funding for high-risk, 
                high-reward research projects that have the potential to revolutionize cancer early detection. These grants 
                enable researchers to generate preliminary data, test novel concepts, and develop proof-of-principle for 
                technologies that could transform how we detect cancer.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By funding innovative ideas at their earliest stages, we help researchers bridge the critical gap between 
                concept and implementation, often leading to larger grants, industry partnerships, and ultimately, clinical 
                solutions that save lives.
              </p>
            </div>

            {/* Grant Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Grant Program Features</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Rapid Funding</h4>
                    <p className="text-gray-600">
                      Streamlined application and review process ensures funding reaches researchers quickly, accelerating 
                      the pace of innovation and discovery.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Innovation Focus</h4>
                    <p className="text-gray-600">
                      Support for bold, unconventional ideas that might be too preliminary for traditional funding but 
                      could lead to breakthrough discoveries.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Flexible Scope</h4>
                    <p className="text-gray-600">
                      Grants support diverse approaches including biomarker discovery, imaging technologies, AI applications, 
                      and novel diagnostic platforms.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Collaborative Spirit</h4>
                    <p className="text-gray-600">
                      Encourages interdisciplinary collaboration between engineers, biologists, clinicians, and data 
                      scientists to tackle complex challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Seed Grant Success Stories</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Award className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Microbubble Ultrasound Technology</h4>
                      <p className="text-gray-600">
                        Initial seed funding led to development of FDA-approved microbubble technology that can detect 
                        pancreatic tumors smaller than 1mm, now advancing to clinical trials.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <FlaskConical className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Liquid Biopsy Platform</h4>
                      <p className="text-gray-600">
                        Seed grant supported development of novel circulating tumor DNA detection method, attracting 
                        $5M in follow-on NIH funding and industry partnership.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark mb-2">AI-Powered Screening</h4>
                      <p className="text-gray-600">
                        Machine learning algorithm for mammography analysis, initially funded with seed grant, now 
                        licensed to major diagnostic company for clinical deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Funded Research Areas */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Priority Research Areas</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Novel Biomarkers</h4>
                  <p className="text-gray-600 text-sm">Discovery and validation of new molecular markers</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Nanotechnology</h4>
                  <p className="text-gray-600 text-sm">Nanoparticles and sensors for ultra-sensitive detection</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Point-of-Care Devices</h4>
                  <p className="text-gray-600 text-sm">Portable diagnostics for resource-limited settings</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FlaskConical className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Microfluidics</h4>
                  <p className="text-gray-600 text-sm">Lab-on-chip technologies for rapid testing</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">AI & Machine Learning</h4>
                  <p className="text-gray-600 text-sm">Computational approaches to pattern recognition</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Wearable Sensors</h4>
                  <p className="text-gray-600 text-sm">Continuous monitoring for early warning signs</p>
                </div>
              </div>
            </div>

            {/* Grant Process */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Grant Application Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Concept Development</h4>
                    <p className="text-gray-600">
                      Develop innovative idea with clear potential for advancing cancer early detection, supported by 
                      preliminary rationale and feasibility assessment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Letter of Intent</h4>
                    <p className="text-gray-600">
                      Submit brief proposal outlining the innovation, approach, and expected impact on early detection 
                      capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Full Application</h4>
                    <p className="text-gray-600">
                      Invited applicants submit detailed proposal including research plan, timeline, budget, and 
                      pathway to clinical translation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Expert Review</h4>
                    <p className="text-gray-600">
                      Applications evaluated by panel of experts assessing innovation, feasibility, and potential 
                      for transformative impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Impact */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Program Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-gray-600 text-sm">Grants Awarded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$25M+</div>
                  <div className="text-gray-600 text-sm">Follow-on Funding</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-gray-600 text-sm">Patents Filed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-gray-600 text-sm">Clinical Trials</div>
                </div>
              </div>
            </div>

            {/* Future Vision */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Catalyzing Innovation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Technology Seed Grants serve as catalysts for innovation, enabling researchers to pursue bold ideas that 
                traditional funding mechanisms might overlook. Many of our most successful technologies started with modest 
                seed funding that allowed researchers to demonstrate proof-of-concept.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">10x Return</h4>
                    <p className="text-gray-600 text-sm">Average follow-on funding per seed grant</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">75% Success</h4>
                    <p className="text-gray-600 text-sm">Grants leading to major discoveries</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">Global Impact</h4>
                    <p className="text-gray-600 text-sm">Technologies deployed worldwide</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Innovation</h3>
              <p className="text-gray-600 mb-6">
                Help us fund the next breakthrough in cancer early detection technology through our seed grant program.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  className="bg-primary text-white hover:bg-primary-dark"
                  onClick={() => window.open('mailto:grants@canaryfoundation.org', '_blank')}
                >
                  Apply for Grant
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open('https://donorbox.org/canary-campaign', '_blank')}
                >
                  Fund Innovation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}