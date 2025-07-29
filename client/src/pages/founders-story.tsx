import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function FoundersStory() {
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
              <p className="text-xl text-gray-600 leading-relaxed">
                The personal journey that sparked a revolution in early cancer detection research
              </p>
            </div>
          </div>
        </section>

        {/* Don Listwin's Story */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Don Listwin</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Canary Foundation was born from personal tragedy and transformed into hope for millions. 
                    In 2000, Don Listwin's mother, Grace Listwin, was misdiagnosed with a bladder infection 
                    when she was actually suffering from ovarian cancer.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    By the time her cancer was properly detected in 2001, it had progressed to a late stage. 
                    Grace passed away from ovarian cancer that could have been treatable if caught earlier.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Don's grief transformed into determination. He founded Canary Foundation in 2004 with 
                    a clear mission: ensure no family suffers the loss that his did due to late-stage cancer detection.
                  </p>
                </div>
                <div>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-dark mb-4">The Genesis</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">2000</div>
                          <p className="text-gray-600">Grace Listwin misdiagnosed with bladder infection</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">2001</div>
                          <p className="text-gray-600">Grace dies from late-stage ovarian cancer</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">2002-2003</div>
                          <p className="text-gray-600">First biomarker research funded at Fred Hutch Cancer Research Center</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <div className="text-sm font-semibold text-primary mb-1">2004</div>
                          <p className="text-gray-600">Canary Foundation officially established</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Born from Loss */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">From Personal Loss to Global Impact</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  What began as one family's tragedy has grown into a worldwide movement for early cancer detection
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-dark mb-4">The Challenge</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      When Grace Listwin was misdiagnosed, the tools for early ovarian cancer detection simply didn't exist. 
                      Her symptoms were vague, and by the time the cancer was identified, it had already spread.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This experience revealed a critical gap in medical technology: the need for better, more sensitive 
                      methods to detect cancer at its earliest, most treatable stages.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-dark mb-4">The Solution</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Don Listwin channeled his business acumen and personal passion into creating a foundation 
                      that would revolutionize early cancer detection through cutting-edge research and technology.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Today, Canary Foundation funds breakthrough research in biomarkers, imaging technologies, 
                      and precision medicine that are transforming how cancer is detected and treated worldwide.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy and Impact */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Grace's Legacy Lives On</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Every breakthrough in early cancer detection, every life saved through early intervention, 
                honors Grace Listwin's memory and fulfills Don's promise that her death would not be in vain.
              </p>
              <blockquote className="text-2xl font-semibold text-primary italic border-l-4 border-primary pl-6 text-left max-w-3xl mx-auto">
                "We cannot bring my mother back, but we can ensure that other families don't have to endure 
                what we did. Every day we work toward a future where cancer is caught early enough to save lives."
                <footer className="text-lg text-gray-600 mt-4 not-italic">— Don Listwin, Founder</footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}