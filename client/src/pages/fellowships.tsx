import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, Lightbulb, BookOpen, Target, Heart, TrendingUp } from "lucide-react";

export default function Fellowships() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Canary-ACS Postdoctoral Fellowships</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Training the next generation of cancer early detection researchers through prestigious fellowship programs
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Fellowship Program Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary-ACS Postdoctoral Fellowship program, in partnership with the American Cancer Society, provides 
                exceptional early-career scientists with the training, mentorship, and resources needed to become leaders 
                in cancer early detection research. This prestigious fellowship supports innovative research that bridges 
                basic science and clinical application.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Fellows receive comprehensive support including competitive stipends, research funding, access to state-of-the-art 
                facilities, and mentorship from world-renowned cancer researchers. The program emphasizes both scientific excellence 
                and the translation of discoveries into clinical solutions that save lives.
              </p>
            </div>

            {/* Fellowship Benefits */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Fellowship Benefits</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Competitive Funding</h4>
                    <p className="text-gray-600">
                      Three-year fellowships with competitive stipends, research budget, and conference travel support 
                      to advance your research and career.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Expert Mentorship</h4>
                    <p className="text-gray-600">
                      Work directly with leading cancer researchers and clinicians who provide guidance on research 
                      design, career development, and scientific leadership.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Innovation Support</h4>
                    <p className="text-gray-600">
                      Freedom to pursue high-risk, high-reward research with access to cutting-edge technologies and 
                      core facilities at leading institutions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Professional Development</h4>
                    <p className="text-gray-600">
                      Comprehensive training in grant writing, scientific communication, leadership skills, and career 
                      planning for academic and industry paths.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Research Focus Areas */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Research Focus Areas</h3>
              <p className="text-gray-600 mb-6">
                Fellows pursue innovative research across multiple disciplines related to cancer early detection:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Biomarker Discovery</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Circulating tumor DNA analysis</li>
                    <li>• Protein and metabolic markers</li>
                    <li>• Exosome characterization</li>
                    <li>• Multi-omics approaches</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <Heart className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Imaging Technologies</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Molecular imaging development</li>
                    <li>• AI-enhanced image analysis</li>
                    <li>• Novel contrast agents</li>
                    <li>• Point-of-care diagnostics</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Population Sciences</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Risk assessment models</li>
                    <li>• Screening optimization</li>
                    <li>• Health disparities research</li>
                    <li>• Prevention strategies</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <Lightbulb className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Technology Development</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Nanosensor platforms</li>
                    <li>• Microfluidic devices</li>
                    <li>• Machine learning applications</li>
                    <li>• Wearable diagnostics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fellow Success Stories */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Fellow Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Research Excellence</h4>
                    <p className="text-gray-600">
                      Fellows have published over 200 papers in top-tier journals including Nature, Science, and Cancer Cell, 
                      advancing the field of early detection significantly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Career Advancement</h4>
                    <p className="text-gray-600">
                      90% of fellowship alumni have secured faculty positions at leading universities or senior roles in 
                      biotechnology companies focused on cancer diagnostics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Clinical Translation</h4>
                    <p className="text-gray-600">
                      Multiple fellow discoveries have advanced to clinical trials, with several biomarkers and imaging 
                      technologies now in routine clinical use.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Innovation Recognition</h4>
                    <p className="text-gray-600">
                      Fellows have received numerous awards including NIH K99/R00 grants, young investigator awards, 
                      and patents for novel detection technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Application Process</h3>
              <div className="space-y-4">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Eligibility Review</h4>
                        <p className="text-gray-600">
                          PhD or MD/PhD in relevant field, strong publication record, and commitment to cancer early 
                          detection research.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Proposal Development</h4>
                        <p className="text-gray-600">
                          Submit innovative research proposal aligned with Canary Foundation's mission of developing 
                          early detection technologies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Mentor Selection</h4>
                        <p className="text-gray-600">
                          Identify and secure commitment from established researcher at participating institution with 
                          expertise in your research area.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Review & Selection</h4>
                        <p className="text-gray-600">
                          Applications reviewed by expert panel evaluating scientific merit, innovation potential, and 
                          alignment with early detection goals.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Program Statistics */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Program Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Fellows Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-gray-600 text-sm">Partner Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$10M+</div>
                  <div className="text-gray-600 text-sm">Research Funding</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-gray-600 text-sm">Publications</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Future Leaders</h3>
              <p className="text-gray-600 mb-6">
                Help us train the next generation of cancer researchers who will develop tomorrow's early detection breakthroughs.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  className="bg-primary text-white hover:bg-primary-dark"
                  onClick={() => window.open('https://www.cancer.org/research/we-fund-cancer-research/apply-research-grant.html', '_blank')}
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open('https://donorbox.org/canary-campaign', '_blank')}
                >
                  Support Fellowships
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