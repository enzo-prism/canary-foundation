import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function AboutOverview() {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                About Canary Foundation
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded in 2004, Canary Foundation is dedicated to advancing early cancer detection research 
                through innovative technologies, collaborative partnerships, and patient-centered approaches.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    To accelerate the development and deployment of technologies for early cancer detection, 
                    fundamentally changing the trajectory of cancer care through precision medicine and 
                    innovative research programs.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We focus on detecting cancer at its earliest stages when treatment is most effective, 
                    working with leading institutions and researchers worldwide to bring breakthrough 
                    technologies from the laboratory to clinical practice.
                  </p>
                </div>
                <div>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-4">Focus Areas</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Early detection biomarker development
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Precision medicine technologies
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Multi-cancer detection platforms
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Collaborative research networks
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                A world where cancer is detected early enough to be curable for everyone, everywhere.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">20+</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Years of Innovation</h3>
                    <p className="text-gray-600">
                      Two decades of pioneering research in early cancer detection
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">100+</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Research Partners</h3>
                    <p className="text-gray-600">
                      Collaborative network of leading institutions worldwide
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">1000+</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Lives Impacted</h3>
                    <p className="text-gray-600">
                      Participants in breakthrough research studies
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}