import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Publications() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
                Publications
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Publishing peer-reviewed articles and other publications in prestigious journals is an important part of the scientific process. It not only helps other researchers keep up to date with developments in their field, but it also helps better direct their own research.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since we know researchers and scientists love facts, here's one on the history of journals: Scientific journals date back to 1665 when the French Journal des sçavans and the English Philosophical Transactions of the Royal Society were first published.
              </p>
            </div>
          </div>
        </section>

        {/* Canary Funded Papers */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">Canary Funded Papers</h2>
              
              {/* Biomarkers */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-8">Biomarkers</h3>
                <div className="space-y-6">
                  <Card className="bg-white shadow-sm border-l-4 border-primary">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Ronald, J.A., et al.</strong> Detecting cancers through tumor-activatable minicircles that lead to a detectable blood biomarker. <em>Proc Natl Acad Sci U S A</em> (2015)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Gregory, M.T., et al.</strong> Targeted single molecule mutation detection with massively parallel sequencing. <em>Nucleic Acids Research</em> (2015)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Yoo, S., et al.</strong> MODMatcher: multi-omics data matcher for integrative genomic analysis. <em>PLoS Computational Biology</em> (2014)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Brooks, J.D.</strong> Translational genomics: The challenge of developing cancer biomarkers. <em>Genome Res.</em> (2012)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Hanash, S.M.</strong> Why have protein biomarkers not reached the clinic? <em>Genome Med.</em> (2011)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Lutz, A.M., et al.</strong> Cancer screening: A mathematical model relating secreted blood biomarker levels to tumor sizes. <em>PLoS Medicine</em> (2008)
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Brain Cancer */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-8">Brain Cancer</h3>
                <Card className="bg-white shadow-sm border-l-4 border-primary">
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Gambhir, S., et al.</strong> PET imaging of tumor glycolysis downstream of hexokinase through noninvasive measurement of pyruvate kinase M2. <em>Science Translational Medicine</em> (2015)
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Breast Cancer */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-8">Breast Cancer</h3>
                <Card className="bg-white shadow-sm border-l-4 border-primary">
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Pitteri, S.J., et al.</strong> Tumor microenvironment-derived proteins dominate the plasma proteome response during breast cancer induction and progression. <em>Cancer Res.</em> (2011)
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Imaging */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-8">Imaging</h3>
                <div className="space-y-6">
                  <Card className="bg-white shadow-sm border-l-4 border-primary">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Deshpande, N., et. al.</strong> Tumor angiogenic marker expression levels during tumor growth: longitudinal assessment with molecularly targeted microbubbles and US imaging. <em>Radiology</em> (2011)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Thakor, A.S., et al.</strong> The fate and toxicity of Raman-active silica-gold nanoparticles in mice. <em>Sci Transl Med.</em> (2011)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Willmann JK, et al.</strong> Targeted Contrast-Enhanced Ultrasound Imaging of Tumor Angiogenesis with Contrast Microbubbles Conjugated to Integrin-Binding Knottin Peptides. <em>Journal of Nuclear Medicine</em> (2010)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Willmann, J.K., et al.</strong> US imaging of tumor angiogenesis with microbubbles targeted to vascular endothelial growth factor receptor type 2 in mice. <em>Radiology</em> (2008)
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Lung Cancer */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-8">Lung Cancer</h3>
                <div className="space-y-6">
                  <Card className="bg-white shadow-sm border-l-4 border-primary">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Wikoff, W.R., et al.</strong> Diacetylspermine Is a Novel Prediagnostic Serum Biomarker for Non-Small-Cell Lung Cancer and Has Additive Performance With Pro-Surfactant Protein B. <em>Journal of Clinical Oncology</em> (2015)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Sin, D.D., et al.</strong> Pro–Surfactant Protein B As a Biomarker for Lung Cancer Prediction. <em>Journal of Clinical Oncology</em> (2013)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Taguchi, A., et al.</strong> Lung cancer signatures in plasma based on proteome profiling of mouse tumor models. <em>Cancer Cell.</em> (2011)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Thu, K.L., et al.</strong> Lung adenocarcinoma of never smokers and smokers harbor differential regions of genetic alteration and exhibit different levels of genomic instability. <em>PLoS One.</em> (2012)
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Ovarian Cancer */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-8">Ovarian Cancer</h3>
                <div className="space-y-6">
                  <Card className="bg-white shadow-sm border-l-4 border-primary">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Urban, N. et al.</strong> Identifying post-menopausal women at elevated risk for epithelial ovarian cancer. <em>Gynecologic Oncology</em> (2015)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Karlan, B.Y., et al.</strong> Use of CA125 and HE4 serum markers to predict ovarian cancer in elevated-risk women. <em>Cancer Epidemiol Biomarkers Prev.</em> (2014)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Urban, N., et al.</strong> Interpretation of single and serial measures of HE4 and CA125 in asymptomatic women at high risk for ovarian cancer. <em>Cancer Epidemiol Biomarkers Prev.</em> (2012)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Brown, P.O., et al.</strong> The Preclinical Natural History of Serous Ovarian Cancer: Defining the Target for Early Detection. <em>PloS Med.</em> (2009)
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Pancreatic Cancer */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-8">Pancreatic Cancer</h3>
                <div className="space-y-6">
                  <Card className="bg-white shadow-sm border-l-4 border-primary">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Pysz, M.A., et al.</strong> Vascular Endothelial Growth Factor Receptor Type 2-targeted Contrast-enhanced US of Pancreatic Cancer Neovasculature in a Genetically Engineered Mouse Model: Potential for Earlier Detection. <em>Radiology</em> (2015)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Foygel, K., et al.</strong> Detection of pancreatic ductal adenocarcinoma in mice by ultrasound imaging of thymocyte differentiation antigen 1. <em>Gastroenterology</em> (2013)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Pan, S., et al.</strong> Multiplex targeted proteomic assay for biomarker detection in plasma: a pancreatic cancer biomarker case study. <em>J Proteome Res.</em> (2012)
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Prostate Cancer */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-primary mb-8">Prostate Cancer</h3>
                <div className="space-y-6">
                  <Card className="bg-white shadow-sm border-l-4 border-primary">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Newcomb, L.F., et al.</strong> Outcomes of Active Surveillance for Clinically Localized Prostate Cancer in the Prospective, Multi-Institutional Canary PASS Cohort. <em>Journal of Urology</em> (2015)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Brooks, J.D., et al.</strong> Evaluation of ERG and SPINK1 by Immunohistochemical Staining and Clinicopathological Outcomes in a Multi-Institutional Radical Prostatectomy Cohort of 1067 Patients. <em>PLoS One</em> (2015)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-sm border-l-4 border-gray-300">
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Ankerst D.P., et al.</strong> Precision Medicine in Active Surveillance for Prostate Cancer: Development of the Canary-Early Detection Research Network Active Surveillance Biopsy Risk Calculator. <em>European Urology</em> (2015)
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Impact */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8">Publication Impact</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Our research publications represent breakthrough discoveries in early cancer detection across multiple cancer types, contributing to the global scientific understanding of biomarkers, imaging technologies, and precision medicine approaches.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-primary mb-2">7</h3>
                    <h4 className="text-lg font-bold text-dark mb-2">Cancer Types</h4>
                    <p className="text-gray-600">
                      Research spanning biomarkers, brain, breast, imaging, lung, ovarian, pancreatic, and prostate cancer.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
                    <h4 className="text-lg font-bold text-dark mb-2">Publications</h4>
                    <p className="text-gray-600">
                      Peer-reviewed articles in prestigious journals advancing early detection science.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-primary mb-2">1665</h3>
                    <h4 className="text-lg font-bold text-dark mb-2">Journal History</h4>
                    <p className="text-gray-600">
                      Scientific journals date back to 1665, continuing the tradition of knowledge sharing.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}