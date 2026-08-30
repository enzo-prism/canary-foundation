import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Pause, Play, GraduationCap, Droplets, ArrowRight, Star, Users, Heart, Microscope, HandHeart, Users2, Shield, TrendingUp, Award, Stethoscope, Target } from "lucide-react";
import { Link } from "wouter";
import { trackClick } from "@/lib/analytics";
import { DON_LISTWIN_TITLE } from "@/data/leadership";
import canaryFinishLine from "@assets/Canary Challenge Finish Line_1752514185862.webp";
import canaryVolunteers from "@assets/Canary Challenge Volunteers_1752514185862.webp";
import type { HomeInteractiveProps } from "./home-types";

export function HomeMiddle({
  heroImages,
  currentSlide,
  setCurrentSlide,
  nextSlide,
  prevSlide,
  isCarouselPlaying,
  setIsCarouselPlaying,
}: HomeInteractiveProps) {
  return (
    <>
      {/* Leadership Section */}
      <section id="leadership" className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll" id="leadership-header">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 animate-slideUp">Leadership Team</h2>
              <p className="text-lg text-gray-600 leading-relaxed animate-fadeIn animate-stagger-1 mb-8">
                Our multidisciplinary team brings together world-class researchers, clinicians, and innovators dedicated to advancing early cancer detection.
              </p>
              
              {/* Learn More About Leadership */}
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/about/staff">
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-dark font-semibold"
                    >
                      Meet Our Staff
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/about/founders-story">
                    <Button 
                      variant="outline" 
                      className="border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white font-semibold"
                    >
                      Founder & Oral History
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white animate-card-hover animate-on-scroll animate-stagger-1" id="leadership-card-1">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                    <Star className="w-10 h-10 text-white animate-icon-spin" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-2 text-center">Don Listwin</h3>
                  <p className="text-primary font-medium mb-3 text-center">{DON_LISTWIN_TITLE}</p>
                  <p className="text-gray-600 text-sm mb-3 italic">
                    "After 30 years in the technology industry, I launched Canary Foundation in 2004. I was motivated by a personal experience with cancer."
                  </p>
                  <p className="text-gray-600 text-sm">
                    Former CEO of Sana Security, Openwave, and #2 executive at Cisco Systems. Serves on NCI Board of Scientific Advisors and multiple company boards.
                  </p>
                  <div className="mt-4 text-center">
                    <Link href="/about/founders-story">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                        Founder & Oral History
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white animate-card-hover animate-on-scroll animate-stagger-2" id="leadership-card-2">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                    <Users className="w-10 h-10 text-white animate-icon-spin" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-2 text-center">Joseph M. DeSimone, PhD</h3>
                  <p className="text-primary font-medium mb-3 text-center">Current Director</p>
                  <p className="text-gray-600 text-sm">
                    Departments of Radiology, Chemical Engineering, Materials Science, Chemistry, and Business. 
                    Leading innovative research and strategic direction at Stanford.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white animate-card-hover animate-on-scroll animate-stagger-3" id="leadership-card-3">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-2 text-center">Sanjiv Sam Gambhir</h3>
                  <p className="text-gray-600 font-medium mb-3 text-center">Co-Founder (1962-2020)</p>
                  <p className="text-gray-600 text-sm">
                    Pioneer in early detection strategies, co-led Canary Center at Stanford. His legacy continues to inspire our mission.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Core Staff Section */}
            <div className="bg-white rounded-lg p-8 mb-16 animate-on-scroll" id="core-staff">
              <h3 className="text-2xl font-semibold text-dark mb-8 text-center animate-slideUp">Core Staff</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gray-50 animate-card-hover animate-on-scroll animate-stagger-1" id="staff-card-1">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 animate-float">
                      <Microscope className="w-8 h-8 text-white animate-icon-spin" />
                    </div>
                    <h4 className="text-lg font-semibold text-dark mb-2">Heidi Auman</h4>
                    <p className="text-primary font-medium mb-3">Scientific Program Manager</p>
                    <p className="text-gray-600 text-sm mb-3 italic">
                      "I want to help the Canary Foundation succeed at the challenge of aligning different disciplines toward the common goal of early cancer detection."
                    </p>
                    <p className="text-gray-600 text-sm">
                      Former Postdoctoral Research Fellow at NYU School of Medicine. Manages strategic plans, group connectivity, and progress tracking.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-50 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <HandHeart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-dark mb-2">Therese Quinlan</h4>
                    <p className="text-primary font-medium mb-3">Chief Development Officer</p>
                    <p className="text-gray-600 text-sm mb-3 italic">
                      "I joined Canary Foundation to match my deep interest and training in high-impact philanthropy with an organization positioned to create a leap in science and technology."
                    </p>
                    <p className="text-gray-600 text-sm">
                      Manages major gift programs and transformational giving efforts. Mills College graduate with extensive philanthropic experience.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-50 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Users2 className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-dark mb-2">Renata Barnes</h4>
                    <p className="text-primary font-medium mb-3">Donor and Development Services Manager</p>
                    <p className="text-gray-600 text-sm mb-3 italic">
                      "I joined the Canary Foundation because I believe that the idea of early detection is the logical approach to solving the problem of cancer that touches all of us."
                    </p>
                    <p className="text-gray-600 text-sm">
                      University of Utah graduate specializing in database systems, event management, and donor relations.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-50 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-dark mb-2">Candy Gularte</h4>
                    <p className="text-primary font-medium mb-3">Finance and Administrative Manager</p>
                    <p className="text-gray-600 text-sm mb-3 italic">
                      "The Mission of Canary is close to my heart after having lost my Dad to lung cancer at an early age."
                    </p>
                    <p className="text-gray-600 text-sm">
                      Ensures effective financial and operational processes. Responsible for fund management and key operational functions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Board of Directors Section */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 mb-16">
              <h3 className="text-2xl font-semibold text-dark mb-4 text-center">Board of Directors</h3>
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                Our Board of Directors is integral to the success of our team. They represent a distinguished group of leaders who provide strategic decision-making and thoughtful guidance to ensure that our vision stays on track.
              </p>
              
              {/* Learn More About Board */}
              <div className="text-center mb-8">
                <Link href="/about/board-directors">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-dark font-semibold"
                  >
                    Meet Full Board of Directors
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-dark mb-2">Michael Ball</h4>
                    <p className="text-primary font-medium mb-3">CEO, Contextual Genomics</p>
                    <p className="text-gray-600 text-sm mb-3 font-medium">Canary Audit Committee</p>
                    <p className="text-gray-600 text-sm mb-3">
                      Accomplished B2B software executive with 25+ years international experience. Former CEO of GenoLogics, leading LIMS provider for life sciences organizations.
                    </p>
                    <p className="text-gray-600 text-sm">
                      <strong>Specialties:</strong> Healthcare, Genomics, B2B Software, SaaS, Life Sciences, Precision Medicine
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-dark mb-2">Kevin Kennedy</h4>
                    <p className="text-primary font-medium mb-3">President, Senior Managing Director, Blue Ridge Partners</p>
                    <p className="text-gray-600 text-sm mb-3 font-medium">Canary Audit Committee, Chair</p>
                    <p className="text-gray-600 text-sm mb-3 italic">
                      "I'm proud to serve as a board member for the Canary Foundation, where I've been able to see firsthand the innovation that the Foundation and Canary Center at Stanford have brought to the field of early cancer detection."
                    </p>
                    <p className="text-gray-600 text-sm">
                      30+ years executive experience. Former CEO of Avaya, JDS Uniphase, SVP of Cisco Systems. Currently on boards of KLA-Tencor and Digital Realty.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-dark mb-2">Dale Jantzen</h4>
                    <p className="text-primary font-medium mb-3">Board Member</p>
                    <p className="text-gray-600 text-sm mb-3">
                      20+ years product management and marketing experience in telecommunications. Former President of San Jose Grand Prix. BSEE from University of Saskatchewan.
                    </p>
                    <p className="text-gray-600 text-sm">
                      Former Marketing Director at Develcon Electronics, Alberta Microelectronics Center, and Sci-Tec Instruments. Extensive experience managing large technical teams and multi-million dollar projects.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-dark mb-2">Hilary Valentine</h4>
                    <p className="text-primary font-medium mb-3">Board Member</p>
                    <p className="text-gray-600 text-sm mb-3">
                      Partner at Black & White Design. Board of Directors of Valentine Family Foundation. Co-Founder of Belize Kids improving lives for children in Belize.
                    </p>
                    <p className="text-gray-600 text-sm">
                      Chair of Room to Read Emeritus Board after serving 2003-2012. Helped lead the Board of Directors from 2005 to 2008. B.S. in Psychology from St. Lawrence University.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Scientific Advisory Board</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-dark mb-1">Zhenan Bao</h4>
                  <p className="text-sm text-gray-600">Chemical Engineering</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-dark mb-1">James Brooks</h4>
                  <p className="text-sm text-gray-600">Medicine, Oncology</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-dark mb-1">Sylvia Plevritis</h4>
                  <p className="text-sm text-gray-600">Biomedical Data Science</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-dark mb-1">Stephen Quake</h4>
                  <p className="text-sm text-gray-600">Stanford Radiology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Photos of Canary Foundation Supporters */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Community Legacy</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Celebrating the dedicated supporters and volunteers who have made breakthrough cancer research possible through years of community engagement and philanthropy.
              </p>
            </div>
            
            {/* Interactive Photo Gallery */}
            <div
              className="relative"
              role="region"
              aria-roledescription="carousel"
              aria-label="Canary Foundation community history"
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="relative">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {heroImages.map((image, index) => (
                      <div
                        key={image.title}
                        className="w-full flex-shrink-0"
                        aria-hidden={index !== currentSlide}
                      >
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="absolute inset-0 h-full w-full bg-gray-50 object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 p-3 shadow-lg transition hover:bg-white sm:left-4"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 p-3 shadow-lg transition hover:bg-white sm:right-4"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
                <div
                  className="border-t border-gray-100 bg-white p-6"
                  aria-live={isCarouselPlaying ? "off" : "polite"}
                  aria-atomic="true"
                >
                  <div className="text-center">
                    <h3 className="mb-3 text-xl font-bold text-dark md:text-2xl">
                      {heroImages[currentSlide]?.title}
                    </h3>
                    <p className="mx-auto max-w-4xl text-sm leading-relaxed text-gray-600 md:text-base">
                      {currentSlide === 0 && "Historic fundraising events like the Canary Challenge brought together our community to support early cancer detection research through cycling and community engagement."}
                      {currentSlide === 1 && "Celebrating the achievements of our dedicated volunteers who made past community events successful and impactful."}
                      {currentSlide === 2 && "Our passionate volunteers in signature yellow shirts have long represented hope and determination in the fight against cancer."}
                      {currentSlide === 3 && "Past event coordination and participant support showcased the organizational excellence and community spirit of our team."}
                      {currentSlide === 4 && "Individual supporters who participated in past fundraising events embody the personal commitment to advancing cancer research."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-2">
                {heroImages.map((image, index) => (
                  <button
                    key={image.title}
                    onClick={() => {
                      setIsCarouselPlaying(false);
                      setCurrentSlide(index);
                    }}
                    className={`h-3 w-3 rounded-full transition ${
                      index === currentSlide ? "scale-125 bg-primary" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`View ${image.title}`}
                    aria-current={index === currentSlide}
                  />
                ))}
              </div>
              
              {/* Photo count indicator */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">
                  {currentSlide + 1} of {heroImages.length}
                </span>
                <button
                  type="button"
                  className="ml-4 inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-semibold text-primary hover:bg-primary/10"
                  aria-label={isCarouselPlaying ? "Pause photo gallery" : "Play photo gallery"}
                  onClick={() => setIsCarouselPlaying((isPlaying) => !isPlaying)}
                >
                  {isCarouselPlaying ? (
                    <Pause aria-hidden="true" className="h-4 w-4" />
                  ) : (
                    <Play aria-hidden="true" className="h-4 w-4" />
                  )}
                  {isCarouselPlaying ? "Pause" : "Play"}
                </button>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Continue the legacy of community support that makes a difference in cancer research
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary text-dark hover:bg-primary-dark font-semibold"
                  onClick={() => {
                    trackClick('support_mission_hero', 'cta');
                    window.open('https://donorbox.org/canary-campaign', '_blank');
                  }}
                >
                  Support Our Mission
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-dark font-semibold">
                  <Link href="/contact">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Research Impact</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our breakthrough discoveries are transforming cancer detection and improving patient outcomes worldwide.
            </p>
          </div>
          
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <img
                src={canaryFinishLine}
                alt="Canary Challenge finish line celebrating community support for early detection research"
                className="h-80 w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
            <div>
              <div className="text-primary text-lg font-semibold mb-4">Research Breakthrough</div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">PASS Study Shapes National Guidelines</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The PASS study's findings with over 2,400 participants have directly influenced national screening guidelines 
                and risk assessment protocols. Our research is helping doctors make better decisions about prostate cancer 
                screening, ultimately saving lives through earlier detection."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-dark">Dr. Daniel Lin</div>
                  <div className="text-gray-600 text-sm">PASS Study Lead</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
            <div className="md:order-2">
              <img
                src={canaryVolunteers}
                alt="Canary Challenge volunteers in yellow shirts supporting cancer research fundraising"
                className="h-80 w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
            <div className="md:order-1">
              <div className="text-primary text-lg font-semibold mb-4">Innovation Achievement</div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">Liquid Biopsy Breakthrough</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Our liquid biopsy center has identified 149 proteins in normal urine samples and developed revolutionary 
                microneedle patch technology for interstitial fluid analysis. This non-invasive approach could 
                revolutionize how we detect cancer in its earliest stages."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Droplets className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-dark">Research Team</div>
                  <div className="text-gray-600 text-sm">Liquid Biopsy Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
