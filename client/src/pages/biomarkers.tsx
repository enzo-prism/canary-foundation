import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { 
  Fingerprint, 
  Droplets, 
  Heart, 
  Activity, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  BookOpen, 
  Users,
  Target,
  TestTube,
  FlaskConical
} from "lucide-react";

export default function Biomarkers() {
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

  const biomarkerProjects = [
    {
      id: "breast-cancer",
      title: "Breast Cancer Biomarkers—Establishing Tissue Bank",
      icon: <Heart className="w-8 h-8" />,
      summary: "Investigators at the Canary Center at Stanford are collaborating with researchers and clinicians at the Stanford Cancer Institute on a project to identify gene expression and protein changes in patient specimens as breast cancer develops, and to determine whether those changes correlate with specific imaging findings.",
      expandedContent: "The team is establishing a Stanford University tissue bank of matched tumor and normal breast biopsy samples, mammography, ultrasound, magnetic resonance imaging studies, and blood samples. The team will integrate the data and identify correlations between plasma protein and tumor gene expression profiles, pathology, and radiographic imaging studies. The dataset will represent the most comprehensive analysis of its kind to date. Potential biomarkers that signal the development of the tumor would form the basis for early detection blood tests to complement imaging. Additional work aims to identify biomarkers that distinguish women with cancer from those with benign conditions (such as a cyst). These biomarkers would potentially reduce the number of unnecessary invasive follow-up tests and enhance the interpretation of mammographic images for early detection of breast cancer.",
      location: "Stanford University",
      status: "Active Research"
    },
    {
      id: "lung-cancer",
      title: "Lung Cancer Biomarkers—Launching Trial With 10,000",
      icon: <Activity className="w-8 h-8" />,
      summary: "Partner stakeholders and collaborating institutions, including Canary Foundation and MD Anderson Cancer Center in Houston, Texas, are launching a clinical trial in which blood biomarker data will be incorporated into the CT screening process for lung cancer. The trial will enroll at least 10,000 individuals to be followed for three to five years at a minimum of 10 participating sites in the U.S.",
      expandedContent: "At each visit, participants receive a CT scan, a questionnaire that includes detailed smoking history, and a blood draw. All participating sites will incorporate the same sets of Standard Operating Procedures for protocol design, specimen collection, processing, storage, and shipping. Biomarkers will be tested for their ability to detect lung cancer and to discriminate cancer versus benign conditions in suspicious CT findings. Biomarkers will also be tested for their ability to predict a risk profile for lung cancer. Top biomarkers include those discovered and validated through the Canary Lung Team's previous research on blood and tissues from lung cancers that developed in individuals who never smoked. The team is also evaluating all biomarkers that show promise from published literature and from other research groups.",
      location: "MD Anderson Cancer Center",
      status: "Clinical Trial"
    },
    {
      id: "ovarian-cancer",
      title: "Ovarian Cancer Novel Markers Trial (NMT)—With Two Biomarkers, CA-125 and HE4",
      icon: <Target className="w-8 h-8" />,
      summary: "The Novel Markers Trial (NMT) was launched in 2009 by the Pacific Ovarian Cancer Research Consortium (POCRC), a collaborative team of scientists led by Canary team member Dr. Nicole Urban who was awarded a five-year SPORE grant by the National Cancer Institute.",
      expandedContent: "Previous clinical trials of ovarian cancer screening programs mostly involved a single biomarker (CA-125) as a blood test. The NMT incorporates a second blood-based biomarker (HE4) into the screening protocols for clinical decision-making. Furthermore, the trial uses a new computational algorithm to determine whether the biomarker signals the presence of cancer. The study is determining the predictive value for malignant ovarian cancer of a screening program that includes the two biomarkers. The five-year study has enrolled its goal of 1,200 women, divided into three risk groups depending on the mutation status of certain cancer risk genes, family history of ovarian cancer, and other factors that may influence a woman's risk of ovarian cancer. The study has determined that HE4 is useful as a confirmatory screen when rising CA-125 is used alone as a primary screen. The screening protocol was found to be feasible and acceptable to women and physicians and did not result in excessive anxiety or unnecessary procedures.",
      location: "Pacific Ovarian Cancer Research Consortium",
      status: "Completed"
    },
    {
      id: "pancreatic-cancer",
      title: "Pancreatic Cancer Biomarkers—and Pursuing Multiple Reaction Monitoring",
      icon: <TestTube className="w-8 h-8" />,
      summary: "The blood biomarker CA-19-9 is currently the only clinically used blood test for pancreatic cancer, but it lacks the sensitivity and specificity needed to detect early-stage pancreatic cancer. The Canary team is working to develop more accurate blood-based or saliva-based biomarkers.",
      expandedContent: "The team is pursuing Multiple Reaction Monitoring (MRM), in which proteins of interest are directly measured in the plasma, without the need for antibodies. This project is designed to alleviate the bottleneck of antibody development in the efforts to bring lab discoveries to the clinic. In addition to protein biomarkers in the blood, the team is also pursuing alternative biomarkers such as cancer-specific microRNAs in the saliva of patients with pancreatic diseases.",
      location: "Canary Foundation",
      status: "In Development"
    }
  ];

  const researchLocations = [
    "Canary Foundation in Palo Alto, California",
    "MD Anderson Cancer Center in Houston, Texas"
  ];

  const publications = [
    "Brooks, J.D. Translational genomics: The challenge of developing cancer biomarkers. Genome Res. (2012)",
    "Hanash, S.M. Why have protein biomarkers not reached the clinic? Genome Med. (2011)",
    "Borugian, M.J., et al. The Canadian Partnership for Tomorrow Project: building a pan-Canadian research platform for disease prevention. CMAJ (2010)",
    "May, D., et al. A software platform for rapidly creating computational tools for mass spectrometry-based proteomics. J Proteome. Res. (2009)",
    "Lutz, A.M., et al. Cancer screening: A mathematical model relating secreted blood biomarker levels to tumor sizes. PLoS Medicine (2008)",
    "Scholler, N., et al. Use of cancer-specific yeast-secreted in vivo biotinylated recombinant antibodies for serum biomarker discovery. J. Transl. Med. (2008)",
    "Martin, D.B., et al. MRMer: An interactive open-source and cross-platform system for data extraction and visualization of multiple reaction monitoring experiments. Mol. Cell. Proteomics (2008)"
  ];

  return (
    <div className="min-h-screen bg-light">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Biomarkers: Biological Fingerprints for Early Detection
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Biomarkers (short for biological markers) are like biological 'fingerprints' that show the presence or progress of a disease. 
                They will help us identify individuals who are likely to have cancer, and are a key area of our early cancer detection focus.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-8 mb-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Fingerprint className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As just one example, we are looking at blood-based biomarkers to help us predict a risk profile for lung cancer. 
                  In the area of pancreatic cancer, Canary teams are working to develop more accurate blood-based or saliva-based biomarkers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Researcher */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <FlaskConical className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-dark mb-2">Richard Kimura</h2>
                      <p className="text-lg text-primary font-semibold mb-3">Director of Cell Molecular Biology</p>
                      <p className="text-gray-600 leading-relaxed">
                        Leading biomarker discovery and development efforts, focusing on identifying unique biological signatures 
                        that can detect cancer at its earliest stages when treatment is most effective.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Biomarker Research Projects */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Cancer-Specific Biomarker Research</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our researchers are developing specialized biomarker approaches for different cancer types, 
                  each tailored to the unique biological characteristics of specific cancers.
                </p>
              </div>
              
              <div className="grid md:grid-cols-1 gap-8">
                {biomarkerProjects.map((project) => (
                  <Card key={project.id} className="bg-light hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-xl font-semibold text-dark">{project.title}</h3>
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {project.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{project.location}</span>
                          </div>
                          <p className="text-gray-600 mb-4">{project.summary}</p>
                          
                          {expandedSections[project.id] && (
                            <div className="bg-white rounded-lg p-6 mb-4 border border-gray-200">
                              <p className="text-gray-700 leading-relaxed">{project.expandedContent}</p>
                              {project.id === "ovarian-cancer" && (
                                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                  <p className="text-blue-800 text-sm">
                                    <strong>For more detailed information about this screening trial, please visit the POCRC website.</strong>
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                          
                          <Button
                            variant="ghost"
                            onClick={() => toggleSection(project.id)}
                            className="text-primary hover:text-primary-dark hover:bg-primary/10 p-0"
                          >
                            {expandedSections[project.id] ? (
                              <>Less <ChevronUp className="w-4 h-4 ml-1" /></>
                            ) : (
                              <>More <ChevronDown className="w-4 h-4 ml-1" /></>
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

        {/* Research Approach Highlights */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Innovative Biomarker Approaches</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our research teams employ cutting-edge methodologies to discover and validate biomarkers for early cancer detection.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Droplets className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark mb-4 text-center">Blood-Based Biomarkers</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Non-invasive blood tests that can detect cancer signatures, providing accessible screening options for early detection.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <TestTube className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark mb-4 text-center">Multiple Reaction Monitoring</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Advanced protein measurement techniques that directly analyze plasma without antibodies, accelerating clinical translation.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <FlaskConical className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark mb-4 text-center">Saliva-Based Testing</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Exploring cancer-specific microRNAs in saliva as an alternative, non-invasive approach to biomarker detection.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Research Locations Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Where Canary Science is Happening</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our biomarker research is conducted at leading research institutions with state-of-the-art facilities and expert teams.
                </p>
              </div>
              
              <div className="grid md:grid-cols-1 gap-6">
                {researchLocations.map((location, index) => (
                  <Card key={index} className="bg-light hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-dark">{location}</h3>
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
        <section className="py-16 md:py-20 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Canary Funded Biomarker Publications</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Peer-reviewed research publications showcasing breakthrough discoveries in biomarker development for early cancer detection.
                </p>
              </div>
              
              <Card className="bg-white">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {publications.map((publication, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed">{publication}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {expandedSections['publications'] && (
                    <div className="mt-6 pt-6 border-t border-gray-300">
                      <p className="text-gray-600 text-center">
                        These publications represent groundbreaking research in biomarker discovery and validation, 
                        funded by Canary Foundation to advance early cancer detection technologies.
                      </p>
                    </div>
                  )}
                  
                  <div className="text-center mt-6">
                    <Button
                      variant="ghost"
                      onClick={() => toggleSection('publications')}
                      className="text-primary hover:text-primary-dark hover:bg-primary/10"
                    >
                      {expandedSections['publications'] ? (
                        <>Less <ChevronUp className="w-4 h-4 ml-1" /></>
                      ) : (
                        <>More <ChevronDown className="w-4 h-4 ml-1" /></>
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