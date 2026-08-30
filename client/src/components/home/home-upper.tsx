import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Pause, Play, Star, Stethoscope, Users, Shield, Microscope, Target, Lightbulb, GraduationCap, Share2, Handshake } from "lucide-react";
import { Link } from "wouter";
import BiomarkerGrid from "@/components/BiomarkerGrid";
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
      {/* Hero Section */}
      <section id="home" className="relative bg-white py-12 md:py-20 overflow-hidden">
        <BiomarkerGrid />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-on-scroll" id="hero-content">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-dark mb-8 leading-tight animate-fadeIn">
                Advancing <span className="text-primary animate-text-glow">Early Cancer Detection</span> Through Innovation
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed animate-slideUp animate-stagger-1 max-w-3xl mx-auto">
                The Canary Foundation is dedicated to developing breakthrough technologies and biomarkers for early cancer detection, precision treatment, and improving outcomes for patients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-bounceIn animate-stagger-2">
                <Button
                  asChild
                  className="bg-primary text-dark hover:bg-primary-dark font-semibold animate-pulse-glow animate-shimmer px-8 py-4 text-lg"
                >
                  <Link
                    href="/donate"
                    onClick={() => trackClick("support_research_hero", "cta")}
                  >
                    Support Research
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-dark font-semibold animate-shimmer px-8 py-4 text-lg"
                  onClick={() => {
                    const element = document.getElementById('programs');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Our Programs
                </Button>
              </div>
              <Link
                href={FEATURED_REPORT_PATH}
                className="group mt-6 inline-flex w-full max-w-xl flex-col items-start gap-3 rounded-2xl border border-primary/10 bg-primary/5 px-5 py-4 text-left no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/10 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:flex-row sm:items-center sm:gap-4"
                onClick={() => trackClick("hero_report_callout", "home_hero")}
              >
                <Star className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-hover:rotate-6 group-hover:scale-110" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    2025 Highlights
                  </p>
                  <p className="text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-gray-900">
                    Canary Foundation 2025 Program Highlights: Accelerating Early Detection
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">21+</div>
              <div className="text-white/90">Years of Research</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2,400+</div>
              <div className="text-white/90">PASS Study Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">149</div>
              <div className="text-white/90">Proteins Identified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2004</div>
              <div className="text-white/90">Founded</div>
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
                          className={`relative mx-auto w-12 h-12 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                            categoryStyle.bg
                          } ${isSelected ? 'scale-110' : 'hover:scale-105'} flex items-center justify-center cursor-pointer z-10`}
                          onClick={() => setSelectedTimelineItem(isSelected ? null : index)}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        
                        {/* Year Label */}
                        <div className={`text-center mt-4 mb-3 text-xl font-bold ${categoryStyle.text}`}>
                          {event.year}
                        </div>
                        
                        {/* Content Card */}
                        <Card
                          className={`min-h-[12rem] cursor-pointer bg-white transition-all duration-300 hover:shadow-lg ${
                            isSelected ? `shadow-lg ring-2 ${categoryStyle.border}` : ""
                          }`}
                          onClick={() => setSelectedTimelineItem(isSelected ? null : index)}
                        >
                          <CardContent className="flex h-full flex-col p-4">
                            <div className="mb-2 flex items-start justify-between">
                              <div className={`rounded-full px-2 py-1 text-xs font-semibold text-white ${categoryStyle.bg}`}>
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
            <div className="relative rounded-2xl bg-white p-8 shadow-xl md:p-12">
              <div className="relative mx-auto w-64 pb-8 md:w-80 lg:w-96">
                <div className="aspect-square overflow-hidden rounded-full border-4 border-primary/10 shadow-lg">
                  <video
                    ref={videoRef}
                    src={canaryAnimatedVideo}
                    autoPlay={!prefersReducedMotion}
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
              <Link href="/about/overview">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-dark font-semibold"
                >
                  Learn More About Our Mission
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Stethoscope className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Early Detection Focus</h3>
                <p className="text-gray-600 mb-4">We develop breakthrough technologies and biomarkers for detecting cancer at its earliest, most treatable stages.</p>
                <Link href="/science/overview">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0"
                  >
                    Learn More <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Users className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Global Collaborations</h3>
                <p className="text-gray-600 mb-4">We foster partnerships with leading institutions worldwide to accelerate discoveries in cancer detection and treatment.</p>
                <Link href="/approach/overview">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0"
                  >
                    Learn More <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Shield className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Advanced Imaging</h3>
                <p className="text-gray-600 mb-4">Supporting advanced imaging for two decades, including building a new cancer imaging center at UCSD focused on low-cost ultrasound.</p>
                <Link href="/science/centers">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0"
                  >
                    Learn More <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
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
              <Link href="/science/programs">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-dark font-semibold"
                >
                  Explore All Programs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programCards.map((program) => {
              const Icon = program.icon;
              return (
                <Card key={program.title} className="flex h-full flex-col bg-white transition-shadow duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 border-b border-primary/10 bg-primary/5 px-6 py-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Icon className="h-5 w-5 text-dark" />
                    </div>
                    <h3 className="text-lg font-semibold text-dark">{program.title}</h3>
                  </div>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <p className="mb-4 flex-1 text-gray-600">{program.description}</p>
                    <Button asChild variant="ghost" size="sm" className="h-auto p-0 font-medium text-primary hover:bg-transparent hover:text-primary-dark">
                      <Link href={program.href}>
                        Learn More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
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
                <Link href="/science/centers">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-dark font-semibold"
                  >
                    Learn About Our Centers
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Microscope className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-dark mb-2">Advanced Biomarkers</h4>
                    <p className="text-sm text-gray-600">Exosomes and glycoproteins research</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-dark mb-2">Precision Medicine</h4>
                    <p className="text-sm text-gray-600">Mathematical models for outcomes</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-dark mb-2">Imaging Innovation</h4>
                    <p className="text-sm text-gray-600">Advanced imaging agents</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-6 h-6 text-white" />
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
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Share2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Sample Sharing</h4>
                  <p className="text-sm text-gray-600">Collaborative research networks</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Internship Program</h4>
                  <p className="text-sm text-gray-600">Developing multidisciplinary scientists</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">Annual Conference</h4>
                  <p className="text-sm text-gray-600 mb-3">Early Detection of Cancer meeting</p>
                  <Link href="/blog/edx25-conference-portland-early-detection">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0 text-xs"
                    >
                      Learn More <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
