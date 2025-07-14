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
                Empowering Communities for <span className="text-primary">Lasting Change</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                The Canary Foundation works tirelessly to create sustainable solutions that transform lives and build stronger communities worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-white hover:bg-primary-dark font-semibold">
                  Support Our Mission
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Community volunteers working together" 
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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">250+</div>
              <div className="text-white/90">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-white/90">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">180</div>
              <div className="text-white/90">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15</div>
              <div className="text-white/90">Years of Service</div>
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
              We believe that every community has the potential to thrive. Our mission is to provide sustainable resources, 
              education, and support that empowers communities to create lasting positive change from within.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Compassionate Care</h3>
                <p className="text-gray-600">We approach every initiative with empathy and understanding, ensuring our support addresses real community needs.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Handshake className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Collaborative Partnership</h3>
                <p className="text-gray-600">We work alongside communities, not for them, fostering partnerships that respect local knowledge and culture.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Sprout className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Sustainable Growth</h3>
                <p className="text-gray-600">Our programs are designed to create long-term impact, building capacity for communities to thrive independently.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Programs</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We focus on key areas that create the most significant impact for communities worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Educational program" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Education & Literacy</h3>
                <p className="text-gray-600 mb-4">Providing access to quality education and literacy programs that unlock potential and create opportunities.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584432743501-7d5c27a39189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Healthcare program" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Healthcare Access</h3>
                <p className="text-gray-600 mb-4">Ensuring essential healthcare services reach underserved communities through mobile clinics and training programs.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Sustainable development program" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Sustainable Development</h3>
                <p className="text-gray-600 mb-4">Promoting environmentally friendly practices and renewable energy solutions for sustainable community growth.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Economic empowerment program" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Economic Empowerment</h3>
                <p className="text-gray-600 mb-4">Supporting entrepreneurship and job creation through microfinance and business training programs.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Water and sanitation program" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Water & Sanitation</h3>
                <p className="text-gray-600 mb-4">Providing clean water access and sanitation infrastructure to improve health and quality of life.</p>
                <Button variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Emergency response program" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">Emergency Response</h3>
                <p className="text-gray-600 mb-4">Rapid response and recovery support for communities affected by natural disasters and crises.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Stories of Impact</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Real stories from the communities we serve showcase the transformative power of collective action.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Maria's success story" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <div className="text-primary text-lg font-semibold mb-4">Success Story</div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">Maria's Agricultural Revolution</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Before the Canary Foundation's sustainable farming program, my family struggled to grow enough food. 
                Now, with new techniques and solar-powered irrigation, we not only feed our family but sell surplus 
                at the local market. My children can now attend school instead of working in the fields."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Quote className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-dark">Maria Santos</div>
                  <div className="text-gray-600 text-sm">Guatemala</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Get Involved</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join our mission to create positive change. There are many ways to support our work and make a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <HandHeart className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Donate</h3>
                <p className="text-gray-600 mb-6">Your financial support helps us expand our programs and reach more communities in need.</p>
                <Button className="bg-primary text-white hover:bg-primary-dark">
                  Donate Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users2 className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6">Join our team of dedicated volunteers and contribute your skills to meaningful projects.</p>
                <Button className="bg-primary text-white hover:bg-primary-dark">
                  Volunteer
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Share2 className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Spread the Word</h3>
                <p className="text-gray-600 mb-6">Help us raise awareness by sharing our mission with your network and community.</p>
                <Button className="bg-primary text-white hover:bg-primary-dark">
                  Share
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
              Ready to make a difference? Get in touch with our team to learn more about our programs and how you can help.
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
                    <div className="text-gray-600">123 Foundation Street<br />Hope City, HC 12345</div>
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
