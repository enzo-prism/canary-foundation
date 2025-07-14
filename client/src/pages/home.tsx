import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Heart, Handshake, Sprout, GraduationCap, Stethoscope, Leaf, Users, Droplets, Shield, HandHeart, Users2, Share2, MapPin, Phone, Mail, Clock, Quote } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Home() {
  const { toast } = useToast();
  
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
      <section id="home" className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
                Advancing <span className="text-primary">Early Cancer Detection</span> Through Innovation
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                The Canary Foundation is dedicated to developing breakthrough technologies and biomarkers for early cancer detection, precision treatment, and improving outcomes for patients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-white hover:bg-primary-dark font-semibold">
                  Support Research
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                  Our Programs
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Medical research and cancer detection technology" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
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

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2004, the Canary Foundation is dedicated to advancing early cancer detection through innovative 
              biomarkers, imaging technologies, and precision medicine approaches. We believe that early detection saves lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Stethoscope className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Early Detection Focus</h3>
                <p className="text-gray-600">We develop breakthrough technologies and biomarkers for detecting cancer at its earliest, most treatable stages.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Users className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Collaborative Research</h3>
                <p className="text-gray-600">We foster partnerships with leading institutions and researchers to accelerate discoveries in cancer detection and treatment.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Patient-Centered Impact</h3>
                <p className="text-gray-600">Our research is driven by the goal of improving outcomes and quality of life for patients and their families.</p>
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
            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive research programs target the most challenging cancers through innovative detection methods and precision medicine approaches.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Prostate cancer research" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Prostate Cancer Program</h3>
                <p className="text-gray-600 mb-4">PASS study with 1,100+ participants, PATROL genetic risk cohort, and advanced imaging technologies for early detection.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Ovarian cancer research" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Ovarian Cancer Program</h3>
                <p className="text-gray-600 mb-4">BRCA pre-cancer atlas, fallopian tube precursor studies, and biomarker development for high-grade serous carcinoma.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Pancreatic cancer research" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Pancreatic Cancer Program</h3>
                <p className="text-gray-600 mb-4">Advanced ultrasound imaging, POCUS technology, and biomarker research for early pancreatic cancer detection.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Liquid biopsy research" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Liquid Biopsy Center</h3>
                <p className="text-gray-600 mb-4">Breakthrough research in urine, interstitial fluid, and exosome analysis with microneedle patch technology.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Molecular imaging research" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Molecular Imaging</h3>
                <p className="text-gray-600 mb-4">Cutting-edge imaging technologies including photoacoustic imaging and microbubble contrast agents.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Education and training programs" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Education & Training</h3>
                <p className="text-gray-600 mb-4">NCI R25 CREST program, Phillips Postdoc Fellowship, and cancer research education initiatives.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
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
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="PASS study breakthrough" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
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
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Liquid biopsy advancement" 
                className="rounded-2xl shadow-xl w-full h-auto"
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
                <img 
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Don Listwin Award 2024" 
                  className="w-full h-48 object-cover"
                />
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
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="PATROL study launch" 
                  className="w-full h-48 object-cover"
                />
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
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Remembering Dr. Gambhir" 
                  className="w-full h-48 object-cover"
                />
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
                    <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                      Visit Symposium Site →
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
                    <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                      Apply Now →
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
                <Button className="bg-primary text-white hover:bg-primary-dark">
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
                <Button className="bg-primary text-white hover:bg-primary-dark">
                  Apply Now
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
                <Button className="bg-primary text-white hover:bg-primary-dark">
                  Partner
                </Button>
              </CardContent>
            </Card>
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
