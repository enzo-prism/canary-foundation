import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Heart, Handshake, Sprout, GraduationCap, Stethoscope, Leaf, Users, Droplets, Shield, HandHeart, Users2, Share2, MapPin, Phone, Mail, Clock, Quote, Microscope, Building, Award, Lightbulb, Star, Target, TrendingUp, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import BiomarkerGrid from "@/components/BiomarkerGrid";
import canaryChallengeLogo from "@assets/canary challenge logo big_1752514995292.webp";
import canaryFinishLine from "@assets/Canary Challenge Finish Line_1752514185862.webp";
import canaryVolunteers from "@assets/Canary Challenge Volunteers_1752514185862.webp";
import canaryBooth from "@assets/Canary Challenge Booth_1752514185862.webp";
import canaryBiker from "@assets/Canary Challenge Biker_1752514185863.webp";
import canaryAnimatedVideo from "@assets/canary foundation animated video_1753284730466.mp4";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Home() {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTimelineItem, setSelectedTimelineItem] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  const timelineEvents = [
    { year: 2000, title: "Grace Listwin Misdiagnosed", description: "Don Listwin's mother, Grace Listwin, misdiagnosed with bladder infection", icon: Heart, category: "founding" },
    { year: 2001, title: "Grace Listwin Dies", description: "Grace Listwin dies of late-stage ovarian cancer due to detection of her cancer at a late stage", icon: Heart, category: "founding" },
    { year: 2002, title: "First Biomarker Work", description: "Ovarian cancer biomarker work for Dr. Nicole Urban funded by Listwin Family Foundation at the Fred Hutch Cancer Research Center", icon: Microscope, category: "research" },
    { year: 2003, title: "Center of Excellence Established", description: "Center of Excellence for early cancer detection established by Dr. Lee Hartwell at FHCRC focusing on cancer biomarkers", icon: Building, category: "research" },
    { year: 2004, title: "Canary Foundation Formed", description: "Canary Foundation formed by Don Listwin following his mother's death from late-stage ovarian cancer", icon: Star, category: "founding" },
    { year: 2005, title: "First Scientific Symposium", description: "First annual Scientific Symposium and pancreatic cancer team formed", icon: Users, category: "milestone" },
    { year: 2006, title: "Pancreatic Gene Mutations", description: "Discovery of pancreatic cancer gene mutations, advancing understanding of genetic factors", icon: Microscope, category: "breakthrough" },
    { year: 2008, title: "PASS Study Begins", description: "Prostate Active Surveillance Study (PASS) enrolls first patients for low-risk prostate cancer monitoring", icon: Stethoscope, category: "research" },
    { year: 2008, title: "HE4 Ovarian Biomarker", description: "HE4 biomarker for ovarian cancer validated, improving early detection capabilities", icon: Target, category: "breakthrough" },
    { year: 2009, title: "Canary Center at Stanford", description: "Founded Canary Center at Stanford with Stanford School of Medicine and Stanford Cancer Institute, co-led by Sanjiv Sam Gambhir", icon: Building, category: "milestone" },
    { year: 2009, title: "Magneto-nano Sensor", description: "Magneto-nano sensor developed to detect biomarkers—10,000 times more sensitive than existing tests", icon: Lightbulb, category: "breakthrough" },
    { year: 2009, title: "Don Listwin NCI Board", description: "Don Listwin named to National Cancer Institute Board of Scientific Advisors", icon: Award, category: "milestone" },
    { year: 2011, title: "Gene Fusion Discovery", description: "Gene fusion discovered for ovarian cancer, advancing understanding of tumor biology", icon: Lightbulb, category: "breakthrough" },
    { year: 2011, title: "Microbubble Imaging", description: "Microbubble imaging technology developed for pancreatic cancer detection below 1mm", icon: Microscope, category: "breakthrough" },
    { year: 2012, title: "Spirit of Hope Award", description: "Stanford Cancer Institute awards Spirit of Hope Award recognizing outstanding contributions", icon: Award, category: "milestone" },
    { year: 2013, title: "Stanford Technology Park", description: "Canary Center moves to Stanford Technology and Innovation Park, doubling laboratory space", icon: Building, category: "milestone" },
    { year: 2014, title: "FDA Approves Ultrasound", description: "FDA approves ultrasound using microbubble for prostate cancer trials at Stanford", icon: Award, category: "milestone" },
    { year: 2014, title: "NCI Award for PASS", description: "National Cancer Institute recognizes PASS study with significant funding award", icon: Award, category: "milestone" },
    { year: 2015, title: "Canary Quantum Cloud", description: "Launch of Canary Quantum Cloud for machine learning applications in cancer detection", icon: Lightbulb, category: "breakthrough" },
    { year: 2017, title: "Lung Cancer Biomarker", description: "Discovery of lung cancer biomarker attracts licensing interest from industry partners", icon: Target, category: "breakthrough" },
    { year: 2018, title: "BRCA Foundation Partnership", description: "Collaboration with BRCA Foundation launches ovarian cancer prevention initiative", icon: Handshake, category: "milestone" },
    { year: 2019, title: "ACED Alliance Launch", description: "Launch of ACED Alliance – The International Alliance for Cancer Early Detection", icon: Handshake, category: "milestone" },
    { year: 2020, title: "In Loving Memory", description: "In Loving Memory Sanjiv Sam Gambhir, MD, PhD (November 23, 1962 – July 18, 2020)", icon: Heart, category: "memorial" },
    { year: 2021, title: "PASS Milestone", description: "Milestone enrollment of 2000 men in the Canary Prostate Active Surveillance Study (PASS)", icon: Target, category: "milestone" },
    { year: 2023, title: "PATROL Launch", description: "Launch of PATROL: Prostate Cancer Screening for People at Genetic Risk for Aggressive Disease", icon: Shield, category: "research" },
    { year: 2024, title: "Future Goals", description: "Continuing research in multiomic analysis, point of care ultrasound, and microbubble technology", icon: Target, category: "future" }
  ];
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Apply visibility classes when elements become visible
  useEffect(() => {
    const visibleElementsArray = Array.from(visibleElements);
    visibleElementsArray.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.add('animate-visible');
      }
    });
  }, [visibleElements]);
  
  const heroImages = [
    {
      src: canaryChallengeLogo,
      alt: "Historic Canary Challenge logo from past cycling fundraiser events featuring stylized cyclist figures with yellow canary bird",
      title: "Past Fundraising Events"
    },
    {
      src: canaryFinishLine,
      alt: "Historic photo from Canary Challenge finish line showing volunteers celebrating community involvement in past fundraising events",
      title: "Historic Challenge Events"
    },
    {
      src: canaryVolunteers,
      alt: "Historic photo of Canary Challenge volunteers in signature yellow shirts from past community fundraising events",
      title: "Dedicated Volunteers"
    },
    {
      src: canaryBooth,
      alt: "Historic photo of Canary Foundation booth with volunteers supporting participants during past challenge events",
      title: "Community Support"
    },
    {
      src: canaryBiker,
      alt: "Historic photo of Canary Challenge cyclist in yellow jersey from past fundraising cycling events",
      title: "Community Participants"
    }
  ];
  
  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-light">
      <Header />
      
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
                  className="bg-primary text-white hover:bg-primary-dark font-semibold animate-pulse-glow animate-shimmer px-8 py-4 text-lg"
                  onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                >
                  Support Research
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white font-semibold animate-shimmer px-8 py-4 text-lg"
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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1,100+</div>
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
            <div className="relative overflow-x-auto pb-8">
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
                          className={`bg-white hover:shadow-lg transition-all duration-300 cursor-pointer h-48 ${
                            isSelected ? `ring-2 ${categoryStyle.border} shadow-lg` : ''
                          }`}
                          onClick={() => setSelectedTimelineItem(isSelected ? null : index)}
                        >
                          <CardContent className="p-4 h-full flex flex-col">
                            <div className="flex items-start justify-between mb-2">
                              <div className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${categoryStyle.bg}`}>
                                {event.category}
                              </div>
                            </div>
                            <h3 className="text-sm font-semibold text-dark mb-2 line-clamp-2">{event.title}</h3>
                            <p className={`text-gray-600 text-xs flex-1 transition-all duration-300 ${
                              isSelected ? 'line-clamp-none overflow-auto' : 'line-clamp-4'
                            }`}>
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Mobile scroll hint */}
              <div className="flex justify-center mt-6 md:hidden">
                <div className="flex items-center text-gray-500 text-sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span>Scroll to explore timeline</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-8 md:p-12">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto relative">
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg border-4 border-primary/10">
                  <video
                    src={canaryAnimatedVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{
                      objectFit: 'cover'
                    }}
                  >
                    <source src={canaryAnimatedVideo} type="video/mp4" />
                    Your browser does not support the video element.
                  </video>
                </div>
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
                  className="border-primary text-primary hover:bg-primary hover:text-white font-semibold"
                >
                  Learn More About Our Mission
                  <ExternalLink className="w-4 h-4 ml-2" />
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
                <Link href="/science/science">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0"
                  >
                    Learn More <ExternalLink className="w-3 h-3 ml-1" />
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
                <Link href="/approach/collaborations">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0"
                  >
                    Learn More <ExternalLink className="w-3 h-3 ml-1" />
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
                    Learn More <ExternalLink className="w-3 h-3 ml-1" />
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
                  className="border-primary text-primary hover:bg-primary hover:text-white font-semibold"
                >
                  Explore All Programs
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-yellow-300 via-yellow-100 to-white"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Prostate Cancer Program</h3>
                <p className="text-gray-600 mb-4">Finding potentially lethal prostate cancer early while reducing unnecessary treatments. Two multicenter studies: PATROL (genetic risk cohort) and PASS (active surveillance study).</p>
                <Link href="/science/programs">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0"
                  >
                    Learn More <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-tr from-gray-800 via-gray-600 to-yellow-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Ovarian Cancer Program</h3>
                <p className="text-gray-600">Focused on high-grade serous carcinoma origins in fallopian tubes. BRCA pre-cancer atlas with multi-omics data and STIC registry for early detection breakthroughs.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-bl from-white via-yellow-200 to-gray-900"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Ultrasound Imaging Program</h3>
                <p className="text-gray-600">Point-of-care ultrasound (POCUS) technology for pancreatic cancer screening. Developing contrast-enhanced imaging with microbubbles and molecular imaging solutions.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-r from-yellow-400 via-white to-black"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Liquid Biopsy Center</h3>
                <p className="text-gray-600">Breakthrough research in urine, interstitial fluid, and exosome analysis with microneedle patch technology.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-tl from-gray-900 via-yellow-300 to-gray-100"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Molecular Imaging</h3>
                <p className="text-gray-600">Cutting-edge imaging technologies including photoacoustic imaging and microbubble contrast agents.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-white via-yellow-100 to-gray-800"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Education & Training</h3>
                <p className="text-gray-600">NCI R25 CREST program, Phillips Postdoc Fellowship, and cancer research education initiatives.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-tl from-yellow-400 via-gray-100 to-gray-800"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Cyclotron & Radiochemistry</h3>
                <p className="text-gray-600">Generates clinically approved radiotracers (36+ under FDA) supporting preclinical research and radiation safety education.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-gray-700 via-yellow-200 to-white"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Interventional Radiology</h3>
                <p className="text-gray-600">IRIS center projects including endovascular neuromodulation, stem cell implantation, and pediatric biodegradable stents.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-tr from-white via-yellow-300 to-gray-600"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Lung Cancer Program</h3>
                <p className="text-gray-600">Biomarkers for high-risk never-smokers, national screening trials with MD Anderson, and community outreach programs.</p>
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
                <Link href="/science/centers">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white font-semibold"
                  >
                    Learn About Our Centers
                    <ExternalLink className="w-4 h-4 ml-2" />
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
                  <Link href="/approach/symposium">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary-dark hover:bg-primary/10 font-medium p-0 text-xs"
                    >
                      Learn More <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      className="border-primary text-primary hover:bg-primary hover:text-white font-semibold"
                    >
                      Meet Our Staff
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/about/founder-story">
                    <Button 
                      variant="outline" 
                      className="border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white font-semibold"
                    >
                      Founder's Story
                      <ExternalLink className="w-4 h-4 ml-2" />
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
                  <p className="text-primary font-medium mb-3 text-center">Founder, CEO, Co-Chairman</p>
                  <p className="text-gray-600 text-sm mb-3 italic">
                    "After 30 years in the technology industry, I launched Canary Foundation in 2004. I was motivated by a personal experience with cancer."
                  </p>
                  <p className="text-gray-600 text-sm">
                    Former CEO of Sana Security, Openwave, and #2 executive at Cisco Systems. Serves on NCI Board of Scientific Advisors and multiple company boards.
                  </p>
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
                <Link href="/about/board-of-directors">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white font-semibold"
                  >
                    Meet Full Board of Directors
                    <ExternalLink className="w-4 h-4 ml-2" />
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
                      Chair of Room to Read Emeritus Board after serving 2003-2012. Former Co-Chair of Board of Directors 2005-2008. B.S. in Psychology from St. Lawrence University.
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
            <div className="relative">
              {/* Image Container */}
              <div className="rounded-2xl shadow-xl bg-white overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {heroImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative group">
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="absolute inset-0 w-full h-full object-contain bg-gray-50 transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation buttons - positioned relative to image area */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Previous photo"
                  style={{ top: 'calc(28.125% - 24px)' }}
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Next photo"
                  style={{ top: 'calc(28.125% - 24px)' }}
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
                
                {/* Caption Container Below Image */}
                <div className="bg-white p-6 border-t border-gray-100">
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-dark mb-3">
                      {heroImages[currentSlide]?.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
                      {currentSlide === 0 && "Historic fundraising events like the Canary Challenge brought together our community to support early cancer detection research through cycling and community engagement."}
                      {currentSlide === 1 && "Celebrating the achievements of our dedicated volunteers who made past community events successful and impactful."}
                      {currentSlide === 2 && "Our passionate volunteers in signature yellow shirts have long represented hope and determination in the fight against cancer."}
                      {currentSlide === 3 && "Past event coordination and participant support showcased the organizational excellence and community spirit of our team."}
                      {currentSlide === 4 && "Individual supporters who participated in past fundraising events embody the personal commitment to advancing cancer research."}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced dots indicator */}
              <div className="flex justify-center mt-6 space-x-3">
                {heroImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`group transition-all duration-300 ${
                      index === currentSlide ? 'scale-110' : 'hover:scale-105'
                    }`}
                    aria-label={`View ${image.title}`}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`} />
                    <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {image.title}
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Photo count indicator */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">
                  {currentSlide + 1} of {heroImages.length}
                </span>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Continue the legacy of community support that makes a difference in cancer research
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary text-white hover:bg-primary-dark font-semibold"
                  onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                >
                  Support Our Mission
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white font-semibold"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Involved
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
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-2xl shadow-xl w-full h-80 bg-gradient-to-br from-yellow-300 via-white to-gray-900"></div>
            </div>
            <div>
              <div className="text-primary text-lg font-semibold mb-4">Research Breakthrough</div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">PASS Study Shapes National Guidelines</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The PASS study's findings with over 1,100 participants have directly influenced national screening guidelines 
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
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="md:order-2">
              <div className="rounded-2xl shadow-xl w-full h-80 bg-gradient-to-tl from-gray-900 via-yellow-400 to-white"></div>
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

      {/* News & Blog Section */}
      <section id="news" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Latest News & Updates</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Stay informed about our latest research breakthroughs, awards, and developments in early cancer detection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-tr from-yellow-400 via-yellow-100 to-gray-800"></div>
              </div>
              <CardContent className="p-6">
                <div className="text-primary text-sm font-semibold mb-2">AWARD • 2024</div>
                <h3 className="text-xl font-semibold text-dark mb-3">Don Listwin Award Recognition</h3>
                <p className="text-gray-600 mb-4">The Canary Foundation receives prestigious recognition for advancing early cancer detection research.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-bl from-white via-yellow-300 to-black"></div>
              </div>
              <CardContent className="p-6">
                <div className="text-primary text-sm font-semibold mb-2">RESEARCH • 2023</div>
                <h3 className="text-xl font-semibold text-dark mb-3">PATROL Study Launch</h3>
                <p className="text-gray-600 mb-4">New prospective cohort study focuses on genetic risk factors and biobanking for prostate cancer.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-r from-gray-900 via-yellow-200 to-white"></div>
              </div>
              <CardContent className="p-6">
                <div className="text-primary text-sm font-semibold mb-2">REMEMBRANCE • 2020</div>
                <h3 className="text-xl font-semibold text-dark mb-3">Remembering Sanjiv Sam Gambhir</h3>
                <p className="text-gray-600 mb-4">Honoring the legacy of a pioneering leader in molecular imaging and cancer detection.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Upcoming Events</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join us at conferences, symposiums, and educational events focused on advancing cancer detection research.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark mb-2">Annual Early Detection Conference</h3>
                    <p className="text-gray-600 mb-4">
                      Co-hosted with OHSU and CRUK, featuring the latest advances in cancer detection technologies and research.
                    </p>
                    <div className="text-primary font-semibold">Coming Soon</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark mb-2">Scientific Symposium</h3>
                    <p className="text-gray-600 mb-4">
                      Annual gathering of researchers and clinicians to share latest findings in biomarker development and imaging.
                    </p>
                    <Button 
                      variant="link" 
                      className="text-primary hover:text-primary-dark font-semibold p-0"
                      onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                    >
                      Support Research →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Handshake className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark mb-2">EDx24 Conference</h3>
                    <p className="text-gray-600 mb-4">
                      Focused on addressing disparities in cancer detection and advancing equity in healthcare access.
                    </p>
                    <div className="text-primary font-semibold">Past Event</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark mb-2">Research Training Programs</h3>
                    <p className="text-gray-600 mb-4">
                      NCI R25 CREST summer training program and fellowship opportunities for emerging researchers.
                    </p>
                    <Button 
                      variant="link" 
                      className="text-primary hover:text-primary-dark font-semibold p-0"
                      onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                    >
                      Support Research →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Support Our Research</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join our mission to advance early cancer detection. There are many ways to support our research and make a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <HandHeart className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Fund Research</h3>
                <p className="text-gray-600 mb-6">Your support accelerates breakthrough discoveries in cancer detection and treatment.</p>
                <Button 
                  className="bg-primary text-white hover:bg-primary-dark"
                  onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                >
                  Donate Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Join Our Team</h3>
                <p className="text-gray-600 mb-6">Explore fellowship opportunities and contribute to cutting-edge cancer research.</p>
                <Button 
                  className="bg-primary text-white hover:bg-primary-dark"
                  onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                >
                  Support Research
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Partner With Us</h3>
                <p className="text-gray-600 mb-6">Collaborate with us to advance cancer detection technologies and improve patient outcomes.</p>
                <Button 
                  className="bg-primary text-white hover:bg-primary-dark"
                  onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                >
                  Support Research
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Outreach Section */}
      <section id="outreach" className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Community Outreach</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to addressing health disparities and expanding access to early cancer detection in underserved communities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Users2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Community Partnerships</h3>
                  <p className="text-gray-600 mb-4">
                    Collaborations with Stanford Cancer Institute's Office of Cancer Health Equity and community organizations like Baywell Health in Oakland, 
                    serving the Black community for 50 years with lung cancer screening programs.
                  </p>
                  <div className="text-primary font-medium">Active Partnerships</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Federally Qualified Health Centers</h3>
                  <p className="text-gray-600 mb-4">
                    Expanding access through conversations with FQHCs to broaden screening criteria, including 20 years of smoking vs. 20 pack-years, 
                    and including never-smokers with family history, especially in Asian populations.
                  </p>
                  <div className="text-primary font-medium">Expanding Access</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Innovative Access Solutions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Teal Health Partnership</h4>
                      <p className="text-gray-600 text-sm">
                        At-home self-collect cervical cancer screening with primary HPV testing, overcoming discomfort and access barriers. 
                        Founded by Avnesh Thakor, with Joseph M. DeSimone on Board of Directors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Point-of-Care Ultrasound</h4>
                      <p className="text-gray-600 text-sm">
                        Developing low-cost, accessible POCUS tools for biomarker confirmation (CA-125 for ovarian, CA-19 for pancreatic cancers) 
                        to improve detection in resource-limited settings.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Educational Barriers</h4>
                      <p className="text-gray-600 text-sm">
                        Addressing administrative and regulatory hurdles to preventive surgeries, such as fallopian tube removal during 
                        non-gynecologic procedures to reduce ovarian cancer risk.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <HandHeart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Compassionate Care</h4>
                      <p className="text-gray-600 text-sm">
                        Grant projects supporting innovative, early-stage efforts in compassion, justice, and sustainability 
                        aligned with our cancer-focused mission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financials Section */}
      <section id="financials" className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Financial Transparency</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to transparency and responsible stewardship of every donation. 
                See how your contributions directly support breakthrough cancer research.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Nonprofit Information */}
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                    <Shield className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Nonprofit Status</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>501(c)(3) nonprofit organization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Tax ID: 65-1230251</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Over $75 million raised historically</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Donation Options */}
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                    <HandHeart className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Ways to Give</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <HandHeart className="w-4 h-4 text-primary" />
                      <span>Financial gifts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HandHeart className="w-4 h-4 text-primary" />
                      <span>Stock donations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HandHeart className="w-4 h-4 text-primary" />
                      <span>AmazonSmile contributions</span>
                    </div>
                  </div>
                  <Button 
                    className="bg-primary text-white hover:bg-primary-dark mt-6 w-full"
                    onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
                  >
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
              
              {/* Impact Overview */}
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Research Impact</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span>91% goes to scientific programs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span>Only 12.6¢ cost per $1 raised</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span>Direct impact on cancer detection</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Detailed Financial Performance */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-yellow-400 p-8 text-white">
                <h3 className="font-bold text-3xl mb-3">2020 Financial Performance</h3>
                <p className="text-yellow-50 opacity-90 text-lg">
                  Transparent stewardship of your donations with detailed expense breakdown
                </p>
              </div>
              
              <div className="p-8">
                {/* Chart Section */}
                <div className="mb-12">
                  <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                      <img 
                        src="/financial-chart-2020.webp" 
                        alt="Canary Foundation 2020 Expenses Pie Chart showing 91% Scientific Programs, 6% Fundraising, 3% Admin/Management" 
                        className="w-full h-auto object-contain rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 text-center border border-yellow-200">
                    <div className="text-primary font-black text-4xl lg:text-5xl mb-3">91%</div>
                    <div className="text-gray-800 font-semibold text-lg mb-2">Scientific Programs</div>
                    <div className="text-gray-600 font-medium">$3,621,840</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 text-center border border-gray-200">
                    <div className="text-gray-600 font-black text-4xl lg:text-5xl mb-3">6%</div>
                    <div className="text-gray-800 font-semibold text-lg mb-2">Fundraising</div>
                    <div className="text-gray-600 font-medium">$238,864</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 text-center border border-gray-200">
                    <div className="text-gray-600 font-black text-4xl lg:text-5xl mb-3">3%</div>
                    <div className="text-gray-800 font-semibold text-lg mb-2">Administrative</div>
                    <div className="text-gray-600 font-medium">$103,196</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 text-center border border-yellow-200">
                    <div className="text-primary font-black text-4xl lg:text-5xl mb-3">12.6¢</div>
                    <div className="text-gray-800 font-semibold text-lg mb-2">Cost per $1 raised</div>
                    <div className="text-gray-600 font-medium">$3,001,876 total</div>
                  </div>
                </div>
                
                {/* Summary */}
                <div className="bg-primary bg-opacity-5 rounded-lg p-8 text-center">
                  <div className="text-3xl font-bold text-dark mb-4">Total 2020 Expenses: $3,963,900</div>
                  <p className="text-gray-600 text-xl mb-6">
                    91% of every dollar donated goes directly to cancer research programs
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <h4 className="font-semibold text-dark mb-3">Research Excellence</h4>
                      <p className="text-gray-600 text-sm">
                        Your donations fund cutting-edge research programs including PASS, PATROL, 
                        liquid biopsy development, and breakthrough imaging technologies.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <h4 className="font-semibold text-dark mb-3">Operational Efficiency</h4>
                      <p className="text-gray-600 text-sm">
                        Our low administrative costs ensure maximum impact from every contribution, 
                        with minimal overhead and efficient resource allocation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have questions about our research or want to learn more about supporting early cancer detection? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-dark mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark">Address</div>
                    <div className="text-gray-600">Redwood City, CA<br />United States</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <Phone className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <Mail className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark">Email</div>
                    <div className="text-gray-600">info@canaryfoundation.org</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark">Office Hours</div>
                    <div className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
              

            </div>
            
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-dark">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field} 
                            className="focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-dark">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Enter your email address" 
                            {...field} 
                            className="focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-dark">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter subject" 
                            {...field} 
                            className="focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-dark">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5} 
                            placeholder="Enter your message" 
                            {...field} 
                            className="focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-white hover:bg-primary-dark font-semibold"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
