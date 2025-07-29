import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Staff() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Our Team
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dedicated professionals working at the forefront of early cancer detection research
              </p>
            </div>
          </div>
        </section>

        {/* Team Philosophy */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">More Than a Job, It's a Calling</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For those of us who work at the Canary Foundation, our work is more than a job – it's a calling. 
                We are united by a shared mission to transform cancer care through early detection technologies 
                that save lives every day.
              </p>
            </div>
          </div>
        </section>

        {/* Core Staff */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Core Staff</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">DL</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Don Listwin</h3>
                    <p className="text-primary font-semibold mb-4">Founder & Executive Chairman</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Visionary leader driving the foundation's mission to revolutionize early cancer detection 
                      through innovative research and strategic partnerships.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">RS</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Research Director</h3>
                    <p className="text-primary font-semibold mb-4">Scientific Programs</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Leading scientific initiatives and research partnerships to advance biomarker discovery 
                      and early detection technologies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">PD</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Program Director</h3>
                    <p className="text-primary font-semibold mb-4">Operations & Strategy</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Overseeing program development, strategic initiatives, and operational excellence 
                      across all foundation activities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">CM</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Communications Manager</h3>
                    <p className="text-primary font-semibold mb-4">Outreach & Engagement</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Managing communications, community outreach, and stakeholder engagement 
                      to amplify our research impact.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">FA</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Financial Administrator</h3>
                    <p className="text-primary font-semibold mb-4">Finance & Administration</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Ensuring financial stewardship and administrative excellence to support 
                      our research mission and organizational growth.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-primary">RC</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Research Coordinator</h3>
                    <p className="text-primary font-semibold mb-4">Project Management</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Coordinating research studies, managing collaborations, and ensuring 
                      project milestones are met across multiple initiatives.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Our Values</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-dark mb-4">Innovation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We pursue breakthrough technologies and novel approaches that have the potential 
                      to revolutionize early cancer detection and save lives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-dark mb-4">Collaboration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We believe the greatest advances come through partnership, bringing together 
                      diverse expertise and perspectives to solve complex challenges.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-dark mb-4">Impact</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every project, every decision, every day is guided by our commitment to 
                      making a meaningful difference in the fight against cancer.
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