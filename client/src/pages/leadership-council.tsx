import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function LeadershipCouncil() {
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
                Leadership Council
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We thank our members from all time for their service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tackling an urgent need such as early cancer detection is a bold intention, and it takes partnering with people who have the experience, imagination, and long-range vision to make it happen. We thank the following people for their many contributions.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Council Featured Members */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-16">
                
                {/* Bill Bowes - Founding Partner */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">BB</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Bill Bowes</h3>
                    <p className="text-lg font-semibold text-primary mb-6">Founding Partner US Venture Partners, Former Co-Chair</p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Canary honors the contributions of the late Bill Bowes in furthering our mission, and we appreciate his leadership from 2007-2016.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      One of our greatest partners in creating the Canary Center at Stanford was William K. Bowes Jr., known as 'Bill Bowes.' Bill was a constant guide offering support in many areas including financial, business planning, and introductions to other partners. Since those early days, a state-of-art center has been opened in Stanford's Technology and Innovation Park.
                    </p>
                  </div>
                </div>

                {/* Don Listwin - Founder */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Don Listwin</h3>
                    <p className="text-lg font-semibold text-primary mb-6">Founder Canary Foundation, Co-Chair</p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Don was determined to launch a radical new assault on cancer. His target? The early cancer detection field.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      With energy and passion, Don has approached the disease as a technology and market development problem waiting to be solved. He's an engineer, an entrepreneur and a changemaker. And he thinks any problem can be fixed with the right amount of leadership, intellect and time.
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">DL</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Council Members Grid */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Members</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">CB</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Charles Beeler</h3>
                    <p className="text-primary font-semibold text-center mb-4">Rally Ventures</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">JB</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Jenny Beeler</h3>
                    <p className="text-primary font-semibold text-center mb-4">Leadership Council Member</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">RD</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Reid Dennis</h3>
                    <p className="text-primary font-semibold text-center mb-4">Founder Institutional Venture Partners</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">JD</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">John Drew</h3>
                    <p className="text-primary font-semibold text-center mb-4">General Partner Technology Crossover Ventures</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">ED</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Ellen Drew</h3>
                    <p className="text-primary font-semibold text-center mb-4">Leadership Council Member</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">GM</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Greg McAdoo</h3>
                    <p className="text-primary font-semibold text-center mb-4">Partner, Sequoia Capital</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">NR</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Nicki Riedel</h3>
                    <p className="text-primary font-semibold text-center mb-4">Partner at Dear Pixels and Black and White Designs</p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">HV</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 text-center">Hilary Valentine</h3>
                    <p className="text-primary font-semibold text-center mb-4">Former Chair of Board of Directors, Room to Read</p>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

        {/* Frank Quattrone and Denise Foderaro Special Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-primary">FQ</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Frank Quattrone</h3>
                  <p className="text-lg font-semibold text-primary mb-6">CEO, Qatalyst Group and Denise Foderaro Quattrone</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    In 2006, long before the accuracy of PSA testing for prostate cancer was questioned along with issues of the over-treatment through radical procedure, Frank Quattrone and Denise Foderaro heard members of our Prostate Cancer Team talk about a fledgling idea.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The scientists had identified a major problem in prostate cancer diagnosis; that the majority of men with prostate cancer (the percentages increase greatly with age) will die 'with' prostate cancer instead of 'from' prostate cancer. The researchers believed that men were being over treated and set out to create a clinical trial called the Prostate Cancer Active Surveillance Study, or PASS, to enroll men in a program who would opt to not get treatment unless their cancer became more aggressive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Vision */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Leadership Vision</h2>
              
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Tackling an urgent need such as early cancer detection is a bold intention, and it takes partnering with people who have the experience, imagination, and long-range vision to make it happen.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our Leadership Council members bring decades of experience in venture capital, technology innovation, and strategic philanthropy. They provide the guidance and connections necessary to advance breakthrough cancer detection research that can save millions of lives.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}