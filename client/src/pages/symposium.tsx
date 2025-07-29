import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Symposium() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Canary Symposium
              </h1>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Over 12 Years of Bringing Scientists Together
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                The Canary Symposium has grown into a bigger conference, called the Early Detection of Cancer Conference, which is jointly supported by the early cancer detection programs at the Canary Center at Stanford, Cancer Research UK, and the OHSU Knight Cancer Center.
              </p>
            </div>
          </div>
        </section>

        {/* Evolution to Early Detection of Cancer Conference */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Evolution and Growth</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    What began as the Canary Symposium has evolved into a major international conference dedicated to early cancer detection. After over 12 years of bringing scientists together, the symposium has grown into the Early Detection of Cancer Conference.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    This expanded conference represents a collaborative effort between leading institutions worldwide, demonstrating the global commitment to advancing early cancer detection research.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The conference continues the Canary Foundation's mission of fostering scientific collaboration and accelerating breakthrough discoveries in early cancer detection.
                  </p>
                </div>
                <div>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-4">Early Detection of Cancer Conference</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">Joint Support</div>
                          <p className="text-gray-600">Multi-institutional collaboration</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">Legacy</div>
                          <p className="text-gray-600">12+ years of scientific collaboration</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">Growth</div>
                          <p className="text-gray-600">Expanded from symposium to major conference</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">Mission</div>
                          <p className="text-gray-600">Advancing early cancer detection globally</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Institutions */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Joint Supporting Institutions</h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                The Early Detection of Cancer Conference is jointly supported by leading early cancer detection programs worldwide.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Canary Center at Stanford</h3>
                    <p className="text-gray-600 mb-4">
                      The founding institution continues its leadership in early cancer detection research, providing core support for the expanded international conference.
                    </p>
                    <div className="text-sm text-primary font-semibold">Stanford University, California</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Cancer Research UK</h3>
                    <p className="text-gray-600 mb-4">
                      The world's leading cancer charity joins as a key supporter, bringing international perspective and European research leadership to the conference.
                    </p>
                    <div className="text-sm text-primary font-semibold">United Kingdom</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">OHSU Knight Cancer Center</h3>
                    <p className="text-gray-600 mb-4">
                      Oregon Health & Science University's Knight Cancer Center contributes expertise in precision oncology and innovative cancer detection research.
                    </p>
                    <div className="text-sm text-primary font-semibold">Portland, Oregon</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Conference Legacy */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">A Legacy of Scientific Collaboration</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From its humble beginnings as the Canary Symposium to its evolution into the internationally supported Early Detection of Cancer Conference, this gathering has maintained its core mission: bringing together the brightest minds in cancer research to accelerate breakthroughs in early detection.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">12+</div>
                  <div className="text-gray-600">Years of Scientific Collaboration</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <div className="text-gray-600">Leading Institutional Partners</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">Global</div>
                  <div className="text-gray-600">International Research Network</div>
                </div>
              </div>
              
              <div className="mt-12">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Continuing the Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The Early Detection of Cancer Conference continues to build on the Canary Foundation's vision of fostering international collaboration, sharing breakthrough research, and accelerating the development of life-saving early detection technologies. Through this expanded platform, researchers worldwide work together toward the common goal of detecting cancer at its earliest, most treatable stages.
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