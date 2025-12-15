import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, HeartHandshake, Landmark, PiggyBank, Car, Gift, ShieldCheck, Quote } from "lucide-react";
import { trackClick, trackOutboundLink } from "@/lib/analytics";
import { Link } from "wouter";

const DONORBOX_URL = "https://donorbox.org/canary-campaign";
const DONATE_EMAIL = "donate@canaryfoundation.org";

export default function Donate() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Donate | Canary Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Take Action
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                You can contribute to Canary in many ways—make a financial gift, donate appreciated assets, or support us through other giving options.
                Do something now—cancer won’t wait.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                <Button asChild className="bg-primary text-white hover:bg-primary-dark h-12 px-8">
                  <a
                    href={DONORBOX_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackClick("donate_donorbox_primary", "cta");
                      trackOutboundLink(DONORBOX_URL);
                    }}
                  >
                    Donate Online
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-12 px-8">
                  <a href="#other-ways">
                    Other ways to give
                  </a>
                </Button>
              </div>

              <div className="mt-8 text-sm text-gray-600">
                Canary Foundation is a 501(c)(3) nonprofit in the U.S. (Tax ID: 65-1230251).{" "}
                <Link href="/about/financials" className="text-primary hover:text-primary-dark underline underline-offset-4">
                  See financials
                </Link>
                .
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-light border border-gray-200">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary text-white">
                      <Quote className="h-5 w-5" />
                    </div>
                    <div>
                      <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        We, as a global society, continue to invest way too much money, time, energy and effort on the wrong end of the problem.
                        We really need to shift away from late-stage disease to early detection—and that’s where we have the choice, as a society, to make a very big difference.
                      </blockquote>
                      <div className="mt-4 text-sm text-gray-600">
                        <div className="font-semibold text-dark">Dr. Sanjiv (Sam) Gambhir, MD</div>
                        <div>Stanford Chair of Radiology, Director of the Canary Center at Stanford</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Online donation callout */}
        <section className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="bg-white border border-gray-200 lg:col-span-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary text-white">
                        <HeartHandshake className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-2xl font-bold text-dark mb-2">Donate now</h2>
                        <p className="text-gray-600 leading-relaxed">
                          The earlier we find cancer, the better. Your gift supports early detection research and the work needed to bring breakthroughs to patients.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                          <Button asChild className="bg-primary text-white hover:bg-primary-dark">
                            <a
                              href={DONORBOX_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => {
                                trackClick("donate_donorbox_secondary", "cta");
                                trackOutboundLink(DONORBOX_URL);
                              }}
                            >
                              Donate Online
                            </a>
                          </Button>
                          <Button asChild variant="outline">
                            <a href={`mailto:${DONATE_EMAIL}`}>
                              <Mail className="h-4 w-4" />
                              Email about donating
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary text-white">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-dark mb-2">Make your impact go further</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                            Employer matching gifts
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                            Donor-advised funds (DAFs)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                            Gifts of stock or IRA rollovers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Other ways to give */}
        <section id="other-ways" className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Other ways to give</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  In addition to donating online, you can support Canary through the options below. For instructions on any of these giving methods, email{" "}
                  <a href={`mailto:${DONATE_EMAIL}`} className="text-primary hover:text-primary-dark underline underline-offset-4">
                    {DONATE_EMAIL}
                  </a>
                  .
                </p>
              </div>

              <Accordion type="multiple" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <AccordionItem value="founders-fund" className="px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <PiggyBank className="h-5 w-5 text-primary" />
                      <span>Founder’s Fund (unrestricted giving)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="leading-relaxed">
                      The Founder’s Fund is an unrestricted account that supports emerging research and operational needs such as new initiatives,
                      communications, events, and technology investments.
                    </p>
                    <p className="leading-relaxed mt-4">
                      For gifts of $10,000 or more, a portion of the gift may be directed to the Founder’s Fund. If you have questions, email{" "}
                      <a href={`mailto:${DONATE_EMAIL}`} className="text-primary hover:text-primary-dark underline underline-offset-4">
                        {DONATE_EMAIL}
                      </a>
                      .
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="securities" className="px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Landmark className="h-5 w-5 text-primary" />
                      <span>Donate stock, securities, or IRA rollover</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="leading-relaxed">
                      Gifts of appreciated securities can be a tax-efficient way to give:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        You may be able to deduct the full fair market value of the security on the day it is given.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        You may be able to avoid capital gains tax on long-term appreciated assets.
                      </li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      To donate stock, or to make an IRA contribution/rollover, email{" "}
                      <a href={`mailto:${DONATE_EMAIL}`} className="text-primary hover:text-primary-dark underline underline-offset-4">
                        {DONATE_EMAIL}
                      </a>{" "}
                      for instructions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="matching-gifts" className="px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Gift className="h-5 w-5 text-primary" />
                      <span>Matching gifts and donor-advised funds (DAFs)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="leading-relaxed">
                      Many employers offer matching gift programs that can double or even triple your donation.
                      If you give through a donor-advised fund (DAF), you can recommend a grant to Canary Foundation through your DAF provider.
                    </p>
                    <p className="leading-relaxed mt-4">
                      For help with matching gifts or DAF giving, email{" "}
                      <a href={`mailto:${DONATE_EMAIL}`} className="text-primary hover:text-primary-dark underline underline-offset-4">
                        {DONATE_EMAIL}
                      </a>
                      . Tax ID: 65-1230251.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wire" className="px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Landmark className="h-5 w-5 text-primary" />
                      <span>Wire a financial gift</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="leading-relaxed">
                      For wiring instructions, email{" "}
                      <a href={`mailto:${DONATE_EMAIL}`} className="text-primary hover:text-primary-dark underline underline-offset-4">
                        {DONATE_EMAIL}
                      </a>
                      .
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="planned-giving" className="px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      <span>Planned giving through a will or estate</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="leading-relaxed">
                      Your contributions to the Canary Foundation can be set up as planned gifts in your will or estate. To discuss options, email{" "}
                      <a href={`mailto:${DONATE_EMAIL}`} className="text-primary hover:text-primary-dark underline underline-offset-4">
                        {DONATE_EMAIL}
                      </a>
                      .
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="insurance-annuities" className="px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      <span>Insurance annuities and life insurance gifts</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="leading-relaxed">
                      There are a number of ways to include life insurance or annuities in a charitable gift plan. Please contact us for more information at{" "}
                      <a href={`mailto:${DONATE_EMAIL}`} className="text-primary hover:text-primary-dark underline underline-offset-4">
                        {DONATE_EMAIL}
                      </a>
                      .
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mail" className="px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>Mail a check</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="leading-relaxed">
                      Send your check to:
                    </p>
                    <address className="not-italic mt-4 rounded-xl border border-gray-200 bg-light p-4 leading-relaxed">
                      <div className="font-semibold text-dark">Canary Foundation</div>
                      <div>P.O. Box 620134</div>
                      <div>Woodside, CA 94062-9991</div>
                    </address>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vehicle" className="px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Car className="h-5 w-5 text-primary" />
                      <span>Donate a vehicle</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="leading-relaxed">
                      Canary Foundation has partnered with Vehicles For Charity to accept vehicle donations (cars, trucks, boats, motorcycles, and other recreational vehicles),
                      regardless of whether they run or can pass a smog test.
                    </p>
                    <p className="leading-relaxed mt-4">
                      To get started, call <span className="font-semibold text-dark">1-866-628-2277</span> or email{" "}
                      <a href={`mailto:${DONATE_EMAIL}`} className="text-primary hover:text-primary-dark underline underline-offset-4">
                        {DONATE_EMAIL}
                      </a>
                      .
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shop" className="px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Gift className="h-5 w-5 text-primary" />
                      <span>Donate while you shop</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="leading-relaxed">
                      Some shopping programs allow a portion of purchases to support nonprofits. Amazon has discontinued AmazonSmile; if you’d like the current
                      “shop to support” options available for Canary Foundation, email{" "}
                      <a href={`mailto:${DONATE_EMAIL}`} className="text-primary hover:text-primary-dark underline underline-offset-4">
                        {DONATE_EMAIL}
                      </a>
                      .
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-dark mb-1">Questions?</h3>
                    <p className="text-gray-600 leading-relaxed">
                      For donation questions or more information, email{" "}
                      <a href={`mailto:${DONATE_EMAIL}`} className="text-primary hover:text-primary-dark underline underline-offset-4">
                        {DONATE_EMAIL}
                      </a>
                      .
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-2">
                      For donor privacy questions, please contact us at the same email address.
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
