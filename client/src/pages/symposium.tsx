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
              <p className="text-xl text-gray-600 leading-relaxed">
                Annual gathering of leading researchers, clinicians, and innovators 
                advancing the future of early cancer detection.
              </p>
            </div>
          </div>
        </section>

        {/* Symposium Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Advancing Early Detection Science</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    The Canary Symposium brings together the world's foremost experts in cancer research, 
                    technology innovation, and clinical practice to share breakthrough discoveries and 
                    collaborate on the next generation of early detection technologies.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our annual symposium serves as a catalyst for scientific collaboration, featuring 
                    cutting-edge research presentations, interactive workshops, and strategic discussions 
                    that shape the future of cancer care.
                  </p>
                </div>
                <div>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-4">2024 Symposium</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">Location</div>
                          <p className="text-gray-600">San Francisco, CA</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">Date</div>
                          <p className="text-gray-600">October 15-17, 2024</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">Attendees</div>
                          <p className="text-gray-600">500+ researchers and clinicians</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">Focus</div>
                          <p className="text-gray-600">AI in Cancer Detection & Liquid Biopsies</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Program Highlights</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Keynote Presentations</h3>
                    <p className="text-gray-600 mb-4">
                      Leading scientists present groundbreaking research in early detection technologies, 
                      biomarker discovery, and precision medicine approaches.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Novel biomarker discoveries</li>
                      <li>• AI-driven detection algorithms</li>
                      <li>• Clinical trial results</li>
                      <li>• Technology innovations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Interactive Workshops</h3>
                    <p className="text-gray-600 mb-4">
                      Hands-on sessions featuring the latest technologies, methodologies, 
                      and collaborative research approaches in cancer detection.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Technology demonstrations</li>
                      <li>• Research methodology training</li>
                      <li>• Data analysis workshops</li>
                      <li>• Collaboration planning sessions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Networking Opportunities</h3>
                    <p className="text-gray-600 mb-4">
                      Structured networking events designed to foster new collaborations 
                      and strengthen existing partnerships in the research community.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Research collaboration matching</li>
                      <li>• Industry partnership forums</li>
                      <li>• Young investigator sessions</li>
                      <li>• International research discussions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Past Symposiums */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Past Symposiums</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="text-3xl font-bold text-primary mb-4">2023</div>
                    <h3 className="text-xl font-semibold text-dark mb-4">London, UK</h3>
                    <p className="text-gray-600 mb-4">
                      International symposium with 500 attendees focusing on global cancer detection 
                      challenges and collaborative solutions.
                    </p>
                    <div className="text-sm text-primary font-semibold">
                      Theme: Global Health & Accessibility
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="text-3xl font-bold text-primary mb-4">2022</div>
                    <h3 className="text-xl font-semibold text-dark mb-4">Seattle, WA</h3>
                    <p className="text-gray-600 mb-4">
                      Sold-out symposium featuring breakthrough presentations in liquid biopsy 
                      technologies and multi-cancer detection platforms.
                    </p>
                    <div className="text-sm text-primary font-semibold">
                      Theme: Liquid Biopsies & Multi-Cancer Detection
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="text-3xl font-bold text-primary mb-4">2021</div>
                    <h3 className="text-xl font-semibold text-dark mb-4">Virtual Event</h3>
                    <p className="text-gray-600 mb-4">
                      First virtual symposium reaching global audience with focus on 
                      digital health innovations and remote detection technologies.
                    </p>
                    <div className="text-sm text-primary font-semibold">
                      Theme: Digital Health & Remote Detection
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Join the Conversation</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Be part of the global community working to transform cancer care through early detection. 
                Registration for the 2024 symposium opens soon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary text-white hover:bg-primary-dark px-8 py-3"
                  onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                >
                  Register Interest
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
                  onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                >
                  View Past Presentations
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}