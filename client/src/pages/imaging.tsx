import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { 
  Microscope, 
  Camera, 
  Zap, 
  Target, 
  Heart, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  BookOpen, 
  Users,
  Activity,
  Eye
} from "lucide-react";

export default function Imaging() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const imagingTechniques = [
    {
      id: "microbubble",
      title: "Microbubble Technology",
      icon: <Target className="w-8 h-8" />,
      summary: "Breakthroughs in imaging technology promise to revolutionize early detection of many cancers. Canary's Microbubble Project, using enhanced ultrasound technology, is one such breakthrough. Initially funded by individual philanthropy, the targeted microbubble technology has now been FDA approved for use in patients.",
      expandedContent: "Microbubbles are small gas-filled spheres that are injected into the bloodstream, and when they are coated with antibodies directed to specific biomarkers, they are known as targeted microbubbles. Canary has been testing targeted microbubbles that adhere to biomarkers in tumor vasculature (developing blood vessels associated with tumor growth but not normal tissues). When ultrasound is applied, they reflect a distinct and enhanced signal from the tumor compared to the background tissues.",
      status: "FDA Approved"
    },
    {
      id: "photoacoustic",
      title: "Photoacoustic Imaging",
      icon: <Zap className="w-8 h-8" />,
      summary: "We are adapting traditional ultrasound imaging with an emerging non-ionizing photoacoustic imaging (PAI) technique that essentially lets us \"hear\" light.",
      expandedContent: "PAI employs rapid short light pulses to illuminate tissue. The light is absorbed by various molecules found naturally in the body (e.g. hemoglobin) and converted to minute changes in temperature, which in turn, cause the absorbing molecules to locally expand. The transient local tissue expansion generates a pressure wave that can be detected using an ultrasound imaging system. Photoacoustic strategies allow deeper tissue penetration than optics alone while preserving the spatial and temporal resolution advantages of ultrasound. Therefore, tissues within a human body can be more clearly visualized at a depth that is clinically relevant. Because hemoglobin is one of the primary molecules present naturally that produce a photoacoustic signal, PAI is especially suitable for detecting blood vessels associated with tumors, as well as monitoring changes in blood flow and oxygen levels.",
      status: "In Development"
    },
    {
      id: "enhanced-ultrasound",
      title: "Enhanced Ultrasound Imaging",
      icon: <Activity className="w-8 h-8" />,
      summary: "For many years, Canary Foundation has been supporting the development of enhanced ultrasound techniques for early cancer detection. Ultrasound is a widely available imaging technology that lacks ionizing radiation, is relatively cost-effective and allows a dynamic evaluation of the region of interest in real time.",
      expandedContent: "Cancer of the prostate, ovary, breast and pancreas are excellent candidates for imaging with enhanced ultrasound techniques, which include imaging with targeted microbubbles. These techniques provide real-time visualization capabilities that can significantly improve early detection rates while maintaining patient safety through non-ionizing radiation approaches.",
      status: "Clinical Testing"
    }
  ];

  const cancerStudies = [
    {
      title: "Prostate Cancer",
      description: "New imaging approaches may provide a more sensitive and more accurate approach for the detection of prostate cancers. We are testing two new techniques, enhanced ultrasound using targeted microbubbles and photoacoustic imaging (PAI), for their utility in prostate cancer screening.",
      expandedContent: "In current clinical practice, the entire prostate is viewed with an ultrasound image for biopsy procedures. Biopsies are taken from several regions within the organ in hopes of capturing cells from a tumor. Depending on the tumor size and prostate volume, tumor cells are often not captured during biopsy, and the presence of a tumor can be missed. Additionally, accurate methods for the detection of early aggressive prostate cancer versus benign tumors could help eliminate unnecessary biopsies and could lead to an overall increase in patient survival. A human study is underway at Stanford confirming the safety, feasibility, and dosage requirements for targeted microbubbles. Men diagnosed with prostate cancer are imaged with targeted microbubbles prior to surgery. Images are compared to surgical findings and gene expression data to determine how well the imaging reflects the actual presence of tumor. A human study has been initiated at Stanford testing the combination of PAI and transrectal ultrasound on patients to evaluate this new technology's ability to visualize prostate cancer.",
      icon: <Target className="w-6 h-6" />,
      location: "Stanford University"
    },
    {
      title: "Ovarian Cancer",
      description: "At Stanford, we have engineered a new photoacoustic imaging (PAI) device that is being tested for visualization of prostate cancer. We are adapting this device for use in ovarian cancer imaging.",
      expandedContent: "After development and pre-clinical testing of the device, we will move into the clinical setting to test in patients. Our goal is to reliably visualize cancer even from several centimeters deep inside ovarian tissue. Initial clinical studies will provide the preliminary data necessary to improve the PAI instrument and develop larger clinical trials to assess the impact of combining transvaginal ultrasound and photoacoustic imaging for ovarian cancer screening. Another molecular imaging modality that holds promise for imaging ovarian cancer is enhanced ultrasound using targeted microbubble technology. Clinical studies are underway in collaboration with the Bracco company in Europe to test microbubble imaging in women with ovarian cancer. Recent FDA approval for using targeted microbubbles in humans, and the clinical studies in progress in men with prostate cancer at Stanford, have opened the door to advance this study for ovarian cancer. The Canary ovarian cancer team continues to discover and develop additional, more cancer-specific imaging biomarkers to pinpoint ovarian cancer in future molecular imaging studies.",
      icon: <Heart className="w-6 h-6" />,
      location: "Stanford University"
    },
    {
      title: "Pancreatic Cancer",
      description: "The pancreatic cancer team is pursuing development of sensitive, specific, and low-impact imaging for early detection of pancreatic cancer.",
      expandedContent: "Current imaging techniques such as CT, ultrasound, and MRI are not reliable for early detection of pancreatic cancer or discrimination of cancer versus diseases such as chronic pancreatitis. Development of new imaging agents to discriminate pancreatic cancer compared to benign diseases, as well as small early-stage pancreatic tumors, is critically needed. The Canary team has demonstrated the ability to detect small pancreatic cancers, less than 1 millimeter in size, using ultrasound with targeted microbubble technology in mouse models of pancreatic cancer. The team has also discovered a new candidate biomarker for pancreatic cancer imaging, Thymocyte Differentiation Antigen 1 (Thy1). Thy1 is expressed in vascular endothelial cells early in pancreatic cancer development. Ultrasound imaging with Thy1-targeted microbubbles in mouse models shows promise for detecting pancreatic cancer at very early stages. Dr. Timothy Donahue is deeply committed to distinguishing surgical candidates who have aggressive pancreatic cancer, from those who do not need surgery and can be safely monitored.",
      icon: <Microscope className="w-6 h-6" />,
      location: "Stanford University"
    },
    {
      title: "Lung Cancer",
      description: "To build upon our previous research and to improve upon the success of the NIH-funded National Lung Screening Trial (NLST), partner stakeholders and collaborating institutions, including Canary Foundation and MD Anderson Cancer Center in Houston, Texas, are launching a collaborative five-year study.",
      expandedContent: "In addition to saving lives through low-dose computed tomography (CT), the goal of this study is to test the contribution of biomarkers to CT screening. Biomarkers have the potential to aid the interpretation of CT scans to reduce the false-positive rate. Biomarkers may also identify individuals at risk for lung cancer who could benefit from screening. The results of this study may become the standard of care for lung cancer screening in the future.",
      icon: <Activity className="w-6 h-6" />,
      location: "MD Anderson Cancer Center"
    },
    {
      title: "Breast Cancer",
      description: "New imaging approaches may provide a more sensitive and more accurate approach for the detection of breast cancers. We are testing several imaging alternatives, including a new positron emission tomography (PET) imaging agent, enhanced ultrasound using targeted microbubbles, and photoacoustic imaging.",
      expandedContent: "These technologies are being evaluated for their ability to identify breast cancer early and to better distinguish cancer and benign conditions. The combination of multiple imaging modalities provides a comprehensive approach to early detection while minimizing false positives and unnecessary procedures.",
      icon: <Heart className="w-6 h-6" />,
      location: "Stanford University"
    }
  ];

  const researchLocations = [
    "Stanford University, Stanford, California",
    "MD Anderson Cancer Center, Houston, Texas", 
    "University of Washington, Seattle, Washington"
  ];

  const publications = [
    "Deshpande, N., et. al. Tumor angiogenic marker expression levels during tumor growth: longitudinal assessment with molecularly targeted microbubbles and US imaging. Radiology (2011)",
    "Thakor, A.S., et al. The fate and toxicity of Raman-active silica-gold nanoparticles in mice. Sci Transl Med. (2011)",
    "Mittra, E.S., et al. Pilot pharmacokinetic and dosimetric studies of 18F-FPPRGD2: A PET radiopharmaceutical agent for imaging a(v)ß(3) integrin levels. Radiology (2011)",
    "Nielson, C.H., et al. PET imaging of tumor neovascularization in a transgenic mouse model with a novel 64Cu-DOTA-knottin peptide. Cancer Res. (2010)",
    "Willmann JK, et al. Targeted Contrast-Enhanced Ultrasound Imaging of Tumor Angiogenesis with Contrast Microbubbles Conjugated to Integrin-Binding Knottin Peptides. Journal of Nuclear Medicine (2010)",
    "Willmann, J.K., et al. Targeted microbubbles for imaging tumor angiogenesis: assessment of whole-body biodistribution with dynamic micro-PET in mice. Radiology (2008)",
    "Willmann, J.K., et al. Dual-targeted contrast agent for US assessment of tumor angiogenesis in vivo. Radiology (2008)",
    "Lutz, A.M., et al. 2-deoxy-2-[F-18]fluoro-D-glucose accumulation in ovarian carcinoma cell lines. Mol. Imaging Biol. (2007)"
  ];

  return (
    <div className="min-h-screen bg-light">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Mobile-first title */}
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 leading-tight">
                  Molecular Imaging for Early Cancer Detection
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2">
                  Leading breakthrough imaging technologies that allow us to see biological processes happening in the context of disease, 
                  based on specific molecular events taking place at early stages of tumor development.
                </p>
              </div>
              
              {/* Dr. Gambhir Spotlight - Mobile-optimized */}
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  {/* Mobile: Stacked layout, Desktop: Centered */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-2">Dr. Sanjiv 'Sam' Gambhir</h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 font-medium">
                        World-renowned expert in molecular imaging, leading the science initiatives for Canary Foundation
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Imaging plays a critical role in early cancer detection. Beyond just taking a snapshot, molecular imaging allows us to see biological processes happening in the context of disease, 
                        based on specific molecular events (such as gene expression) taking place, even at early stages of tumor development. This aids in understanding the cancer's characteristics and can guide next steps such as treatment decisions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Imaging Technologies Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Mobile-first header */}
              <div className="text-center mb-8 md:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4 md:mb-6">Breakthrough Imaging Technologies</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
                  Our imaging projects are led by world-renowned experts developing revolutionary approaches to early cancer detection.
                </p>
              </div>
              
              {/* Mobile-first card layout */}
              <div className="space-y-6 md:space-y-8">
                {imagingTechniques.map((technique) => (
                  <Card key={technique.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      {/* Mobile: Stacked layout, Desktop: Side-by-side */}
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                          {technique.icon}
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          {/* Mobile-optimized title and badge */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-dark">{technique.title}</h3>
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 w-fit mx-auto sm:mx-0">
                              {technique.status}
                            </Badge>
                          </div>
                          <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{technique.summary}</p>
                          
                          {expandedSections[technique.id] && (
                            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4">
                              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{technique.expandedContent}</p>
                            </div>
                          )}
                          
                          <Button
                            variant="ghost"
                            onClick={() => toggleSection(technique.id)}
                            className="text-primary hover:text-primary-dark hover:bg-primary/10 p-2 mx-auto sm:mx-0 flex items-center"
                          >
                            {expandedSections[technique.id] ? (
                              <>
                                <span className="text-sm sm:text-base">Less</span>
                                <ChevronUp className="w-4 h-4 ml-1" />
                              </>
                            ) : (
                              <>
                                <span className="text-sm sm:text-base">More</span>
                                <ChevronDown className="w-4 h-4 ml-1" />
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cancer-Specific Studies Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Mobile-first header */}
              <div className="text-center mb-8 md:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4 md:mb-6">Cancer-Specific Imaging Studies</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
                  Tailored imaging approaches for different cancer types, each with unique detection challenges and requirements.
                </p>
              </div>
              
              {/* Mobile-first cards with improved spacing */}
              <div className="space-y-6 md:space-y-8">
                {cancerStudies.map((study, index) => (
                  <Card key={index} className="bg-light hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      {/* Mobile: Stacked, Desktop: Side-by-side */}
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                          {study.icon}
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          {/* Mobile-optimized title and location */}
                          <div className="mb-3 sm:mb-4">
                            <h3 className="text-lg sm:text-xl font-semibold text-dark mb-2">{study.title}</h3>
                            <div className="flex items-center justify-center sm:justify-start gap-1 text-xs sm:text-sm text-gray-500">
                              <MapPin className="w-3 h-3" />
                              <span>{study.location}</span>
                            </div>
                          </div>
                          <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{study.description}</p>
                          
                          {expandedSections[`study-${index}`] && (
                            <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 border border-gray-200">
                              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{study.expandedContent}</p>
                            </div>
                          )}
                          
                          <Button
                            variant="ghost"
                            onClick={() => toggleSection(`study-${index}`)}
                            className="text-primary hover:text-primary-dark hover:bg-primary/10 p-2 mx-auto sm:mx-0 flex items-center"
                          >
                            {expandedSections[`study-${index}`] ? (
                              <>
                                <span className="text-sm sm:text-base">Less</span>
                                <ChevronUp className="w-4 h-4 ml-1" />
                              </>
                            ) : (
                              <>
                                <span className="text-sm sm:text-base">More</span>
                                <ChevronDown className="w-4 h-4 ml-1" />
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Locations Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Mobile-first header */}
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4 md:mb-6">Where Canary Science is Happening</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
                  Our imaging research is conducted at leading academic medical centers across the United States.
                </p>
              </div>
              
              {/* Mobile-first location cards */}
              <div className="space-y-4 md:space-y-6">
                {researchLocations.map((location, index) => (
                  <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-dark leading-tight">{location}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Mobile-first header */}
              <div className="text-center mb-8 md:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4 md:mb-6">Canary Funded Publications</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 px-2">
                  Peer-reviewed research publications showcasing breakthrough discoveries in molecular imaging for cancer detection.
                </p>
              </div>
              
              <Card className="bg-light">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  {/* Mobile-first publication list */}
                  <div className="space-y-4 sm:space-y-6">
                    {publications.map((publication, index) => (
                      <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{publication}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {expandedSections['publications'] && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-300">
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center px-2">
                        These publications represent groundbreaking research in molecular imaging, funded by Canary Foundation to advance early cancer detection technologies.
                      </p>
                    </div>
                  )}
                  
                  <div className="text-center mt-4 sm:mt-6">
                    <Button
                      variant="ghost"
                      onClick={() => toggleSection('publications')}
                      className="text-primary hover:text-primary-dark hover:bg-primary/10 p-2"
                    >
                      {expandedSections['publications'] ? (
                        <>
                          <span className="text-sm sm:text-base">Less</span>
                          <ChevronUp className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          <span className="text-sm sm:text-base">More</span>
                          <ChevronDown className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}