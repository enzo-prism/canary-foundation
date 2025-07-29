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
                Staff
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                For those of us who work at the Canary Foundation, our work is more than a job—it's a calling.
              </p>
            </div>
          </div>
        </section>

        {/* Don Listwin */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                    <span className="text-3xl font-bold text-primary">DL</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">Don Listwin</h2>
                  <p className="text-lg font-semibold text-primary mb-6">Founder, CEO, Co-Chairman</p>
                  <blockquote className="text-lg text-gray-600 italic border-l-4 border-primary pl-6">
                    "After 30 years in the technology industry, I launched Canary Foundation in 2004. I was motivated by a personal experience with cancer.
                    When my mother was misdiagnosed and died from ovarian cancer, I decided to commit my life to advancing early detection diagnostics."
                    <footer className="text-base text-gray-500 mt-4 not-italic">— Don Listwin</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Members */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-16">
                
                {/* Heidi Auman */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Heidi Auman</h3>
                    <p className="text-lg font-semibold text-primary mb-6">Scientific Program Manager</p>
                    <blockquote className="text-lg text-gray-600 italic border-l-4 border-primary pl-6 mb-6">
                      "I want to help the Canary Foundation succeed at the challenge of aligning different disciplines toward the common goal of early cancer detection.
                      My role as manager of scientific programs involves documenting strategic plans, ensuring group connectivity, and tracking and communication of results and progress."
                      <footer className="text-base text-gray-500 mt-4 not-italic">— Heidi Auman</footer>
                    </blockquote>
                    <p className="text-gray-600 leading-relaxed">
                      Before joining the Canary Foundation, Heidi was a Postdoctoral Research Fellow at New York University School of Medicine's 
                      Skirball Institute of Biomolecular Medicine in New York City. In the lab of Dr. Deborah Yelon, her research focused on studying 
                      the genetics and cell biology of cardiovascular development and disease. During her doctoral studies, she was awarded a Christine 
                      Mirzayan Science and Technology Policy Fellowship at the National Academies in Washington, D.C.
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">HA</span>
                    </div>
                  </div>
                </div>

                {/* Therese Quinlan */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">TQ</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Therese Quinlan</h3>
                    <p className="text-lg font-semibold text-primary mb-6">Chief Development Officer</p>
                    <blockquote className="text-lg text-gray-600 italic border-l-4 border-primary pl-6">
                      "I joined Canary Foundation to match my deep interest and training in high-impact philanthropy with an organization positioned to create a leap in science and technology to create early detection tests to better the lives for all people with cancer."
                      <footer className="text-base text-gray-500 mt-4 not-italic">— Therese Quinlan</footer>
                    </blockquote>
                  </div>
                </div>

                {/* Renata Barnes */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Renata Barnes</h3>
                    <p className="text-lg font-semibold text-primary mb-6">Donor and Development Services Manager</p>
                    <blockquote className="text-lg text-gray-600 italic border-l-4 border-primary pl-6 mb-6">
                      "I joined the Canary Foundation because I believe that the idea of early detection is the logical approach to solving the problem of cancer that touches all of us. 
                      I consider it a wonderful opportunity to advance the goals of the foundation by providing highly personalized data service to our staff and supporters."
                      <footer className="text-base text-gray-500 mt-4 not-italic">— Renata Barnes</footer>
                    </blockquote>
                    <p className="text-gray-600 leading-relaxed">
                      At Canary Foundation, Renata uses her extensive experience developing streamlined systems to ensure that the Foundation works smarter and better to satisfy the needs of our community members.
                      Her work at Canary primarily involves tasks such as database and systems management, she also supports and organizes registration for Canary events, where she enjoys sharing a glass of wine with the amazing people who support the mission of Canary Foundation. Renata attended the University of Utah.
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">RB</span>
                    </div>
                  </div>
                </div>

                {/* Candy Gularte */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">CG</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Candy Gularte</h3>
                    <p className="text-lg font-semibold text-primary mb-6">Finance and Administrative Manager</p>
                    <blockquote className="text-lg text-gray-600 italic border-l-4 border-primary pl-6 mb-6">
                      "The Mission of Canary is close to my heart after having lost my Dad to lung cancer at an early age.
                      In my role, I am responsible for ensuring we have effective financial and operational processes in place to sustain the momentum and important work we do with our partners."
                      <footer className="text-base text-gray-500 mt-4 not-italic">— Candy Gularte</footer>
                    </blockquote>
                    <p className="text-gray-600 leading-relaxed">
                      Candace brings a strong background of financial and operational excellence to her work at Canary. She is responsible for all aspects of financial, operational, and administrative work. She works closely with staff to enable proper receipt and disbursement of funds and other key operational focuses.
                    </p>
                  </div>
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