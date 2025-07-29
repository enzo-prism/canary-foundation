import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function BoardDirectors() {
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
                Board of Directors
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our Board of Directors is integral to the success of our team. They represent a distinguished group of leaders who provide strategic decision-making and thoughtful guidance to ensure that our vision stays on track. They provide business, technology and management expertise as well as non-profit acumen.
              </p>
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-16">
                
                {/* Michael Ball */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">MB</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Michael Ball</h3>
                    <p className="text-lg font-semibold text-primary mb-6">CEO, Contextual Genomics</p>
                    <p className="text-base text-gray-500 mb-4">Canary Audit Committee</p>
                  </div>
                </div>

                {/* Kevin Kennedy */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Kevin Kennedy</h3>
                    <p className="text-lg font-semibold text-primary mb-6">President, Senior Managing Director, Blue Ridge Partners</p>
                    <p className="text-base text-gray-500 mb-6">Canary Audit Committee, Chair</p>
                    <blockquote className="text-lg text-gray-600 italic border-l-4 border-primary pl-6 mb-6">
                      "I'm proud to serve as a board member for the Canary Foundation, where I've been able to see firsthand the innovation that the Foundation and Canary Center at Stanford have brought to the field of early cancer detection. Giving back to the communities where we live and do business has always been a priority for my wife and me. We've been involved with the Canary Foundation from the start and are thrilled to grow that relationship."
                      <footer className="text-base text-gray-500 mt-4 not-italic">— Kevin Kennedy</footer>
                    </blockquote>
                    <p className="text-gray-600 leading-relaxed">
                      Over 30 years' experience as an executive leading prominent public and private technology and telecommunications companies. Before joining Blue Ridge Partners, he was the CEO of Avaya, Inc., CEO of JDS Uniphase Corporation, SVP of Cisco Systems, and CEO of Openwave Systems. Currently he is on the boards of KLA-Tencor Corporation (KLAC-Nasdaq) and Digital Realty (DLR-NYSE). He is currently a Senior Managing Director with Blue Ridge Partners, a boutique consultancy focused on top-line growth.
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">KK</span>
                    </div>
                  </div>
                </div>

                {/* Don Listwin */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">DL</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Don Listwin</h3>
                    <p className="text-lg font-semibold text-primary mb-6">Founder and Chairman, Canary Foundation</p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Don Listwin is a 30-year veteran of the technology industry. Currently Don is acting President and CEO of ISchemaView and head of Listwin Ventures; investing in the future. Don has served as CEO of Sana Security, Openwave, and had been the #2 executive at Cisco Systems. Today, in addition to his work at the foundation, he serves on the board of directors of several private and public companies including POET Technologies and Robin Systems.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Don is also deeply involved with other cancer-related organizations. He is on the External Advisory Board for the Center for Cancer Nanotechnology Excellence (CCNE) at Stanford and is a member of the Stanford Advisory Board for the Canary Center for Cancer Early Detection at Stanford. He also serves as a member of The Melanoma Cancer Center at The Moffitt Cancer Center. He was appointed and served on the National Cancer Institute's Board of Scientific Advisors.
                    </p>
                  </div>
                </div>

                {/* Dale Jantzen */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Dale Jantzen</h3>
                    <p className="text-lg font-semibold text-primary mb-6">Board Member</p>
                    <p className="text-gray-600 leading-relaxed">
                      Dale has over 20 years of product management and marketing experience in the telecommunications industry. He most recently served as the President of the San Jose Grand Prix for three years. Dale earned his BSEE at the University of Saskatchewan in 1982. For the next eight years, he served as Marketing Director for Develcon Electronics. Dale then moved on to hold similar positions at Alberta Microelectronics Center and then at Sci-Tec Instruments Ltd.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Throughout his career, Dale has managed large teams of technical product management and marketing professionals, while overseeing multi-million dollar project accounts. Dale possesses a wealth of technical skills and depth of leadership experience.
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">DJ</span>
                    </div>
                  </div>
                </div>

                {/* Hilary Valentine */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">HV</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Hilary Valentine</h3>
                    <p className="text-lg font-semibold text-primary mb-6">Board Member</p>
                    <p className="text-gray-600 leading-relaxed">
                      Hilary Valentine is a partner at Black & White Design and serves on the Board of Directors of the Valentine Family Foundation. She is co-Founder of Belize Kids with the mission of improving lives for children in Belize. She also serves on the Emeritus Board of Breast Cancer Connections. Hilary is the Chair of the Room to Read Emeritus Board after serving on the Room to Read board of directors from 2003 to 2012. She was Co-Chair of the Board of Directors from 2005 to 2008.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Hilary graduated with a B.S. in Psychology from St. Lawrence University.
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