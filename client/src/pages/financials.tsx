import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Financials() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Financials
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are committed to complete transparency in how we manage and utilize 
                donations to advance early cancer detection research.
              </p>
            </div>
          </div>
        </section>

        {/* 2020 Financial Performance Metrics */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Canary Foundation 2020 Financial Performance Metrics</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">91%</div>
                    <h3 className="text-xl font-semibold text-dark mb-2">Program Expenses</h3>
                    <p className="text-gray-600">$3,621,840 of total $3,963,900 costs</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3%</div>
                    <h3 className="text-xl font-semibold text-dark mb-2">Administrative Expenses</h3>
                    <p className="text-gray-600">$103,196 general/administration costs</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">6%</div>
                    <h3 className="text-xl font-semibold text-dark mb-2">Fundraising Expenses</h3>
                    <p className="text-gray-600">$238,864 fundraising costs</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">12.6¢</div>
                    <h3 className="text-xl font-semibold text-dark mb-2">Fundraising Efficiency</h3>
                    <p className="text-gray-600">Cost per $1.00 raised from $3,001,876 total</p>
                  </CardContent>
                </Card>


              </div>
            </div>
          </div>
        </section>

        {/* Detailed Financial Breakdown */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">2020 Financial Breakdown</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-6">Expense Allocation</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-primary rounded mr-3"></div>
                        <span className="text-gray-700">Program Expenses</span>
                      </div>
                      <span className="font-semibold text-primary">91%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-primary/60 rounded mr-3"></div>
                        <span className="text-gray-700">Fundraising Expenses</span>
                      </div>
                      <span className="font-semibold text-gray-600">6%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-primary/30 rounded mr-3"></div>
                        <span className="text-gray-700">Administrative Expenses</span>
                      </div>
                      <span className="font-semibold text-gray-600">3%</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                    <h4 className="text-lg font-semibold text-dark mb-4">Total 2020 Costs</h4>
                    <div className="text-3xl font-bold text-primary mb-2">$3,963,900</div>
                    <p className="text-gray-600">Complete operational expenses</p>
                  </div>
                </div>
                <div>
                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-bold text-dark mb-4">Fundraising Efficiency</h4>
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-primary mb-2">12.6¢</div>
                        <p className="text-gray-600">Cost per $1.00 raised</p>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Outstanding fundraising efficiency with minimal overhead ensures maximum impact for breakthrough cancer detection research.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Total funds raised: $3,001,876
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Fundraising costs: $238,864
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          Efficient fundraising model for sustainable growth
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency and Accountability */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Financial Transparency</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The Canary Foundation maintains the highest standards of financial transparency and accountability, 
                ensuring every donation is used effectively to advance early cancer detection research.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-4">2020 Performance Summary</h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex justify-between">
                        <span>Program Expense Percentage:</span>
                        <span className="font-semibold text-primary">91%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Administrative Expense Percentage:</span>
                        <span className="font-semibold">3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fundraising Expense Percentage:</span>
                        <span className="font-semibold">6%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fundraising Efficiency:</span>
                        <span className="font-semibold text-primary">12.6¢ per $1</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-4">Nonprofit Commitment</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      As a 501(c)(3) nonprofit organization, we are committed to the highest standards of financial stewardship. Annual independent audits ensure compliance with nonprofit standards and transparent use of donor funds.
                    </p>
                    <p className="text-gray-600 text-sm">
                      Our Board of Directors provides rigorous oversight of financial management and strategic allocation of resources to maximize research impact.
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