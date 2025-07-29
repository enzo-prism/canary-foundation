import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function BoardDirectors() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Board of Directors
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our Board of Directors is integral to the success of our team. They represent a diverse 
                group of accomplished leaders, scientists, and innovators who guide our strategic vision.
              </p>
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">DL</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Don Listwin</h3>
                    <p className="text-primary font-semibold text-center mb-4">Executive Chairman</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Founder of Canary Foundation with extensive experience in technology leadership 
                      and strategic business development. Passionate advocate for early cancer detection research.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">SG</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Sarah Garcia</h3>
                    <p className="text-primary font-semibold text-center mb-4">Chief Medical Officer</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Leading oncologist with 20+ years experience in cancer research and clinical practice. 
                      Expert in biomarker development and precision medicine approaches.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">MJ</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Michael Johnson</h3>
                    <p className="text-primary font-semibold text-center mb-4">Chief Technology Officer</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Technology innovator with expertise in medical device development and digital health platforms. 
                      Leading the foundation's technology strategy and innovation initiatives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">LC</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Lisa Chen</h3>
                    <p className="text-primary font-semibold text-center mb-4">Research Director</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Renowned researcher in molecular biology and cancer genomics. Leading multiple 
                      breakthrough studies in early detection biomarkers and liquid biopsy technologies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">RP</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Robert Park</h3>
                    <p className="text-primary font-semibold text-center mb-4">Chief Financial Officer</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Financial strategist with extensive experience in nonprofit management and 
                      healthcare finance. Ensuring fiscal responsibility and sustainable growth.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">AW</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Dr. Amanda White</h3>
                    <p className="text-primary font-semibold text-center mb-4">Clinical Affairs Director</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Clinical research expert with deep experience in regulatory affairs and 
                      clinical trial design for cancer detection technologies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Board Responsibilities */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Board Responsibilities</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-dark mb-4">Strategic Oversight</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        Setting long-term strategic direction and priorities
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        Overseeing major research initiatives and partnerships
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        Ensuring alignment with mission and values
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-dark mb-4">Governance & Accountability</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        Financial oversight and risk management
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        Performance monitoring and evaluation
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        Ensuring transparency and ethical standards
                      </li>
                    </ul>
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