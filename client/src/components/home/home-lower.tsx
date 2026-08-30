import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Microscope, Shield, HandHeart, TrendingUp, Users, GraduationCap, Users2, MapPin, Stethoscope } from "lucide-react";
import { Link } from "wouter";
import { trackClick } from "@/lib/analytics";
import financialChart2020 from "@assets/Canary Foundation 2020 Expenses_1752517425233.webp";
import type { HomeInteractiveProps } from "./home-types";

export function HomeLower(_props: HomeInteractiveProps) {
  return (
    <>
      {/* News & Blog Section */}
      <section id="news" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Latest News & Updates</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Stay informed about our latest research breakthroughs, awards, and developments in early cancer detection.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex h-full flex-col bg-white transition-shadow duration-300 hover:shadow-xl">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold text-primary">RESEARCH • 2026</div>
                <h3 className="mb-3 text-xl font-semibold text-dark">April Science Meetings</h3>
                <p className="mb-4 flex-1 text-gray-600">Scientists and institutional leaders gathered at Stanford and UC San Diego to advance early detection, imaging, and translational ultrasound.</p>
                <Button asChild variant="link" className="h-auto justify-start p-0 font-semibold text-primary hover:text-primary-dark">
                  <Link href="/blog/april-2026-science-meetings-stanford-ucsd">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex h-full flex-col bg-white transition-shadow duration-300 hover:shadow-xl">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold text-primary">RESEARCH • 2023</div>
                <h3 className="mb-3 text-xl font-semibold text-dark">PATROL Study Launch</h3>
                <p className="mb-4 flex-1 text-gray-600">New prospective cohort study focuses on genetic risk factors and biobanking for prostate cancer.</p>
                <Button asChild variant="link" className="h-auto justify-start p-0 font-semibold text-primary hover:text-primary-dark">
                  <Link href="/science/programs/tumors/prostate">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex h-full flex-col bg-white transition-shadow duration-300 hover:shadow-xl">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold text-primary">REMEMBRANCE • 2020</div>
                <h3 className="mb-3 text-xl font-semibold text-dark">Remembering Sanjiv Sam Gambhir</h3>
                <p className="mb-4 flex-1 text-gray-600">Honoring the legacy of a pioneering leader in molecular imaging and cancer detection.</p>
                <Button asChild variant="link" className="h-auto justify-start p-0 font-semibold text-primary hover:text-primary-dark">
                  <Link href="/about/scientific-leadership">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current ways to follow Canary work */}
      <section id="updates" className="py-16 md:py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Follow Canary's Work</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore published research updates and learn how Canary brings scientists together around early detection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Microscope className="text-dark text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark mb-2">Research Team Updates</h3>
                    <p className="text-gray-600 mb-4">
                      Read public, donor-friendly progress reports from Canary-supported research teams.
                    </p>
                    <Button asChild variant="link" className="text-primary hover:text-primary-dark font-semibold p-0">
                      <Link href="/science/programs/team-updates">View Team Updates →</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-dark text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark mb-2">Early Detection Conference</h3>
                    <p className="text-gray-600 mb-4">
                      Read the latest update from the international Early Detection of Cancer conference.
                    </p>
                    <Button
                      asChild
                      variant="link"
                      className="text-primary hover:text-primary-dark font-semibold p-0"
                    >
                      <Link href="/blog/edx25-conference-portland-early-detection">Read the Conference Update →</Link>
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
                  className="bg-primary text-dark hover:bg-primary-dark"
                  onClick={() => window.open('https://donorbox.org/canary-campaign', '_blank')}
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
                <Button asChild className="bg-primary text-dark hover:bg-primary-dark">
                  <Link
                    href="/donate"
                    onClick={() => trackClick("support_research_join_team", "cta")}
                  >
                    Support Research
                  </Link>
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
                <Button asChild className="bg-primary text-dark hover:bg-primary-dark">
                  <Link
                    href="/donate"
                    onClick={() => trackClick("support_research_partner", "cta")}
                  >
                    Support Research
                  </Link>
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
                    className="bg-primary text-dark hover:bg-primary-dark mt-6 w-full"
                    onClick={() => window.open('https://donorbox.org/canary-campaign', '_blank')}
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
                        src={financialChart2020} 
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

      <section id="contact" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-light p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">Questions for Canary?</h2>
            <p className="mb-7 text-lg leading-relaxed text-gray-600">
              Contact the foundation about research, giving, or general information.
            </p>
            <Button asChild className="bg-primary px-7 font-semibold text-dark hover:bg-primary-dark">
              <Link href="/contact">Contact Canary Foundation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
