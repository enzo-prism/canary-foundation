import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function FoundersStory() {
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
                Founder's Story
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                The World Needs Early Cancer Detection: The Earlier, the Better
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Don Listwin is one of those people who makes things happen, he shakes things up, and drives change. 
                And he's really good at it.
              </p>
            </div>
          </div>
        </section>

        {/* Don's Background and Mission */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Don the Change Maker</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    He built a successful technology career at Cisco (the #2 executive) and then went on to found 
                    several other leading tech companies. But his biggest challenge of all came after he lost his 
                    mother to misdiagnosed ovarian cancer. He wondered if her outcome could have been different.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    What if they had found her tumor much earlier? And what if we could move all late-stage cancer 
                    patients to early stage? He was determined to find out.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    In 2004, he left a high-profile technology career to found the Canary Foundation, and has never 
                    turned back. He has committed his life to advancing early cancer detection. Someday soon, he believes 
                    early cancer detection tests will be commonplace, and the first line of defense for cancer.
                  </p>
                </div>
                <div>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-4">Grace's Story</h3>
                      <p className="text-gray-600 mb-4">
                        Don's mother Grace was twice misdiagnosed with a bladder infection, and by the time they 
                        discovered late-stage ovarian cancer, it was too late.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Determined to launch a radical assault on cancer, he began what a Wall Street Journal article 
                        on the foundation called "an industrial-style attack on the thorny problem of early cancer detection."
                      </p>
                      <p className="text-gray-600">
                        And the more he investigated, the more he didn't like what he found.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Funding Gap Discovery */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">The Funding Gap</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    There was a big gap in funding. Of the $10 billion spent annually on cancer research in the United States, 
                    the vast majority fund new cancer treatments and patient care.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Thinking of his mother and the millions who had died from aggressive cancers simply because the cancer 
                    was discovered too late, he found this news disheartening to say the least.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    In his view, for far too long, cancer research had continued to focus on drug therapies that were expensive, 
                    introduced too late in the disease process.
                  </p>
                </div>
                <div>
                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-4">Don's Approach</h3>
                      <p className="text-gray-600 mb-4">
                        Don approached the disease as a technology and market development problem waiting to be solved. 
                        As an engineer and entrepreneur, he thought just about any problem could be fixed with the right 
                        amount of leadership, intellect and time.
                      </p>
                      <p className="text-gray-600">
                        He saw cancer, and the way we studied the disease, as a series of network failures. And he believed 
                        that a systematic approach that involved researchers from many disciplines and institutions sharing 
                        information and working together would give us the breakthrough we needed.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <blockquote className="text-xl font-semibold text-primary italic border-l-4 border-primary pl-6 max-w-4xl mx-auto">
                  "We didn't build the Internet with one person, with one institution. All these people from all these places 
                  came together to make it happen. We had collaboration across multiple disciplines. Just look at the Human 
                  Genome Project. It's a great example of team science."
                  <footer className="text-lg text-gray-600 mt-4 not-italic">— Don Listwin</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Dr. Lee Hartwell */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Don the Optimist Meets the Scientist and Nobel Laureate</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    In early 2001, Don fired off emails to cancer centers across the country to find out what they were 
                    doing in the early detection area. He met Dr. Lee Hartwell, 2001 Nobel Laureate, and director of the 
                    Fred Hutchinson Cancer Center (known as the "Hutch") in Seattle.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    They discovered they shared a passion for early cancer detection. After funding a $10-million gift 
                    to Hutch to start a center of excellence, and help fund the core of a biomarker discovery and analysis program.
                  </p>
                </div>
                <div>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-4">The Canary in the Coal Mine</h3>
                      <p className="text-gray-600 mb-4">
                        Canary was named after the birds coalminers once carried as early detectors of dangerous gases. 
                        It's a fitting name for the world's first non-profit dedicated solely to early cancer detection.
                      </p>
                      <p className="text-gray-600">
                        Don and Dr. Hartwell began recruiting scientists for the research teams starting with ovarian cancer. 
                        Over the next several years, teams were added for pancreatic, lung, and prostate cancer.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Canary Center at Stanford */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">The Canary Center at Stanford</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    During that time, Don had built a strong relationship with Dr. Sanjiv Sam Gambhir, a world-renowned 
                    expert in molecular imaging and now chair of the Radiology Department at the Stanford University 
                    School of Medicine, and an early member of the Canary team.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    While Canary teams were collaborating and innovating virtually, Don and Sam wondered what would happen 
                    if world-class scientists had a physical building at a major university, where they could draw on other 
                    disciplines and assets at that university.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    After approaching the Dean of the School of Medicine at Stanford University who supported the idea, 
                    they talked with President John Hennessey who told them that he wanted the university to work on things 
                    that would uniquely differentiate them and have global impact. In 2009, the Canary Center at Stanford was formed.
                  </p>
                </div>
                <div>
                  <Card className="bg-white">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-4">Two-Stage Diagnostic Strategy</h3>
                      <p className="text-gray-600 mb-4">
                        Now led by Dr. Sam Gambhir, the Canary Center at Stanford is focused on a two-stage diagnostic strategy 
                        consisting of:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">Blood-based diagnostic tests to identify individuals who are likely to have cancer</span>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">Molecular imaging to pinpoint and verify a specific cancer type</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-4">
                        The Canary Center at Stanford is the first in the world to integrate research in both in vivo and 
                        in vitro diagnostics to deliver these tests.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy and Future Vision */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Legacy and Future Vision</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Today, more than 10 years since its founding, the Canary Foundation is recognized around the world 
                    for its groundbreaking work in blood and imaging biomarker discovery, and companies are increasingly 
                    looking to collaborate with Canary on bringing new molecular diagnostics to market.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Canary has continued to collaborate with academia and industry including the National Cancer Institute, 
                    M.D. Anderson, El Camino Hospital, the BC Cancer Agency, and Genomic Health.
                  </p>
                  <blockquote className="text-xl font-semibold text-primary italic border-l-4 border-primary pl-6">
                    "Participating in building the internet was one thing but being a leader who creates a whole new industry 
                    and saves lives, that's quite another. Wouldn't succeeding at this be a great thing?"
                    <footer className="text-lg text-gray-600 mt-4 not-italic">— Don Listwin</footer>
                  </blockquote>
                </div>
                <div>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-4">Don's Ultimate Vision</h3>
                      <p className="text-gray-600 mb-4">
                        Don hopes to have a going-out-of-business party in 15 or more years when he sees global, 
                        self-sustaining centers building the next generation of technology and products, taking over 
                        the work that the Canary Foundation began.
                      </p>
                      <p className="text-gray-600">
                        Even better, maybe by then, and if Don gets his way, cancer's time would have come, and gone.
                      </p>
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