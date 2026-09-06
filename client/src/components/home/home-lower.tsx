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
      <section id="news" className="border-t border-stone-200/70 bg-white py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-dark mb-5 md:text-5xl">Latest News & Updates</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Stay informed about our latest research breakthroughs, awards, and developments in early cancer detection.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group flex h-full flex-col rounded-2xl border-stone-200 bg-white shadow-none transition-colors duration-200 hover:border-stone-400">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold text-stone-600">RESEARCH • 2026</div>
                <h3 className="mb-3 text-xl font-semibold text-dark">April Science Meetings</h3>
                <p className="mb-4 flex-1 text-gray-600">Scientists and institutional leaders gathered at Stanford and UC San Diego to advance early detection, imaging, and translational ultrasound.</p>
                <Button asChild variant="link" className="h-auto justify-start p-0 font-semibold text-dark hover:text-stone-600">
                  <Link href="/blog/april-2026-science-meetings-stanford-ucsd" aria-label="Read more about the April Science Meetings">Read More <ArrowRight aria-hidden="true" strokeWidth={1.7} className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group flex h-full flex-col rounded-2xl border-stone-200 bg-white shadow-none transition-colors duration-200 hover:border-stone-400">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold text-stone-600">RESEARCH • 2023</div>
                <h3 className="mb-3 text-xl font-semibold text-dark">PATROL Study Launch</h3>
                <p className="mb-4 flex-1 text-gray-600">New prospective cohort study focuses on genetic risk factors and biobanking for prostate cancer.</p>
                <Button asChild variant="link" className="h-auto justify-start p-0 font-semibold text-dark hover:text-stone-600">
                  <Link href="/science/programs/tumors/prostate" aria-label="Read more about the PATROL study">Read More <ArrowRight aria-hidden="true" strokeWidth={1.7} className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group flex h-full flex-col rounded-2xl border-stone-200 bg-white shadow-none transition-colors duration-200 hover:border-stone-400">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm font-semibold text-stone-600">REMEMBRANCE • 2020</div>
                <h3 className="mb-3 text-xl font-semibold text-dark">Remembering Sanjiv Sam Gambhir</h3>
                <p className="mb-4 flex-1 text-gray-600">Honoring the legacy of a pioneering leader in molecular imaging and cancer detection.</p>
                <Button asChild variant="link" className="h-auto justify-start p-0 font-semibold text-dark hover:text-stone-600">
                  <Link href="/about/scientific-leadership" aria-label="Read more about Sanjiv Sam Gambhir">Read More <ArrowRight aria-hidden="true" strokeWidth={1.7} className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current ways to follow Canary work */}
      <section id="updates" className="border-t border-stone-200/70 bg-[#f8f7f2] py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-dark mb-5 md:text-5xl">Follow Canary's Work</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore published research updates and learn how Canary brings scientists together around early detection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl border-stone-200 bg-white shadow-none">
              <CardContent className="p-8">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Microscope aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 text-dark" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-dark mb-2">Research Team Updates</h3>
                    <p className="text-gray-600 mb-4">
                      Read public, donor-friendly progress reports from Canary-supported research teams.
                    </p>
                    <Button asChild variant="link" className="text-dark hover:text-stone-600 h-auto whitespace-normal text-left font-semibold p-0">
                      <Link href="/science/programs/team-updates">View Team Updates <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl border-stone-200 bg-white shadow-none">
              <CardContent className="p-8">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 text-dark" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-dark mb-2">Early Detection Conference</h3>
                    <p className="text-gray-600 mb-4">
                      Read the latest update from the international Early Detection of Cancer conference.
                    </p>
                    <Button
                      asChild
                      variant="link"
                      className="text-dark hover:text-stone-600 h-auto whitespace-normal text-left font-semibold p-0"
                    >
                      <Link href="/blog/edx25-conference-portland-early-detection">Read the Conference Update <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="border-t border-stone-200/70 bg-white py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-dark mb-5 md:text-5xl">Support Our Research</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join our mission to advance early cancer detection. There are many ways to support our research and make a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-2xl border-stone-200 bg-white text-center shadow-none">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HandHeart aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 text-dark" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Fund Research</h3>
                <p className="text-gray-600 mb-6">Your support accelerates breakthrough discoveries in cancer detection and treatment.</p>
                <Button asChild className="bg-primary text-dark hover:bg-yellow-300">
                    <a href="https://donorbox.org/canary-campaign" target="_blank" rel="noopener noreferrer">Donate Now <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></a>
                  </Button>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl border-stone-200 bg-white text-center shadow-none">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 text-dark" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Join Our Team</h3>
                <p className="text-gray-600 mb-6">Explore fellowship opportunities and contribute to cutting-edge cancer research.</p>
                <Button asChild className="bg-primary text-dark hover:bg-yellow-300">
                  <Link
                    href="/donate"
                    onClick={() => trackClick("support_research_join_team", "cta")}
                  >
                    Support Research
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="rounded-2xl border-stone-200 bg-white text-center shadow-none">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 text-dark" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">Partner With Us</h3>
                <p className="text-gray-600 mb-6">Collaborate with us to advance cancer detection technologies and improve patient outcomes.</p>
                <Button asChild className="bg-primary text-dark hover:bg-yellow-300">
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
      <section id="outreach" className="border-t border-stone-200/70 bg-[#f8f7f2] py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-dark mb-5 md:text-5xl">Community Outreach</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to addressing health disparities and expanding access to early cancer detection in underserved communities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="rounded-2xl border-stone-200 bg-white shadow-none">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                    <Users2 aria-hidden="true" strokeWidth={1.7} className="w-6 h-6 text-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Community Partnerships</h3>
                  <p className="text-gray-600 mb-4">
                    Collaborations with Stanford Cancer Institute's Office of Cancer Health Equity and community organizations like Baywell Health in Oakland, 
                    serving the Black community for 50 years with lung cancer screening programs.
                  </p>
                  <div className="text-stone-700 font-medium">Active Partnerships</div>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl border-stone-200 bg-white shadow-none">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                    <MapPin aria-hidden="true" strokeWidth={1.7} className="w-6 h-6 text-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">Federally Qualified Health Centers</h3>
                  <p className="text-gray-600 mb-4">
                    Expanding access through conversations with FQHCs to broaden screening criteria, including 20 years of smoking vs. 20 pack-years, 
                    and including never-smokers with family history, especially in Asian populations.
                  </p>
                  <div className="text-stone-700 font-medium">Expanding Access</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-dark mb-6 text-center">Innovative Access Solutions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Shield aria-hidden="true" strokeWidth={1.7} className="w-5 h-5 text-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Teal Health Partnership</h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        At-home self-collect cervical cancer screening with primary HPV testing, overcoming discomfort and access barriers. 
                        Founded by Avnesh Thakor, with Joseph M. DeSimone on Board of Directors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Stethoscope aria-hidden="true" strokeWidth={1.7} className="w-5 h-5 text-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Point-of-Care Ultrasound</h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        Developing low-cost, accessible POCUS tools for biomarker confirmation (CA-125 for ovarian, CA-19 for pancreatic cancers) 
                        to improve detection in resource-limited settings.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap aria-hidden="true" strokeWidth={1.7} className="w-5 h-5 text-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Educational Barriers</h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        Addressing administrative and regulatory hurdles to preventive surgeries, such as fallopian tube removal during 
                        non-gynecologic procedures to reduce ovarian cancer risk.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <HandHeart aria-hidden="true" strokeWidth={1.7} className="w-5 h-5 text-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-2">Compassionate Care</h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
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
      <section id="financials" className="border-t border-stone-200/70 bg-[#f8f7f2] py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-dark mb-5 md:text-5xl">Financial Transparency</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to transparency and responsible stewardship of every donation. 
                See how your contributions directly support breakthrough cancer research.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Nonprofit Information */}
              <Card className="rounded-2xl border-stone-200 bg-white shadow-none">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                    <Shield aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 text-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Nonprofit Status</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Shield aria-hidden="true" strokeWidth={1.7} className="w-4 h-4 flex-none text-stone-500" />
                      <span>501(c)(3) nonprofit organization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield aria-hidden="true" strokeWidth={1.7} className="w-4 h-4 flex-none text-stone-500" />
                      <span>Tax ID: 65-1230251</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield aria-hidden="true" strokeWidth={1.7} className="w-4 h-4 flex-none text-stone-500" />
                      <span>Over $75 million raised historically</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Donation Options */}
              <Card className="rounded-2xl border-stone-200 bg-white shadow-none">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                    <HandHeart aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 text-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Ways to Give</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <HandHeart aria-hidden="true" strokeWidth={1.7} className="w-4 h-4 flex-none text-stone-500" />
                      <span>Financial gifts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HandHeart aria-hidden="true" strokeWidth={1.7} className="w-4 h-4 flex-none text-stone-500" />
                      <span>Stock donations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HandHeart aria-hidden="true" strokeWidth={1.7} className="w-4 h-4 flex-none text-stone-500" />
                      <span>AmazonSmile contributions</span>
                    </div>
                  </div>
                  <Button asChild className="bg-primary text-dark hover:bg-yellow-300 mt-6 w-full">
                    <a href="https://donorbox.org/canary-campaign" target="_blank" rel="noopener noreferrer">Donate Now <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></a>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Impact Overview */}
              <Card className="rounded-2xl border-stone-200 bg-white shadow-none">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp aria-hidden="true" strokeWidth={1.7} className="h-6 w-6 text-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-4">Research Impact</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <TrendingUp aria-hidden="true" strokeWidth={1.7} className="w-4 h-4 flex-none text-stone-500" />
                      <span>91% of 2020 expenses supported scientific programs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp aria-hidden="true" strokeWidth={1.7} className="w-4 h-4 flex-none text-stone-500" />
                      <span>2020 cost per $1 raised: 12.6¢</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp aria-hidden="true" strokeWidth={1.7} className="w-4 h-4 flex-none text-stone-500" />
                      <span>Direct impact on cancer detection</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Detailed Financial Performance */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
              <div className="bg-[#252923] p-6 text-white sm:p-8">
                <h3 className="font-bold text-3xl mb-3">2020 Financial Performance</h3>
                <p className="text-stone-200 text-lg">
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
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={686}
                        alt="Canary Foundation 2020 Expenses Pie Chart showing 91% Scientific Programs, 6% Fundraising, 3% Admin/Management" 
                        className="w-full h-auto object-contain rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-[#f8f4df] rounded-2xl p-6 text-center border border-yellow-200">
                    <div className="text-dark font-semibold tracking-tight text-4xl lg:text-5xl mb-3">91%</div>
                    <div className="text-gray-800 font-semibold text-lg mb-2">Scientific Programs</div>
                    <div className="text-gray-600 font-medium">$3,621,840</div>
                  </div>
                  
                  <div className="bg-stone-50 rounded-2xl p-6 text-center border border-gray-200">
                    <div className="text-dark font-semibold tracking-tight text-4xl lg:text-5xl mb-3">6%</div>
                    <div className="text-gray-800 font-semibold text-lg mb-2">Fundraising</div>
                    <div className="text-gray-600 font-medium">$238,864</div>
                  </div>
                  
                  <div className="bg-stone-50 rounded-2xl p-6 text-center border border-gray-200">
                    <div className="text-dark font-semibold tracking-tight text-4xl lg:text-5xl mb-3">3%</div>
                    <div className="text-gray-800 font-semibold text-lg mb-2">Administrative</div>
                    <div className="text-gray-600 font-medium">$103,196</div>
                  </div>
                  
                  <div className="bg-[#f8f4df] rounded-2xl p-6 text-center border border-yellow-200">
                    <div className="text-dark font-semibold tracking-tight text-4xl lg:text-5xl mb-3">12.6¢</div>
                    <div className="text-gray-800 font-semibold text-lg mb-2">Cost per $1 raised</div>
                    <div className="text-gray-600 font-medium">$3,001,876 total</div>
                  </div>
                </div>
                
                {/* Summary */}
                <div className="bg-[#f8f7f2] rounded-2xl p-6 sm:p-8 text-center">
                  <div className="text-3xl font-bold text-dark mb-4">Total 2020 Expenses: $3,963,900</div>
                  <p className="text-gray-600 text-xl mb-6">
                    In 2020, 91% of total expenses supported scientific programs
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <h4 className="font-semibold text-dark mb-3">Research Excellence</h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        Your donations fund cutting-edge research programs including PASS, PATROL, 
                        liquid biopsy development, and breakthrough imaging technologies.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <h4 className="font-semibold text-dark mb-3">Operational Efficiency</h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
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

      <section id="contact" className="bg-white py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-5 sm:px-8">
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
