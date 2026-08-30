import { useState, useEffect, useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Heart, Handshake, GraduationCap, Stethoscope, Users, Droplets, Shield, Microscope, Building, Award, Lightbulb, Star, Target } from "lucide-react";
import { HomeUpper } from "@/components/home/home-upper";
import { HomeMiddle } from "@/components/home/home-middle";
import { HomeLower } from "@/components/home/home-lower";
import canaryChallengeLogo from "@assets/canary challenge logo big_1752514995292.webp";
import canaryFinishLine from "@assets/Canary Challenge Finish Line_1752514185862.webp";
import canaryVolunteers from "@assets/Canary Challenge Volunteers_1752514185862.webp";
import canaryBooth from "@assets/Canary Challenge Booth_1752514185862.webp";
import canaryBiker from "@assets/Canary Challenge Biker_1752514185863.webp";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [selectedTimelineItem, setSelectedTimelineItem] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const timelineEvents = [
    { year: 2000, title: "Grace Listwin Misdiagnosed", description: "Don Listwin's mother, Grace Listwin, misdiagnosed with bladder infection", icon: Heart, category: "founding" },
    { year: 2001, title: "Grace Listwin Dies", description: "Grace Listwin dies of late-stage ovarian cancer due to detection of her cancer at a late stage", icon: Heart, category: "founding" },
    { year: 2002, title: "First Biomarker Work", description: "Ovarian cancer biomarker work for Dr. Nicole Urban funded by Listwin Family Foundation at the Fred Hutch Cancer Research Center", icon: Microscope, category: "research" },
    { year: 2003, title: "Center of Excellence Established", description: "Center of Excellence for early cancer detection established by Dr. Lee Hartwell at FHCC focusing on cancer biomarkers", icon: Building, category: "research" },
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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setIsCarouselPlaying(false);
        setIsVideoPlaying(false);
        videoRef.current?.pause();
      }
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
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
          setVisibleElements(prev => new Set(Array.from(prev).concat(entry.target.id)));
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
  
  // Auto-advance only while the visitor has left the gallery playing.
  useEffect(() => {
    if (!isCarouselPlaying || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length, isCarouselPlaying, prefersReducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isVideoPlaying || prefersReducedMotion) {
      video.pause();
      return;
    }

    video.play().catch(() => setIsVideoPlaying(false));
  }, [isVideoPlaying, prefersReducedMotion]);
  
  const programCards = [
    {
      title: "Prostate Cancer Program",
      description: "Finding potentially lethal prostate cancer early while reducing unnecessary treatments. Two multicenter studies: PATROL (genetic risk cohort) and PASS (active surveillance study).",
      href: "/science/programs/tumors/prostate",
      icon: Stethoscope,
    },
    {
      title: "Ovarian Cancer Program",
      description: "Focused on high-grade serous carcinoma origins in fallopian tubes. BRCA pre-cancer atlas with multi-omics data and STIC registry for early detection breakthroughs.",
      href: "/science/programs/tumors/ovarian",
      icon: Heart,
    },
    {
      title: "Ultrasound Imaging Program",
      description: "Point-of-care ultrasound (POCUS) technology for pancreatic cancer screening. Developing contrast-enhanced imaging with microbubbles and molecular imaging solutions.",
      href: "/science/centers/stanford/imaging",
      icon: Target,
    },
    {
      title: "Liquid Biopsy Center",
      description: "Breakthrough research in urine, interstitial fluid, and exosome analysis with microneedle patch technology.",
      href: "/science/centers/stanford/biomarkers",
      icon: Droplets,
    },
    {
      title: "Molecular Imaging",
      description: "Cutting-edge imaging technologies including photoacoustic imaging and microbubble contrast agents.",
      href: "/science/centers/stanford/imaging",
      icon: Lightbulb,
    },
    {
      title: "Education & Training",
      description: "NCI R25 CREST program, Phillips Postdoc Fellowship, and cancer research education initiatives.",
      href: "/science/centers/stanford/for-scientists",
      icon: GraduationCap,
    },
    {
      title: "Cyclotron & Radiochemistry",
      description: "Generates clinically approved radiotracers (36+ under FDA) supporting preclinical research and radiation safety education.",
      href: "/science/centers/stanford",
      icon: Microscope,
    },
    {
      title: "Interventional Radiology",
      description: "IRIS center projects including endovascular neuromodulation, stem cell implantation, and pediatric biodegradable stents.",
      href: "/science/centers/stanford",
      icon: Shield,
    },
    {
      title: "Lung Cancer Program",
      description: "Biomarkers for high-risk never-smokers, national screening trials with MD Anderson, and community outreach programs.",
      href: "/science/programs/tumors/lung",
      icon: Users,
    },
  ];

  const nextSlide = () => {
    setIsCarouselPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };
  
  const prevSlide = () => {
    setIsCarouselPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollTimeline = (direction: -1 | 1) => {
    timelineRef.current?.scrollBy({
      left: direction * 304,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const interactiveProps = {
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
    heroImages,
    currentSlide,
    setCurrentSlide,
    nextSlide,
    prevSlide,
    isCarouselPlaying,
    setIsCarouselPlaying,
  };

  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HomeUpper {...interactiveProps} />
        <HomeMiddle {...interactiveProps} />
        <HomeLower {...interactiveProps} />
      </main>
      <Footer />
    </div>
  );
}
