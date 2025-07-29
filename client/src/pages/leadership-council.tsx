import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function LeadershipCouncil() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Leadership Council
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Distinguished leaders and advisors who provide strategic guidance and expertise 
                to advance our mission of early cancer detection research.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Council Members */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Council Members</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">JM</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Jennifer Mitchell</h3>
                    <p className="text-primary font-semibold text-center mb-4">Advisory Council Chair</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Former Director of National Cancer Institute with 30+ years in cancer research leadership. 
                      Guides strategic priorities and research direction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">DT</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. David Thompson</h3>
                    <p className="text-primary font-semibold text-center mb-4">Technology Innovation Advisor</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Pioneer in medical device innovation and digital health technologies. 
                      Advises on emerging technologies and commercialization strategies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">MR</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Maria Rodriguez</h3>
                    <p className="text-primary font-semibold text-center mb-4">Clinical Research Advisor</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Leading clinical oncologist specializing in early detection protocols. 
                      Provides guidance on clinical trial design and patient care standards.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">KL</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Kevin Liu</h3>
                    <p className="text-primary font-semibold text-center mb-4">Industry Partnership Advisor</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Former pharmaceutical executive with expertise in research partnerships 
                      and technology transfer. Facilitates industry collaborations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">SB</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Susan Brown</h3>
                    <p className="text-primary font-semibold text-center mb-4">Patient Advocacy Advisor</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Cancer survivor and patient advocacy leader. Ensures patient perspectives 
                      are central to research priorities and program development.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">RK</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Robert Kim</h3>
                    <p className="text-primary font-semibold text-center mb-4">Global Health Advisor</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      International health policy expert focused on expanding cancer detection 
                      access globally. Guides international partnerships and initiatives.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Council Role and Impact */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Council Impact</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-6">Strategic Guidance</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Our Leadership Council provides invaluable strategic direction, helping us navigate 
                    complex challenges in cancer research, technology development, and healthcare policy.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Their diverse expertise ensures our research programs remain at the cutting edge 
                    and have maximum impact on patient outcomes worldwide.
                  </p>
                </div>
                <div>
                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-bold text-dark mb-4">Key Contributions</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Research priority setting and strategic planning
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Industry partnership development and facilitation
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Clinical trial design and regulatory guidance
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Global health policy advocacy and implementation
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          Patient-centered research approach development
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}