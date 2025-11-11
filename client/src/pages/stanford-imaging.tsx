import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Activity, Zap, Monitor, Award, Microscope, Heart, TrendingUp } from "lucide-react";

export default function StanfordImaging() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Imaging Research</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Revolutionary molecular imaging technologies detecting cancer at the cellular level before symptoms appear
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Advanced Imaging at Stanford</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Center at Stanford, established through the vision of Dr. Sanjiv "Sam" Gambhir, is a world leader in 
                molecular imaging for early cancer detection. Our pioneering work includes FDA-approved microbubble ultrasound 
                technology, photoacoustic imaging, and advanced PET scanning techniques that can visualize cancer at its earliest stages.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Building on Dr. Gambhir's legacy, our imaging research combines physics, engineering, chemistry, and medicine to 
                create technologies that can detect tumors smaller than 1mm and visualize molecular processes in real-time.
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
                    World-renowned expert in molecular imaging and founding director of the Canary Center, Dr. Gambhir 
                    revolutionized cancer detection through his pioneering work in PET scanning and molecular imaging technologies.
                  </p>
                  <p className="text-gray-600 italic">
                    "We must detect cancer early enough to intervene and cure. Molecular imaging gives us eyes to see 
                    cancer at the cellular level, long before traditional methods can detect it."
                  </p>
                </div>
              </div>
            </div>

            {/* Imaging Technologies */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Revolutionary Imaging Technologies</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Microbubble Ultrasound</h4>
                    <p className="text-gray-600 mb-4">
                      FDA-approved technology using microscopic gas bubbles to enhance ultrasound imaging, detecting 
                      pancreatic tumors smaller than 1mm with 10,000x greater sensitivity.
                    </p>
                    <div className="text-primary font-semibold">FDA Approved 2014</div>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Photoacoustic Imaging</h4>
                    <p className="text-gray-600 mb-4">
                      Combines laser light and ultrasound to create detailed images of blood vessels and tissues, 
                      revealing tumor blood supply and molecular signatures.
                    </p>
                    <div className="text-primary font-semibold">Non-invasive Detection</div>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Molecular PET Imaging</h4>
                    <p className="text-gray-600">
                      Advanced PET scanning with novel radiotracers that target specific cancer molecules, enabling 
                      precise tumor identification and characterization.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Microscope className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">AI-Enhanced Imaging</h4>
                    <p className="text-gray-600">
                      Machine learning algorithms that analyze imaging data to identify subtle patterns invisible 
                      to the human eye, improving detection accuracy.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Cyclotron Facility */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Cyclotron & Radiochemistry Facility</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our on-site cyclotron facility produces over 36 FDA-approved radiotracers for molecular imaging research. 
                This unique resource enables rapid development and testing of new imaging agents that can target specific 
                cancer types and molecular pathways.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">36+</div>
                  <div className="text-gray-600 text-sm">FDA-Approved Radiotracers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Production Capability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-gray-600 text-sm">Research Studies Supported</div>
                </div>
              </div>
            </div>

            {/* Research Applications */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Clinical Applications</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Pancreatic Cancer Detection</h4>
                    <p className="text-gray-600">
                      Microbubble ultrasound detecting tumors below 1mm, revolutionizing early detection for one of 
                      the deadliest cancers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Breast Cancer Imaging</h4>
                    <p className="text-gray-600">
                      Molecular breast imaging providing higher sensitivity than mammography for dense breast tissue 
                      and high-risk patients.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Prostate Cancer Visualization</h4>
                    <p className="text-gray-600">
                      PSMA PET imaging enabling precise localization of prostate cancer for targeted biopsy and 
                      treatment planning.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Lung Nodule Characterization</h4>
                    <p className="text-gray-600">
                      Advanced imaging distinguishing benign from malignant lung nodules without invasive biopsy, 
                      reducing unnecessary procedures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Pipeline */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Innovation Pipeline</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-dark mb-3">Current Development</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-1" />
                      <span>Nanoparticle contrast agents for targeted imaging</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-1" />
                      <span>Raman spectroscopy for real-time tumor margin detection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-1" />
                      <span>Multimodal imaging combining PET, MRI, and ultrasound</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-3">Future Directions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <Heart className="w-4 h-4 text-primary mt-1" />
                      <span>Theranostic agents for simultaneous diagnosis and treatment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Heart className="w-4 h-4 text-primary mt-1" />
                      <span>Portable imaging devices for point-of-care detection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Heart className="w-4 h-4 text-primary mt-1" />
                      <span>Virtual biopsy through advanced molecular imaging</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Research Impact */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Research Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white text-center">
                  <CardContent className="p-6">
                    <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">200+ Publications</h4>
                    <p className="text-gray-600 text-sm">Peer-reviewed papers advancing the field</p>
                  </CardContent>
                </Card>
                <Card className="bg-white text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">15+ Patents</h4>
                    <p className="text-gray-600 text-sm">Technologies licensed to industry</p>
                  </CardContent>
                </Card>
                <Card className="bg-white text-center">
                  <CardContent className="p-6">
                    <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-dark mb-2">10,000+ Patients</h4>
                    <p className="text-gray-600 text-sm">Benefited from our imaging advances</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Imaging Innovation</h3>
              <p className="text-gray-600 mb-6">
                Help us continue Dr. Gambhir's legacy of developing revolutionary imaging technologies that save lives.
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