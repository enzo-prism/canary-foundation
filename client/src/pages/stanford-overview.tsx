import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Microscope, Users, Award, Heart, TrendingUp, Camera, ArrowRight, GraduationCap } from "lucide-react";

export default function StanfordOverview() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Canary Center at Stanford</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The world's first facility dedicated solely to early cancer detection research, bringing together leading scientists to revolutionize cancer diagnosis
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">A Legacy of Innovation</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Center at Stanford, established in 2009 with a $10 million investment from Don Listwin, 
                represents a groundbreaking collaboration between the Canary Foundation and Stanford University. 
                This state-of-the-art facility brings together world-class researchers, cutting-edge technology, 
                and innovative approaches to tackle one of medicine's greatest challenges: detecting cancer early 
                enough to cure it.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded under the visionary leadership of Dr. Sanjiv "Sam" Gambhir, the center has become a global 
                leader in molecular imaging, biomarker discovery, and translational research. Our multidisciplinary 
                teams work across the spectrum from basic science to clinical implementation, ensuring discoveries 
                rapidly benefit patients.
              </p>
            </div>

            {/* Dr. Gambhir Legacy */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Dr. Sanjiv Sam Gambhir's Vision</h3>
                  <p className="text-gray-600 mb-4">
                    As founding director, Dr. Gambhir established the Canary Center as a hub for innovation in 
                    molecular imaging and early detection. His pioneering work in PET scanning and molecular 
                    imaging continues to guide our research.
                  </p>
                  <p className="text-gray-600 italic">
                    "The goal is simple yet audacious: detect cancer early enough that it can be cured with 
                    existing therapies. This requires seeing cancer at the molecular level, long before symptoms appear."
                  </p>
                </div>
              </div>
            </div>

            {/* Center Divisions */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Research Divisions</h3>
              <div className="grid md:grid-cols-3 gap-8">
                
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">For Scientists</h4>
                    <p className="text-gray-600 mb-4">
                      Training programs, fellowships, and research opportunities for the next generation of early detection researchers.
                    </p>
                    <Link 
                      href="/science/centers/stanford/for-scientists"
                      className="text-primary hover:text-primary-dark font-semibold flex items-center"
                    >
                      Explore Opportunities <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Microscope className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Biomarkers</h4>
                    <p className="text-gray-600 mb-4">
                      Discovery and validation of molecular signatures that enable blood-based cancer detection.
                    </p>
                    <Link 
                      href="/science/centers/stanford/biomarkers"
                      className="text-primary hover:text-primary-dark font-semibold flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Imaging</h4>
                    <p className="text-gray-600 mb-4">
                      Revolutionary molecular imaging technologies including microbubble ultrasound and photoacoustic imaging.
                    </p>
                    <Link 
                      href="/science/centers/stanford/imaging"
                      className="text-primary hover:text-primary-dark font-semibold flex items-center"
                    >
                      Discover More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>

              </div>
            </div>

            {/* Core Facilities */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">World-Class Facilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Building2 className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Cyclotron & Radiochemistry</h4>
                  <p className="text-gray-600">
                    On-site cyclotron producing 36+ FDA-approved radiotracers for molecular imaging research 
                    and clinical applications.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Molecular Imaging Suite</h4>
                  <p className="text-gray-600">
                    State-of-the-art PET, MRI, CT, and ultrasound systems with advanced molecular imaging 
                    capabilities.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <Microscope className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Biomarker Discovery Lab</h4>
                  <p className="text-gray-600">
                    Advanced proteomics, genomics, and metabolomics platforms for comprehensive biomarker 
                    analysis.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-dark mb-2">Clinical Translation Center</h4>
                  <p className="text-gray-600">
                    Dedicated space for conducting clinical trials and translating discoveries into patient 
                    care.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Impact */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Research Excellence</h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Key Achievements</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-primary mt-1" />
                        <span>FDA-approved microbubble ultrasound technology</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-primary mt-1" />
                        <span>200+ peer-reviewed publications</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-primary mt-1" />
                        <span>15+ patents for detection technologies</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-primary mt-1" />
                        <span>Multiple biomarkers in clinical use</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Active Programs</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <Heart className="w-4 h-4 text-primary mt-1" />
                        <span>5 cancer-specific research programs</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Heart className="w-4 h-4 text-primary mt-1" />
                        <span>15+ active clinical trials</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Heart className="w-4 h-4 text-primary mt-1" />
                        <span>50+ research faculty and staff</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Heart className="w-4 h-4 text-primary mt-1" />
                        <span>25+ postdoctoral fellows</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration Network */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Collaborative Excellence</h3>
              <p className="text-gray-600 mb-6">
                The Canary Center serves as a hub for collaboration, bringing together expertise from across 
                Stanford and partner institutions worldwide:
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="font-semibold text-dark text-sm">Stanford Medicine</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="font-semibold text-dark text-sm">School of Engineering</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="font-semibold text-dark text-sm">Stanford Cancer Institute</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="font-semibold text-dark text-sm">Bio-X Program</div>
                </div>
              </div>
            </div>

            {/* Center Statistics */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Center Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2009</div>
                    <div className="text-gray-600 text-sm">Founded</div>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$10M</div>
                    <div className="text-gray-600 text-sm">Initial Investment</div>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <div className="text-gray-600 text-sm">Researchers</div>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                    <div className="text-gray-600 text-sm">Lives Impacted</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support the Canary Center</h3>
              <p className="text-gray-600 mb-6">
                Help us continue Dr. Gambhir's legacy and advance breakthrough research in early cancer detection at Stanford.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  className="bg-primary text-white hover:bg-primary-dark"
                  onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                >
                  Donate Now
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open('https://med.stanford.edu/canaryfoundation', '_blank')}
                >
                  Visit Center Website
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