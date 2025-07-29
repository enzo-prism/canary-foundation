import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Collaborations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Canary Collaborations and Partnerships
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                The right collaboration and the right partnership change everything. Recognizing early on that we couldn't do it all alone, we've always cultivated strong relationships with institutions, academia, and industry to bring together a diverse set of stakeholders to take on early cancer detection research.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our foundation partnerships link mutual scientific expertise and entrepreneurial spirit in the hopes of advancing research in the diagnostic arena of early cancer detection. Together, we're creating a world where cancer is diagnosed at its earliest stage to save lives.
              </p>
            </div>
          </div>
        </section>

        {/* Institution Collaborations */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Institution Collaborations</h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                Canary Foundation supports research led by cancer researchers and clinicians located at collaborating research institutions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Major Active Collaborations */}
                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">Fred Hutchinson Cancer Research Center (FHCRC)</h3>
                    <div className="text-sm text-primary font-semibold mb-3">Seattle, Washington</div>
                    <p className="text-gray-600 text-sm mb-3">
                      Canary supports ovary and prostate team research and PASS at FHCRC. For PASS, FHCRC houses the data management and coordinating center and the central biospecimen repository.
                    </p>
                    <div className="text-xs text-gray-500">
                      Past support: lung, ovarian, prostate, and baseline team awards
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">Stanford Cancer Institute / Canary Center at Stanford</h3>
                    <div className="text-sm text-primary font-semibold mb-3">Stanford, California</div>
                    <p className="text-gray-600 text-sm mb-3">
                      The Canary Center at Stanford and research conducted there falls under Stanford Cancer Institute. Early detection is a key component of SCI's mission. Canary supports core resources and faculty.
                    </p>
                    <div className="text-xs text-gray-500">
                      PASS site, lung and pancreatic cancer research support
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">University of California, San Francisco (UCSF)</h3>
                    <div className="text-sm text-primary font-semibold mb-3">San Francisco, California</div>
                    <p className="text-gray-600 text-sm">
                      UCSF is a site for the Canary Prostate cancer Active Surveillance Study (PASS) and the Canary high grade serous cancer (HGSC) initiative for ovarian cancer.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">University of Washington (UW)</h3>
                    <div className="text-sm text-primary font-semibold mb-3">Seattle, Washington</div>
                    <p className="text-gray-600 text-sm">
                      UW is a site for the Canary Prostate cancer Active Surveillance Study (PASS), and Canary has provided support at UW for the ovarian and pancreatic cancer teams.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">University of Pennsylvania</h3>
                    <div className="text-sm text-primary font-semibold mb-3">Philadelphia, Pennsylvania</div>
                    <p className="text-gray-600 text-sm">
                      Penn is a site for the Canary high grade serous cancer (HGSC) initiative for ovarian cancer, and Canary has provided support at Penn for the ovarian cancer team.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">MD Anderson Cancer Center</h3>
                    <div className="text-sm text-primary font-semibold mb-3">Houston, Texas</div>
                    <p className="text-gray-600 text-sm">
                      Supported research for prostate cancer and lung cancer early detection, leading to collaborative study for lung cancer biomarkers to reduce false positive screening and increase early detection rates.
                    </p>
                  </CardContent>
                </Card>

                {/* Additional PASS Study Sites */}
                <Card className="bg-white shadow-lg border-l-4 border-gray-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-3">Additional PASS Study Sites</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>Beth Israel Deaconess Medical Center</strong> - Boston, MA</div>
                      <div><strong>Eastern Virginia Medical School</strong> - Norfolk, VA</div>
                      <div><strong>University of Texas Health Science Center</strong> - San Antonio, TX</div>
                      <div><strong>University of Michigan</strong> - Ann Arbor, MI</div>
                      <div><strong>VA Puget Sound Health Care System</strong> - Seattle, WA</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-gray-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-3">International Collaborations</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>British Columbia Cancer Agency</strong> - Vancouver, BC</div>
                      <div><strong>University of British Columbia</strong> - PASS site and antibody resource management</div>
                      <div><strong>Van Andel Institute</strong> - Grand Rapids, MI (HGSC initiative)</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Government Institution Collaborations */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Government Institution Collaborations</h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                Research collaborations with government agencies allow Canary to share cost savings and the potential to facilitate scientific progress. Going beyond receiving grant support from government agencies, Canary Foundation has worked in partnership with Canadian and U.S. government institutions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg border-l-4 border-blue-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">BC Cancer Agency</h3>
                    <div className="text-sm text-blue-600 font-semibold mb-3">British Columbia, Canada</div>
                    <p className="text-gray-600 text-sm">
                      Canary Foundation set up and supported a facility at the Deeley Research Center in Victoria, British Columbia, to generate reagents to test candidate biomarkers for lung, pancreatic, prostate, and ovarian cancer. Canary Foundation and BCCA now work together to manage the antibody and hybridoma resource created over many years.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-blue-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">Early Detection Research Network of the National Cancer Institute</h3>
                    <div className="text-sm text-blue-600 font-semibold mb-3">Bethesda, Maryland</div>
                    <p className="text-gray-600 text-sm">
                      The Early Detection Research Network (EDRN), an initiative of the National Cancer Institute (NCI), brings together dozens of institutions to help accelerate the translation of biomarker information into clinical applications. EDRN has provided statistical and data management support for the Canary Prostate Cancer Active Surveillance Study, PASS.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Partnerships */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Corporate Partnerships</h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                At Canary, we believe that collaboration drives innovation. We work collaboratively with corporations who are advancing the next-generation of early cancer detection technologies. These partnerships advance knowledge about the potential clinical use of promising diagnostics.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <Card className="bg-white shadow-lg border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Fujirebio</h3>
                    <div className="text-sm text-green-600 font-semibold mb-3">Malvern, Pennsylvania</div>
                    <p className="text-gray-600 text-sm">
                      Fujirebio commercialized the biomarker HE4 that was discovered in conjunction with Canary's Ovarian Cancer team research. HE4 is now cleared in the U.S. as an aid in monitoring recurrence or progressive disease in patients with epithelial ovarian cancer.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">OPKO Health</h3>
                    <div className="text-sm text-green-600 font-semibold mb-3">Miami, Florida</div>
                    <p className="text-gray-600 text-sm">
                      The Canary Prostate cancer team is partnering with OPKO Health to test blood-based biomarkers in the Canary Prostate Active Surveillance Study participants.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Exact Sciences/GHI</h3>
                    <div className="text-sm text-green-600 font-semibold mb-3">Madison, Wisconsin</div>
                    <p className="text-gray-600 text-sm">
                      The Canary prostate cancer team partnered with Exact Sciences (formerly GHI) to test a tissue-based biomarker panel for risk stratification in PASS.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Gen-Probe/Hologic</h3>
                    <div className="text-sm text-green-600 font-semibold mb-3">San Diego, California</div>
                    <p className="text-gray-600 text-sm">
                      The Canary Prostate cancer team partnered with Hologic to test urine-based biomarkers in Canary PASS participants.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Abbott Diagnostics</h3>
                    <div className="text-sm text-green-600 font-semibold mb-3">Santa Clara, California</div>
                    <p className="text-gray-600 text-sm">
                      Canary Foundation worked with Abbott Diagnostics to support testing of blood-based biomarkers in women participating in the Novel Markers Trial.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-2">Bracco</h3>
                    <div className="text-sm text-green-600 font-semibold mb-3">Milan, Italy</div>
                    <p className="text-gray-600 text-sm">
                      Canary Foundation researchers worked in partnership with Bracco to enter contrast enhanced ultrasound techniques into U.S. clinical trials.
                    </p>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

        {/* Foundation Collaborations */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Foundation Collaborations</h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                Beyond our team members receiving independent funding from foundations, Canary Foundation has also partnered with other foundations to achieve specific joint initiatives.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg border-l-4 border-purple-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">The Lustgarten Foundation</h3>
                    <div className="text-sm text-purple-600 font-semibold mb-3">New York</div>
                    <p className="text-gray-600 text-sm">
                      Canary Foundation established a partnership with the Lustgarten Foundation for Pancreatic Cancer Research to develop a joint set of blood-based biomarkers for research and early detection testing. Work to generate tests for 60 pancreatic cancer biomarkers was completed in 2010.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-purple-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">American Cancer Society</h3>
                    <div className="text-sm text-purple-600 font-semibold mb-3">Atlanta, Georgia</div>
                    <p className="text-gray-600 text-sm">
                      In 2005, Canary and the American Cancer Society partnered to provide postdoctoral research fellowships to scientists in the field of early cancer detection. The program continued until 2011.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border-l-4 border-purple-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">Uniting Against Lung Cancer</h3>
                    <div className="text-sm text-purple-600 font-semibold mb-3">New York</div>
                    <p className="text-gray-600 text-sm">
                      In 2010, Canary partnered with Uniting Against Lung Cancer in an initiative to find biomarkers in people who have never smoked.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Impact */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Collaboration Impact</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Through strategic partnerships across institutions, government agencies, corporations, and foundations, Canary Foundation has built a comprehensive ecosystem for early cancer detection research that leverages diverse expertise, resources, and perspectives to maximize impact for patients worldwide.
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">13+</div>
                  <div className="text-gray-600">PASS Study Sites</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-gray-600">Corporate Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-gray-600">Foundation Partnerships</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-gray-600">Government Collaborations</div>
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