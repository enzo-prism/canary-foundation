import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ArrowUpRight, Dna, ScanLine, Waves, ShieldCheck, FileText, Pause, Play, Star, Stethoscope, Users, Shield, Microscope, Target, Lightbulb, GraduationCap, Share2, Handshake } from "lucide-react";
import { Link } from "wouter";
import { trackClick, trackVideo } from "@/lib/analytics";
import canaryAnimatedVideo from "@assets/canary foundation animated video_1753284730466.mp4";
import type { HomeInteractiveProps } from "./home-types";

const FEATURED_REPORT_PATH = "/blog/canary-foundation-program-report-2025";

export function HomeUpper({
  timelineEvents,
  selectedTimelineItem,
  setSelectedTimelineItem,
  timelineRef,
  scrollTimeline,
  prefersReducedMotion,
  videoRef,
  isVideoPlaying,
  setIsVideoPlaying,
  programCards,
}: HomeInteractiveProps) {
  return (
    <>
      <section id="home" className="canary-hero">
        <div className="container mx-auto px-5 md:px-8">
          <div className="canary-hero-grid">
            <div className="canary-hero-copy">
              <p className="eyebrow"><span className="eyebrow-marker" /> Early cancer detection. Since 2004.</p>
              <h1>Finding cancer earlier.<br /><span>Changing what’s possible.</span></h1>
              <p className="canary-hero-description">
                Canary Foundation is a nonprofit that funds research into early cancer detection. We bring scientists together to develop the biomarkers and imaging technologies that move the field forward.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="hero-primary">
                  <Link href="/science/programs" onClick={() => trackClick("explore_programs_hero", "cta")}>Explore our research <ArrowRight aria-hidden="true" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="hero-secondary">
                  <Link href="/donate" onClick={() => trackClick("support_research_hero", "cta")}>Support the science <ArrowUpRight aria-hidden="true" /></Link>
                </Button>
              </div>
              <Link href={FEATURED_REPORT_PATH} className="hero-report-link" onClick={() => trackClick("hero_report_callout", "home_hero")}>
                <FileText aria-hidden="true" className="h-4 w-4 shrink-0" />
                <span>Inside our 2025 program highlights</span><ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
              </Link>
            </div>
            <nav className="research-index" aria-label="Explore cancer research">
              <div className="research-index-heading"><span className="eyebrow">The work ahead</span><span className="research-index-count">01 — 04</span></div>
              <h2>Four cancer programs.<br />One shared purpose.</h2>
              <div className="research-index-links">
                {[
                  { label: "Prostate cancer", detail: "Surveillance & inherited risk", href: "prostate", icon: ShieldCheck },
                  { label: "Ovarian cancer", detail: "Biomarkers & prevention research", href: "ovarian", icon: Dna },
                  { label: "Pancreatic cancer", detail: "Imaging & early detection", href: "pancreatic", icon: Waves },
                  { label: "Lung cancer", detail: "Biomarkers & screening research", href: "lung", icon: ScanLine },
                ].map(({ label, detail, href, icon: Icon }) => (
                  <Link key={href} href={`/science/programs/tumors/${href}`} className="research-index-link">
                    <span className="science-icon"><Icon aria-hidden="true" strokeWidth={1.6} /></span>
                    <span className="min-w-0"><span className="research-index-label">{label}</span><span className="research-index-detail">{detail}</span></span>
                    <ArrowUpRight aria-hidden="true" className="research-index-arrow" />
                  </Link>
                ))}
              </div>
              <Link href="/science/programs/team-updates" className="research-index-footer">Read the latest team reports <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            </nav>
          </div>
          <div className="canary-impact" aria-label="Canary Foundation at a glance">
            <div><strong>2004</strong><span>Our founding year</span></div>
            <div><strong>4</strong><span>Cancer research programs</span></div>
            <div><strong>Shared science</strong><span>Biomarkers, imaging & collaboration</span></div>
            <Link href="/about/overview">Get to know Canary <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Research Programs</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our comprehensive research programs target the most challenging cancers through innovative detection methods and precision medicine approaches.
            </p>

            {/* Learn More About Programs */}
            <div className="text-center">
              <Button asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-dark font-semibold"
                ><Link href="/science/programs">
                  Explore All Programs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link></Button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programCards.map((program) => {
              const Icon = program.icon;
              return (
                <Card key={program.title} className="program-card flex h-full flex-col bg-white">
                  <div className="flex items-center gap-4 px-6 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Icon aria-hidden="true" strokeWidth={1.6} className="h-5 w-5 text-dark" />
                    </div>
                    <h3 className="text-lg font-semibold text-dark">{program.title}</h3>
                  </div>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <p className="mb-4 flex-1 text-gray-600">{program.description}</p>
                    <Button asChild variant="ghost" size="sm" className="h-auto justify-start whitespace-normal p-0 text-left font-medium text-primary hover:bg-transparent hover:text-primary-dark">
                      <Link href={program.href}>
                        Explore {program.title} <ArrowRight aria-hidden="true" className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Canary is focused on the early detection of solid tumors, emphasizing minimally invasive diagnostic and imaging strategies to identify cancer at curable stages.
              Our expanded vision includes precision treatment, extending beyond cancer to neurology, cardiology, and autoimmune conditions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our anchor institution is the Canary Center at Stanford University, with affiliate relationships around the world including Cambridge University and OHSU in Portland.
              We support two specialized teams comprised of disease-specific experts from North America: women's health focused on ovarian cancer early detection,
              and men's program focused on prostate cancer.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our commitment extends to developing low-cost, accessible tools and addressing health disparities in underserved communities through outreach and partnerships.
            </p>

            {/* Learn More About Mission */}
            <div className="text-center">
              <Button asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-dark font-semibold"
                ><Link href="/about/overview">
                  Learn More About Our Mission
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link></Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#fff3c4] rounded-2xl border border-[#f0d887] flex items-center justify-center mb-6">
                  <Stethoscope className="text-dark text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Early Detection Focus</h3>
                <p className="text-gray-600 mb-4">We develop breakthrough technologies and biomarkers for detecting cancer at its earliest, most treatable stages.</p>
                <Button asChild
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0"
                  ><Link href="/science/overview">
                    Explore Early Detection Research <ArrowRight className="w-3 h-3 ml-1" />
                  </Link></Button>
              </CardContent>
            </Card>

            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#fff3c4] rounded-2xl border border-[#f0d887] flex items-center justify-center mb-6">
                  <Users className="text-dark text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Global Collaborations</h3>
                <p className="text-gray-600 mb-4">We foster partnerships with leading institutions worldwide to accelerate discoveries in cancer detection and treatment.</p>
                <Button asChild
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0"
                  ><Link href="/approach/overview">
                    Explore Our Collaborative Approach <ArrowRight className="w-3 h-3 ml-1" />
                  </Link></Button>
              </CardContent>
            </Card>

            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#fff3c4] rounded-2xl border border-[#f0d887] flex items-center justify-center mb-6">
                  <Shield className="text-dark text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Advanced Imaging</h3>
                <p className="text-gray-600 mb-4">Supporting advanced imaging for two decades, including building a new cancer imaging center at UCSD focused on low-cost ultrasound.</p>
                <Button asChild
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0"
                  ><Link href="/science/centers">
                    Explore Our Research Centers <ArrowRight className="w-3 h-3 ml-1" />
                  </Link></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Canary Center at Stanford Section */}
      <section id="canary-center" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Canary Center at Stanford</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Canary Center at Stanford is focused on the detection of cancer and other diseases at their earliest stages when treatment is most effective.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-dark mb-6">Our Approach</h3>
                <p className="text-gray-600 mb-4">
                  Research to discover and implement minimally invasive diagnostic and imaging strategies is complemented by support for innovations in precision treatment.
                </p>
                <p className="text-gray-600 mb-4">
                  Faculty and Affiliates are engaged in a variety of research programs and collaborations throughout the Stanford campus and beyond, testing new categories of biomarkers such as exosomes and glycoproteins.
                </p>
                <p className="text-gray-600 mb-6">
                  The Center supports infrastructure for developing innovative therapies and applies mathematical models to predict patient outcomes.
                </p>

                {/* Learn More About Centers */}
                <Button asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-dark font-semibold"
                  ><Link href="/science/centers">
                    Learn About Our Centers
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link></Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#fff3c4] rounded-2xl border border-[#f0d887] flex items-center justify-center mx-auto mb-4">
                      <Microscope className="w-6 h-6 text-dark" />
                    </div>
                    <h4 className="font-semibold text-dark mb-2">Advanced Biomarkers</h4>
                    <p className="text-sm text-gray-600">Exosomes and glycoproteins research</p>
                  </CardContent>
                </Card>

                <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#fff3c4] rounded-2xl border border-[#f0d887] flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-dark" />
                    </div>
                    <h4 className="font-semibold text-dark mb-2">Precision Medicine</h4>
                    <p className="text-sm text-gray-600">Mathematical models for outcomes</p>
                  </CardContent>
                </Card>

                <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#fff3c4] rounded-2xl border border-[#f0d887] flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-6 h-6 text-dark" />
                    </div>
                    <h4 className="font-semibold text-dark mb-2">Imaging Innovation</h4>
                    <p className="text-sm text-gray-600">Advanced imaging agents</p>
                  </CardContent>
                </Card>

                <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#fff3c4] rounded-2xl border border-[#f0d887] flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-6 h-6 text-dark" />
                    </div>
                    <h4 className="font-semibold text-dark mb-2">Education</h4>
                    <p className="text-sm text-gray-600">Next-generation scientists</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-light rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Global Collaboration</h3>
              <p className="text-gray-600 text-center mb-6">
                The Center collaborates with other Early Detection programs around the world, sharing samples, technologies, and healthcare expertise.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#fff3c4] rounded-2xl border border-[#f0d887] flex items-center justify-center mx-auto mb-4">
                    <Share2 className="w-8 h-8 text-dark" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Sample Sharing</h4>
                  <p className="text-sm text-gray-600">Collaborative research networks</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#fff3c4] rounded-2xl border border-[#f0d887] flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-dark" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Internship Program</h4>
                  <p className="text-sm text-gray-600">Developing multidisciplinary scientists</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#fff3c4] rounded-2xl border border-[#f0d887] flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-dark" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Annual Conference</h4>
                  <p className="text-sm text-gray-600 mb-3">Early Detection of Cancer meeting</p>
                  <Button asChild
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0 text-xs"
                    ><Link href="/blog/edx25-conference-portland-early-detection">
                      Read the EDX25 Conference Report <ArrowRight className="w-3 h-3 ml-1" />
                    </Link></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Interactive Timeline */}
      <section id="timeline" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Journey</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From a personal tragedy to groundbreaking research—explore two decades of advancing early cancer detection.
              </p>
            </div>

            {/* Horizontal Timeline Container */}
            <div className="relative">
              <button
                type="button"
                className="absolute left-0 top-20 z-20 hidden h-10 w-10 -translate-x-1 items-center justify-center rounded-full border border-gray-200 bg-white text-dark shadow-md hover:bg-gray-50 md:inline-flex"
                aria-label="Scroll timeline backward"
                onClick={() => scrollTimeline(-1)}
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="absolute right-0 top-20 z-20 hidden h-10 w-10 translate-x-1 items-center justify-center rounded-full border border-gray-200 bg-white text-dark shadow-md hover:bg-gray-50 md:inline-flex"
                aria-label="Scroll timeline forward"
                onClick={() => scrollTimeline(1)}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <div ref={timelineRef} className="relative overflow-x-auto pb-8 md:px-8">
              {/* Horizontal Timeline Line */}
              <div className="relative min-w-max">
                <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-primary to-gray-200 opacity-30"></div>

                {/* Timeline Items Grid */}
                <div className="flex space-x-8 min-w-max px-4">
                  {timelineEvents.map((event, index) => {
                    const isSelected = selectedTimelineItem === index;
                    const IconComponent = event.icon;

                    const getCategoryStyle = (category: string) => {
                      switch (category) {
                        case "founding": return { bg: "bg-gray-600", text: "text-gray-600", border: "border-gray-600" };
                        case "research": return { bg: "bg-gray-500", text: "text-gray-500", border: "border-gray-500" };
                        case "milestone": return { bg: "bg-primary", text: "text-primary", border: "border-primary" };
                        case "breakthrough": return { bg: "bg-primary", text: "text-primary", border: "border-primary" };
                        case "memorial": return { bg: "bg-gray-400", text: "text-gray-400", border: "border-gray-400" };
                        case "future": return { bg: "bg-gray-700", text: "text-gray-700", border: "border-gray-700" };
                        default: return { bg: "bg-primary", text: "text-primary", border: "border-primary" };
                      }
                    };

                    const categoryStyle = getCategoryStyle(event.category);

                    return (
                      <div
                        key={index}
                        className="flex-shrink-0 relative"
                        style={{ width: '280px' }}
                      >
                        {/* Timeline Dot with Icon */}
                        <div
                          className={`relative mx-auto w-12 h-12 rounded-full border-4 border-white shadow-lg transition-[color,background-color,border-color,transform,box-shadow] duration-300 ${
                            categoryStyle.bg
                          } ${isSelected ? 'scale-110' : 'hover:scale-105'} flex items-center justify-center cursor-pointer z-10`}
                          onClick={() => setSelectedTimelineItem(isSelected ? null : index)}
                        >
                          <IconComponent className="w-5 h-5 text-dark" />
                        </div>

                        {/* Year Label */}
                        <div className={`text-center mt-4 mb-3 text-xl font-bold ${categoryStyle.text}`}>
                          {event.year}
                        </div>

                        {/* Content Card */}
                        <Card
                          className={`min-h-[12rem] cursor-pointer bg-white transition-[color,background-color,border-color,transform,box-shadow] duration-300 hover:shadow-lg ${
                            isSelected ? `shadow-lg ring-2 ${categoryStyle.border}` : ""
                          }`}
                          onClick={() => setSelectedTimelineItem(isSelected ? null : index)}
                        >
                          <CardContent className="flex h-full flex-col p-4">
                            <div className="mb-2 flex items-start justify-between">
                              <div className={`rounded-full px-2 py-1 text-xs font-semibold text-dark ${categoryStyle.bg}`}>
                                {event.category}
                              </div>
                            </div>
                            <h3 className="mb-2 text-sm font-semibold text-dark">{event.title}</h3>
                            <p className="flex-1 text-xs text-gray-600">
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scroll hint */}
              <div className="mt-6 flex justify-center">
                <div className="flex items-center text-sm text-gray-500">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span>Scroll to explore the timeline</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Logo Video Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative rounded-2xl border border-[#e8e5dc] bg-white p-6 md:p-8">
              <div className="relative mx-auto w-40 pb-8 md:w-48">
                <div className="aspect-square overflow-hidden rounded-full border-4 border-primary/10 shadow-lg">
                  <video
                    ref={videoRef}
                    src={canaryAnimatedVideo}
                    preload="none"
                    poster="/favicon.webp"
                    loop
                    muted
                    playsInline
                    aria-label="Animated Canary Foundation logo"
                    className="h-full w-full object-cover"
                    onPlay={() => {
                      setIsVideoPlaying(true);
                      trackVideo("play", "canary_animated_logo");
                    }}
                    onPause={() => {
                      setIsVideoPlaying(false);
                      trackVideo("pause", "canary_animated_logo");
                    }}
                    onEnded={() => trackVideo("complete", "canary_animated_logo")}
                  >
                    <source src={canaryAnimatedVideo} type="video/mp4" />
                    Your browser does not support the video element.
                  </video>
                </div>
                <button
                  type="button"
                  className="absolute -bottom-3 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-dark shadow-md hover:bg-gray-50"
                  aria-label={isVideoPlaying ? "Pause logo animation" : "Play logo animation"}
                  onClick={() => setIsVideoPlaying((isPlaying) => !isPlaying)}
                >
                  {isVideoPlaying ? (
                    <Pause aria-hidden="true" className="h-4 w-4" />
                  ) : (
                    <Play aria-hidden="true" className="h-4 w-4" />
                  )}
                  {isVideoPlaying ? "Pause" : "Play"}
                </button>
              </div>

              <div className="mt-6">
                <p className="text-gray-600 text-sm md:text-base">
                  Advancing early cancer detection through innovative research and collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
