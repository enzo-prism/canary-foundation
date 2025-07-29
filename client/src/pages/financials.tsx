import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Financials() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Financial Transparency
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are committed to complete transparency in how we manage and utilize 
                donations to advance early cancer detection research.
              </p>
            </div>
          </div>
        </section>

        {/* Financial Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">2023 Financial Summary</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$12.5M</div>
                    <h3 className="text-xl font-semibold text-dark mb-2">Total Revenue</h3>
                    <p className="text-gray-600">From donations, grants, and partnerships</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$11.8M</div>
                    <h3 className="text-xl font-semibold text-dark mb-2">Research Investment</h3>
                    <p className="text-gray-600">Directly funding breakthrough research</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">94%</div>
                    <h3 className="text-xl font-semibold text-dark mb-2">Research Allocation</h3>
                    <p className="text-gray-600">Of total funds invested in research programs</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Expense Breakdown */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">How Your Donations Are Used</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-6">Expense Allocation</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-primary rounded mr-3"></div>
                        <span className="text-gray-700">Research Programs</span>
                      </div>
                      <span className="font-semibold text-primary">94%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-primary/60 rounded mr-3"></div>
                        <span className="text-gray-700">Administrative Costs</span>
                      </div>
                      <span className="font-semibold text-gray-600">4%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-primary/30 rounded mr-3"></div>
                        <span className="text-gray-700">Fundraising</span>
                      </div>
                      <span className="font-semibold text-gray-600">2%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-bold text-dark mb-4">Research Impact</h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Every dollar donated goes directly toward advancing early cancer detection research. 
                        Our minimal overhead ensures maximum impact for breakthrough discoveries.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Direct research grants to leading institutions
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Equipment and technology development
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Clinical trial support and patient studies
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Training and education programs
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Annual Reports */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Annual Reports</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="text-3xl font-bold text-primary mb-4">2023</div>
                    <h3 className="text-xl font-semibold text-dark mb-4">Annual Report</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive overview of research achievements, financial stewardship, and impact metrics.
                    </p>
                    <Button 
                      className="bg-primary text-white hover:bg-primary-dark"
                      onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                    >
                      View Report
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="text-3xl font-bold text-primary mb-4">2022</div>
                    <h3 className="text-xl font-semibold text-dark mb-4">Annual Report</h3>
                    <p className="text-gray-600 mb-6">
                      Detailed financial statements, research program updates, and partnership highlights.
                    </p>
                    <Button 
                      className="bg-primary text-white hover:bg-primary-dark"
                      onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                    >
                      View Report
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="text-3xl font-bold text-primary mb-4">2021</div>
                    <h3 className="text-xl font-semibold text-dark mb-4">Annual Report</h3>
                    <p className="text-gray-600 mb-6">
                      Foundation milestones, research breakthroughs, and transparent financial reporting.
                    </p>
                    <Button 
                      className="bg-primary text-white hover:bg-primary-dark"
                      onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                    >
                      View Report
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Accountability Standards */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Commitment to Accountability</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We maintain the highest standards of financial transparency and accountability, 
                ensuring every donation is used effectively to advance our mission.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-4">Independent Audits</h3>
                    <p className="text-gray-600 text-sm">
                      Annual independent financial audits ensure compliance with nonprofit standards 
                      and transparent use of donor funds.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-4">Board Oversight</h3>
                    <p className="text-gray-600 text-sm">
                      Our Board of Directors provides rigorous oversight of financial management 
                      and strategic allocation of resources.
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