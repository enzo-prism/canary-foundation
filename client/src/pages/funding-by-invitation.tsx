import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function FundingByInvitation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
                Funding by Invitation
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                All major programs are reviewed and approved by the Canary Board of Directors, while the science teams set the scientific direction and objectives of the programs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand there are many significant studies being conducted, however we must focus our funding.
              </p>
            </div>
          </div>
        </section>

        {/* Canary Research Award Process */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Canary Research Award Process</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-6">Invitation Only</h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        All funding requests are by invitation only.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Canary Foundation does not accept unsolicited requests of funds.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-6">Governance Structure</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-bold text-dark mb-2">Board of Directors</h4>
                        <p className="text-gray-600">
                          Reviews and approves all major programs to ensure alignment with foundation goals and strategic priorities.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-bold text-dark mb-2">Science Teams</h4>
                        <p className="text-gray-600">
                          Set the scientific direction and objectives of the programs, ensuring research excellence and innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Focus */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Strategic Funding Focus</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-dark mb-4">Focused Investment</h3>
                    <p className="text-gray-600 mb-4">
                      We understand there are many significant studies being conducted, however we must focus our funding.
                    </p>
                    <div className="text-sm text-primary font-semibold">Strategic Priority</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-dark mb-4">Board Oversight</h3>
                    <p className="text-gray-600 mb-4">
                      All major programs require review and approval by our experienced Board of Directors.
                    </p>
                    <div className="text-sm text-primary font-semibold">Governance Excellence</div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-dark mb-4">Scientific Direction</h3>
                    <p className="text-gray-600 mb-4">
                      Science teams maintain autonomy in setting research direction and program objectives.
                    </p>
                    <div className="text-sm text-primary font-semibold">Research Independence</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Award Process Details */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">Award Process</h2>
              
              <div className="space-y-8">
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                      <h3 className="text-xl font-bold text-dark">Invitation Extended</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Research opportunities are identified by our science teams and Board of Directors. Invitations are extended to select researchers and institutions based on strategic alignment and scientific excellence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-gray-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                      <h3 className="text-xl font-bold text-dark">Scientific Review</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Science teams evaluate proposals for scientific merit, innovation potential, and alignment with early cancer detection research objectives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-gray-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                      <h3 className="text-xl font-bold text-dark">Board Approval</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      The Board of Directors conducts final review and approval of all major programs, ensuring strategic fit and responsible stewardship of foundation resources.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-white shadow-lg border-l-4 border-red-500">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-dark mb-4">Important Notice</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    <strong>All funding requests are by invitation only.</strong>
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong>Canary Foundation does not accept unsolicited requests of funds.</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}