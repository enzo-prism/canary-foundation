import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Microscope, Activity, Target, TrendingUp, Award, FlaskConical, Dna, Heart } from "lucide-react";

export default function StanfordBiomarkers() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Biomarkers Research</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discovering molecular signatures that enable early cancer detection through blood, tissue, and liquid biopsy analysis
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">Biomarker Discovery at Stanford</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Canary Center at Stanford is at the forefront of biomarker discovery for early cancer detection. Our researchers, 
                led by experts like Richard Kimura, are developing blood-based tests and multi-cancer screening approaches that can 
                detect cancer before symptoms appear, when treatment is most effective.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From protein markers to circulating tumor DNA, our comprehensive biomarker program spans the full spectrum of 
                molecular detection methods, with several discoveries already advancing to clinical trials and commercial development.
              </p>
            </div>

            {/* Research Leadership */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Richard Kimura, PhD</h3>
                  <p className="text-gray-600 mb-4">
                    Leading our biomarker research program, Dr. Kimura focuses on developing blood-based detection methods 
                    and multi-cancer screening trials that can identify multiple cancer types from a single blood draw.
                  </p>
                  <p className="text-gray-600 italic">
                    "Biomarkers are like biological fingerprints that show the earliest signs of cancer development, 
                    enabling intervention when cure rates are highest."
                  </p>
                </div>
              </div>
            </div>

            {/* Types of Biomarkers */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Biomarker Research Areas</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Dna className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Circulating Tumor DNA</h4>
                    <p className="text-gray-600">
                      Detecting cancer DNA fragments in blood samples, enabling non-invasive monitoring of tumor presence, 
                      evolution, and treatment response.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <FlaskConical className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Protein Biomarkers</h4>
                    <p className="text-gray-600">
                      Identifying specific proteins like HE4 for ovarian cancer and CA-19-9 for pancreatic cancer that 
                      indicate early-stage disease presence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Metabolic Markers</h4>
                    <p className="text-gray-600">
                      Analyzing metabolic changes in blood and urine that occur as cancer cells alter normal cellular 
                      processes and energy production.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-3">Exosome Analysis</h4>
                    <p className="text-gray-600">
                      Studying tiny vesicles released by cancer cells that carry molecular information about the tumor, 
                      providing insights into cancer type and stage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Biomarker Discovery Successes</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2008</div>
                  <div>
                    <h4 className="font-semibold text-dark">HE4 Validation</h4>
                    <p className="text-gray-600">Validated HE4 biomarker for ovarian cancer, now used clinically worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2011</div>
                  <div>
                    <h4 className="font-semibold text-dark">Gene Fusion Discovery</h4>
                    <p className="text-gray-600">Discovered ovarian cancer gene fusion advancing molecular understanding</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2017</div>
                  <div>
                    <h4 className="font-semibold text-dark">Lung Cancer Biomarker</h4>
                    <p className="text-gray-600">Discovered biomarker attracting significant industry licensing interest</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary font-bold">2024</div>
                  <div>
                    <h4 className="font-semibold text-dark">Multi-Cancer Panel</h4>
                    <p className="text-gray-600">Developing panel detecting 5+ cancer types from single blood draw</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Research */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">Current Biomarker Studies</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Multi-Cancer Early Detection Trial</h4>
                    <p className="text-gray-600">
                      Large-scale clinical trial testing blood-based biomarker panels that can simultaneously screen for 
                      breast, lung, ovarian, pancreatic, and prostate cancers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Liquid Biopsy Development</h4>
                    <p className="text-gray-600">
                      Creating non-invasive tests using blood, urine, and other body fluids to detect cancer DNA, proteins, 
                      and cells without need for tissue biopsy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">AI-Enhanced Biomarker Discovery</h4>
                    <p className="text-gray-600">
                      Using machine learning to identify complex biomarker patterns that human analysis might miss, 
                      improving detection accuracy and reducing false positives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Point-of-Care Testing</h4>
                    <p className="text-gray-600">
                      Developing rapid, affordable biomarker tests that can be performed in doctor's offices or resource-limited 
                      settings, expanding access to early detection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Translation to Clinical Practice */}
            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-dark mb-6">From Lab to Clinic</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our biomarker discoveries follow a rigorous path from initial discovery to clinical implementation:
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">1</div>
                  <h4 className="font-semibold text-dark mb-1">Discovery</h4>
                  <p className="text-gray-600 text-sm">Identify candidate biomarkers</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">2</div>
                  <h4 className="font-semibold text-dark mb-1">Validation</h4>
                  <p className="text-gray-600 text-sm">Test in patient samples</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">3</div>
                  <h4 className="font-semibold text-dark mb-1">Clinical Trials</h4>
                  <p className="text-gray-600 text-sm">Large-scale testing</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">4</div>
                  <h4 className="font-semibold text-dark mb-1">Implementation</h4>
                  <p className="text-gray-600 text-sm">Clinical practice adoption</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-4">Support Biomarker Research</h3>
              <p className="text-gray-600 mb-6">
                Help us develop the next generation of blood tests that can detect cancer early and save lives.
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