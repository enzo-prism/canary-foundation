import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Microscope, Users, Award, Lightbulb, BookOpen, Beaker, Network, GraduationCap } from "lucide-react";

export default function StanfordForScientists() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">For Scientists</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              If you want to get involved or learn more about the research at the Canary Center at Stanford, please visit our website. Open positions are posted here. You may contact our faculty members directly. For more general information please contact us at: canarycenter@stanford.edu
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Research Opportunities at Canary Center</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Center at Stanford provides an unparalleled environment for scientists dedicated to early cancer 
                detection research. Our state-of-the-art facilities, collaborative atmosphere, and access to cutting-edge 
                technologies make this the ideal place to advance your research career while making a meaningful impact 
                on cancer outcomes worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We welcome researchers at all career stages, from postdoctoral fellows to established investigators, who 
                share our passion for translating scientific discoveries into clinical solutions that save lives.
              </p>
            </div>

            {/* Research Resources */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Research Resources & Facilities</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Microscope className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Core Facilities</h4>
                    <p className="text-gray-600">
                      Access to advanced imaging, genomics, proteomics, and biobanking facilities with expert technical support 
                      for your research projects.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Beaker className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Cyclotron & Radiochemistry</h4>
                    <p className="text-gray-600">
                      On-site cyclotron facility producing 36+ FDA-approved radiotracers for molecular imaging research 
                      and clinical applications.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Network className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Collaborative Network</h4>
                    <p className="text-gray-600">
                      Connect with multidisciplinary teams spanning engineering, medicine, biology, and computer science 
                      for innovative research approaches.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Clinical Translation</h4>
                    <p className="text-gray-600">
                      Direct pathways to translate your discoveries into clinical trials through partnerships with 
                      Stanford Hospital and regional medical centers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Fellowship Programs */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Fellowship & Training Programs</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Phillips Postdoctoral Fellowship</h4>
                      <p className="text-gray-600">
                        Prestigious fellowship supporting exceptional postdoctoral researchers in early detection research, 
                        providing mentorship, funding, and career development opportunities.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Award className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark mb-2">NCI R25 CREST Program</h4>
                      <p className="text-gray-600">
                        Cancer Research Education for Students and Trainees program offering comprehensive training 
                        in cancer biology, early detection, and translational research.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Lightbulb className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Seed Grant Program</h4>
                      <p className="text-gray-600">
                        Technology seed grants supporting innovative pilot projects that could lead to breakthrough 
                        discoveries in early cancer detection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Active Research Areas</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Microscope className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Biomarker Discovery</h4>
                  <p className="text-gray-600 text-sm">Protein, genetic, and metabolic markers</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Beaker className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Liquid Biopsy</h4>
                  <p className="text-gray-600 text-sm">Circulating tumor DNA and cell analysis</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Network className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">AI & Machine Learning</h4>
                  <p className="text-gray-600 text-sm">Computational approaches to detection</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Molecular Imaging</h4>
                  <p className="text-gray-600 text-sm">PET, photoacoustic, and ultrasound</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Nanotechnology</h4>
                  <p className="text-gray-600 text-sm">Targeted delivery and detection systems</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Prevention Research</h4>
                  <p className="text-gray-600 text-sm">Risk assessment and intervention strategies</p>
                </div>
              </div>
            </div>

            {/* Join Us */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Join Our Research Community</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We're always looking for talented scientists who share our mission to revolutionize cancer early detection. 
                Whether you're a graduate student, postdoc, or established investigator, we offer opportunities to advance 
                your career while making a real difference in cancer outcomes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-600">Competitive funding and salary packages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-600">Access to world-class facilities and technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-600">Mentorship from leading cancer researchers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-600">Career development and networking opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-600">Direct pathways to clinical translation</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Advance Your Research Career</h3>
              <p className="text-gray-600 mb-6">
                Join us in the fight against cancer through groundbreaking early detection research.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  className="bg-primary text-white hover:bg-primary-dark"
                  onClick={() => window.open('https://med.stanford.edu/canaryfoundation', '_blank')}
                >
                  Learn More
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open('https://donorbox.org/canary-campaign', '_blank')}
                >
                  Support Research
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