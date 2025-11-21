// Blog post data with full content from Canary Foundation
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  fullContent: string;
  author: string;
  authorBio?: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  wordCount?: number;
  featured: boolean;
  originalUrl?: string;
  references?: {
    title: string;
    url: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "don-listwin-award-2024-antonis-antoniou",
    title: "Don Listwin Award For Outstanding Contribution to Cancer Early Detection 2024 goes to: Professor Antonis Antoniou",
    excerpt: "Prof Antonis Antoniou, Professor of Cancer Risk Prediction in the Department of Public Health and Primary Care, has been named as the 2024 winner of the Don Listwin award for outstanding contribution to early cancer detection.",
    fullContent: `
      <p>Prof Antonis Antoniou, Professor of Cancer Risk Prediction in the Department of Public Health and Primary Care, has been named as the 2024 winner of the Don Listwin award for outstanding contribution to early cancer detection.</p>
      
      <p>Announced on October 23rd at the <a href="https://www.earlydetectionresearch.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Early Detection of Cancer Conference</a> in San Francisco, the award recognises a sustained contribution to, or singular achievement in, the cancer early detection field. The award is named in honour of Don Listwin, founder and chairman of the Canary Foundation, dedicated to research into early cancer detection.</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Recognition for Risk Prediction Innovation</h2>
      
      <p>Antonis and team have been recognised for their work on developing risk prediction models for cancer, in particular for breast and ovarian cancers. These models can help doctors to predict who might be most at risk of certain cancers so that preventive and screening measures can be better targeted.</p>
      
      <p>The team's <a href="https://www.canrisk.org/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">CanRisk tool</a> is used in primary care to calculate an individual's future risks of developing breast and ovarian cancers using cancer family history, genetic and other risk factors. Since 2020, over 3 million assessments have been performed using CanRisk.</p>
      
      <blockquote class="border-l-4 border-primary pl-6 my-6 italic text-gray-700">
        <p>"I am deeply honoured that our work has been selected for the 2024 Don Listwin Award. This award reflects the remarkable dedication and contributions of our team, collaborators, healthcare professionals, patient and public partners, and everyone involved in the multidisciplinary work that underpins CanRisk."</p>
        <footer class="mt-2 text-sm">— Professor Antonis Antoniou</footer>
      </blockquote>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">A Team Effort in Cancer Prevention</h2>
      
      <p>Over the years, this work has included developing novel statistical methods for modelling cancer susceptibility, understanding cancer risks for genetically susceptible individuals through large-scale collaborative studies, developing and validating multifactorial risk models, and transforming this research into user-friendly tools for clinicians. This has truly been a team effort.</p>
      
      <p class="text-sm text-gray-600 mt-8">Credit: Catherine Atkins from the Early Cancer Institute, University of Cambridge</p>
    `,
    author: "Renata Barnes",
    authorBio: "Renata Barnes is a science communications specialist at the Canary Foundation, dedicated to sharing breakthrough research in early cancer detection.",
    date: "2024-11-01",
    category: "Awards",
    tags: ["Don Listwin Award", "Risk Prediction", "Breast Cancer", "Ovarian Cancer", "CanRisk"],
    readTime: "5 min read",
    wordCount: 420,
    featured: false,
    originalUrl: "https://www.canaryfoundation.org/2024/11/01/don-listwin-award-for-outstanding-contribution-to-cancer-early-detection-2024-goes-to-professor-antonis-antoniou/"
  },
  {
    id: 2,
    slug: "edx24-conference-stanford-cancer-research",
    title: "Early Detection of Cancer Annual Conference - EDx24",
    excerpt: "The Early Detection of Cancer Conference brought top scientists and innovators in cancer research and bioengineering, physicians, patients, industry leaders and supporters to San Francisco in October to share the latest findings in early detection of cancer.",
    fullContent: `
      <p>The Early Detection of Cancer Conference brought top scientists and innovators in cancer research and bioengineering, physicians, patients, industry leaders and supporters to San Francisco in October to share the latest findings in early detection of cancer.</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">International Collaboration for Cancer Detection</h2>
      
      <p>The conference evolved from the formed international collaboration to accelerate research in the early detection of cancer. This partnership includes:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Canary Center at Stanford</li>
        <li>Cancer Research UK</li>
        <li>OHSU Knight Cancer Institute</li>
      </ul>
      
      <p>The goal of this unique trans-Atlantic agreement is to find lethal cancers as they are forming so they can be treated more effectively. Survival increases significantly when the disease is treated at an early stage.</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Breaking Down Barriers</h2>
      
      <p>The collaboration also seeks to accelerate progress by breaking down barriers for scientists, fostering international cooperation and knowledge sharing in the critical field of cancer early detection.</p>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">2024 Session Topics</h3>
      
      <p>This year's conference featured cutting-edge presentations on:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Emerging biomarker technologies</li>
        <li>AI and machine learning in cancer detection</li>
        <li>Liquid biopsy advances</li>
        <li>Population screening strategies</li>
        <li>Multi-cancer early detection tests</li>
      </ul>
      
      <p>For the full agenda of speakers and topics, visit the <a href="https://www.earlydetectionresearch.com/agenda/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">conference website</a>.</p>
    `,
    author: "Renata Barnes",
    date: "2024-11-01",
    category: "Conference",
    tags: ["EDx24", "Conference", "Stanford", "Cancer Research UK", "OHSU", "Collaboration"],
    readTime: "4 min read",
    wordCount: 320,
    featured: false,
    originalUrl: "https://www.canaryfoundation.org/2024/11/01/early-detection-of-cancer-annual-conference-edx24/"
  },
  {
    id: 3,
    slug: "edx23-conference-london-cancer-research",
    title: "Early Detection of Cancer Annual Conference - EDx23",
    excerpt: "The Early Detection of Cancer Conference brought nearly 500 researchers, physicians, patients, industry leaders and supporters to London in October to share the latest findings in early detection of cancer.",
    fullContent: `
      <p>The Early Detection of Cancer Conference brought nearly 500 researchers, physicians, patients, industry leaders and supporters to London in October to share the latest findings in early detection of cancer.</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Largest Conference Since Inception</h2>
      
      <p>The conference was the largest since its inception and included lively debates, discussions, and presentations of recent advances in cancer early detection. This annual gathering represents the pinnacle of international collaboration in the field, bringing together the brightest minds to advance breakthrough research and accelerate the development of life-saving technologies.</p>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Key Highlights from EDx23</h3>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Nearly 500 attendees from around the globe</li>
        <li>Presentations on cutting-edge detection technologies</li>
        <li>Panel discussions on implementation challenges</li>
        <li>Networking opportunities for researchers and clinicians</li>
        <li>Industry showcases of emerging diagnostic tools</li>
      </ul>
      
      <p>The success of EDx23 demonstrates the growing momentum in the field of early cancer detection and the power of international collaboration in advancing this critical research.</p>
      
      <p>For more information about the conference proceedings, view the <a href="https://www.earlydetectionresearch.com/wp-content/uploads/The-Early-Detection-of-Cancer-Conference-2023-Programme-2.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">full conference programme</a>.</p>
    `,
    author: "Renata Barnes",
    date: "2023-11-01",
    category: "Conference",
    tags: ["EDx23", "Conference", "London", "Cancer Research UK", "Stanford", "OHSU"],
    readTime: "4 min read",
    wordCount: 280,
    featured: false,
    originalUrl: "https://www.canaryfoundation.org/2023/11/01/early-detection-of-cancer-annual-conference-edx23-hosted-by-cancer-research-uk-canary-center-at-stanford-ohsu-knight-cancer-institute-and-bringing-together-great-minds-to-collaborate-i/"
  },
  {
    id: 4,
    slug: "don-listwin-award-2023-peter-sasieni",
    title: "Don Listwin Award 2023 goes to Professor Peter Sasieni",
    excerpt: "Congratulations to Professor Peter Sasieni, Academic Director of the Kings Clinical Trials Unit at King's College London, who was presented with the 2023 Don Listwin award at the Early Detection of Cancer conference.",
    fullContent: `
      <p>Congratulations to Professor Peter Sasieni, Academic Director of the Kings Clinical Trials Unit at King's College London, who was presented with the 2023 Don Listwin award at the Early Detection of Cancer conference dinner. The award recognizes outstanding contribution to cancer early detection.</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">A Career Dedicated to Cervical Cancer Prevention</h2>
      
      <p>Peter's long career in cervical cancer prevention started with his first post-doctoral position at the Imperial Cancer Research Fund, looking at ways to optimize cervical cancer screening. He then looked at the potential for HPV testing to improve cervical cancer screening, followed by researching HPV vaccination as a means of cervical cancer prevention.</p>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">HPV Vaccination Impact</h3>
      
      <p>The first HPV vaccinations were administered in 2006, and Peter was the lead author of the <a href="https://pubmed.ncbi.nlm.nih.gov/34741816/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">2021 paper</a> showing that the implementation of HPV vaccination has led to a dramatic reduction in cervical cancer incidence.</p>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">The BEST Trials: Cytosponge Innovation</h3>
      
      <p>Peter has also been working with Professor Rebecca Fitzgerald on the <a href="https://www.earlycancer.cam.ac.uk/our-research/our-clinical-studies/best-4-trial" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">BEST trials</a> which have assessed the use of the Cytosponge "sponge on a string" device as a means of early detection and prevention of oesophageal cancer. These trials are now exploring its implementation as a screening test for people on long-term medication for heart-burn symptoms, a risk factor for Barrett's oesophagus, a potential precursor to oesophageal cancer.</p>
      
      <p class="font-semibold mt-6">Peter's award is richly deserved and we offer him our warmest congratulations.</p>
      
      <div class="bg-light p-4 rounded-lg mt-8">
        <p class="text-sm text-gray-600"><strong>Reference:</strong> Falcaro, Milena, Alejandra Castañon, Busani Ndlela, Marta Checchi, Kate Soldan, Jamie Lopez-Bernal, Lucy Elliss-Brookes, and Peter Sasieni. "The effects of the national HPV vaccination programme in England, UK, on cervical cancer and grade 3 cervical intraepithelial neoplasia incidence: a register-based observational study." The Lancet 398, no. 10316 (2021): 2084-2092.</p>
      </div>
      
      <p class="text-sm text-gray-600 mt-4">Credit: Hannah Chang from the Early Cancer Institute, University of Cambridge</p>
    `,
    author: "Renata Barnes",
    date: "2023-11-01",
    category: "Awards",
    tags: ["Don Listwin Award", "Peter Sasieni", "Cervical Cancer", "HPV", "BEST Trials", "Cytosponge"],
    readTime: "6 min read",
    wordCount: 450,
    featured: false,
    originalUrl: "https://www.canaryfoundation.org/2023/11/01/don-listwin-award-for-outstanding-contribution-to-cancer-early-detection-2023-goes-to-professor-peter-sasieni/",
    references: [
      {
        title: "The effects of the national HPV vaccination programme in England, UK",
        url: "https://pubmed.ncbi.nlm.nih.gov/34741816/"
      }
    ]
  },
  {
    id: 5,
    slug: "canary-ovary-team-fallopian-tubes-study",
    title: "Canary Ovary Team Approaches Milestone in Fallopian Tube Study",
    excerpt: "The Canary Ovary Team's initiative to tackle High Grade Serous Ovarian Cancer (HGSOC) is approaching a milestone of completing its first study of fallopian tubes from women with and without mutations in the BRCA genes.",
    fullContent: `
      <p>The Canary Ovary Team's initiative to tackle High Grade Serous Ovarian Cancer (HGSOC) is approaching a milestone of completing its first study of fallopian tubes from women with and without mutations in the BRCA genes.</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Understanding High Grade Serous Ovarian Cancer</h2>
      
      <p>HGSOC arises from the fallopian tubes, is the most common and deadly type of ovarian cancer, and women with BRCA mutations are at higher risk. The team has been carefully studying tubes to find whether there are BRCA-associated signals present at the molecular level, even in BRCA mutant tubes that appear "normal" under the microscope.</p>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Groundbreaking Research Approach</h3>
      
      <p>This innovative research approach involves:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Comprehensive molecular analysis of fallopian tube tissues</li>
        <li>Comparison between BRCA mutation carriers and non-carriers</li>
        <li>Identification of early molecular changes before visible abnormalities</li>
        <li>Development of potential biomarkers for early detection</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Impact and Future Implications</h3>
      
      <p>When complete, this study will be the largest of its kind and will serve as a definitive resource for follow-up studies and for the research community focused on detecting ovarian cancer early. The findings could potentially:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Enable earlier detection of ovarian cancer in high-risk women</li>
        <li>Inform new screening strategies for BRCA mutation carriers</li>
        <li>Guide development of preventive interventions</li>
        <li>Provide insights into the earliest stages of cancer development</li>
      </ul>
      
      <p class="bg-primary/10 p-4 rounded-lg mt-6">
        <strong>Note:</strong> This research represents a critical step forward in understanding how ovarian cancer develops and could lead to life-saving early detection methods for women at high risk.
      </p>
    `,
    author: "Renata Barnes",
    date: "2023-11-01",
    category: "Research",
    tags: ["Research", "Ovarian Cancer", "BRCA", "Fallopian Tubes", "HGSOC", "Molecular Research"],
    readTime: "4 min read",
    wordCount: 350,
    featured: false,
    originalUrl: "https://www.canaryfoundation.org/2023/11/01/canary-ovary-team-is-approaching-a-milestone-of-completing-its-first-study-of-fallopian-tubes/"
  },
  {
    id: 6,
    slug: "edx22-conference-sold-out-ohsu-stanford",
    title: "EDx22 Conference Brings Together Global Cancer Detection Experts",
    excerpt: "This year's sold-out conference had engaging discussions, talks from submitted abstracts, and opportunities to collaborate with experts from across the globe, with provocative early detection challenges.",
    fullContent: `
      <p>This year's sold-out conference had engaging discussions, talks from submitted abstracts, and opportunities to collaborate with experts from across the globe. There was also the opportunity to debate provocative early detection challenges.</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Keynote Presentations and Highlights</h2>
      
      <p>The conference featured keynote presentations on:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li><strong>Population and tumor heterogeneity in cancer genome science</strong> - Speaker: John Carpten, USC</li>
        <li><strong>Emerging technologies for early detection and precision diagnosis</strong></li>
        <li><strong>Multi-cancer early detection tests</strong> - Panel discussion with leading experts</li>
        <li><strong>Funding agency perspectives</strong> - Insights from major research funders</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Notable Sessions and Speakers</h3>
      
      <p>Day 1 highlights included:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>From models to mechanisms to humans - Topic chairs: Simon Leedham & Victor Velculescu</li>
        <li>Panel: How should we evaluate Multi Cancer Early Detection Tests? - Moderator: Michelle Le Beau</li>
        <li>Great Debate: "There is no such thing as over-diagnosis" - Speakers: Nora Pashayan & Eithne Costello</li>
      </ul>
      
      <p>Day 2 featured:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Opening remarks by Tanya Stoyanova, Canary Center at Stanford University</li>
        <li>Microbiological risk factors for early detection - Including gut microbiota research</li>
        <li>Panel on unexpected trial results and learning opportunities</li>
        <li>Great Debate: "Single-organ vs. Multi-cancer screening" - Speakers: Paul Limburg & Bob Steele</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Breakthrough Research Presentations</h3>
      
      <p>Selected abstract presentations included:</p>
      
      <blockquote class="border-l-4 border-primary pl-6 my-6 italic text-gray-700">
        <p>"Mathematical Tools for Spatial Analysis of Multiplex Medical Images" - Joshua Bull</p>
        <p>"Acoustic Fabrication of Living Cardiomyocyte-based Hybrid Biorobots" - Jie Wang</p>
        <p>"A New Organ-on-Chip Platform to Study Gut Microbiota and Distal Tumors" - Danielle Brasino</p>
      </blockquote>
      
      <p class="font-semibold mt-6">The sold-out status of EDx22 demonstrates the growing importance and interest in early cancer detection research worldwide.</p>
    `,
    author: "Renata Barnes",
    date: "2022-11-17",
    category: "Conference",
    tags: ["EDx22", "Conference", "OHSU", "Stanford", "Cancer Research UK", "Collaboration"],
    readTime: "5 min read",
    wordCount: 420,
    featured: false,
    originalUrl: "https://www.canaryfoundation.org/2022/11/17/early-detection-of-cancer-annual-conference-edx22-hosted-by-ohsu-knight-cancer-institute-the-canary-center-at-stanford-and-cancer-research-uk-brought-together-great-minds-to-collaborate-i/"
  },
  {
    id: 7,
    slug: "don-listwin-award-2022-sudhir-srivastava",
    title: "Dr. Sudhir Srivastava Receives 2022 Don Listwin Award",
    excerpt: "The 2022 Award goes to Sudhir Srivastava, Senior Scientific Officer and Chief of the Cancer Biomarkers Research Branch in the Division of Cancer Prevention, National Cancer Institute (NCI), National Institutes of Health (NIH).",
    fullContent: `
      <p>The Don Listwin Award for Outstanding Contribution to Cancer Early Detection recognizes a sustained contribution to, or singular achievement in, the cancer early detection field.</p>
      
      <p>The 2022 Award goes to: <strong>Sudhir Srivastava, Ph.D., MPH, MS</strong>: Senior Scientific Officer and Chief of the Cancer Biomarkers Research Branch in the Division of Cancer Prevention, National Cancer Institute (NCI), National Institutes of Health (NIH).</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Transformative Programs in Cancer Detection</h2>
      
      <p>He is well-known for having established a number of transformative programs on translational research on cancer screening, early detection, risk assessment and enabling technologies including artificial intelligence with a network of leading experts in medicine, science, computational biology that has advanced scientific discoveries and revolutionized diagnostics in cancer early detection.</p>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">The Early Detection Research Network</h3>
      
      <p>In 2000, Dr. Srivastava developed and implemented a novel approach to collaborative clinical research on cancer biomarkers through the establishment of the Early Detection Research Network (EDRN), a flagship program at the NCI that has begun translating biomarkers into clinical tests:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>More than 8 FDA approved tests</li>
        <li>More than 19 CLIA certified tests</li>
        <li>Pioneer in applying innovative technologies in biomarker validation</li>
        <li>Development of national informatics infrastructure</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Strategic Programs and Initiatives</h3>
      
      <p>Dr. Srivastava developed several strategic programs promoting interdisciplinary approaches:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>The Alliance of Glycobiologists</li>
        <li>The Liver Cancer Consortium</li>
        <li>The Liquid Biology Consortium</li>
        <li>The Pancreatic Cancer Early Detection Consortium</li>
        <li>The Cancer Imaging and Biomarkers Program</li>
        <li>The PreCancer Atlas</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Early AI Adoption and Partnerships</h3>
      
      <p>His conceptualization and implementation of the EDRN informatics infrastructure, in collaboration with NASA's Jet Propulsion Laboratory, has become a model for similar collaborations. He is respected as an early adapter of emerging technologies, particularly artificial intelligence initiatives he launched in 1994, before the science became omnipresent in life sciences.</p>
      
      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Recognition and Awards</h3>
      
      <p>In recognition of his leadership in cancer diagnostics, Dr. Srivastava has received:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Featured in Wired magazine (August 2003)</li>
        <li>Distinguished Public Service Award (2016) - American Pancreatology Association</li>
        <li>Distinguished Clinical and Translational Proteomics Award (2017) - HUPO International</li>
        <li>Distinguished NCI Cancer Prevention Fellowship Program Alumni Award (2016)</li>
      </ul>
      
      <p class="bg-light p-4 rounded-lg mt-8">
        <strong>International Collaborations:</strong> Dr. Srivastava has developed partnerships with Japan's Agency for Medical Development and Research, Cancer Research-UK, the China Cancer Institute/Chinese Academy of Medical Sciences, and U.S. organizations such as Pancreatic Cancer Action Network, Lustgarten Foundation, and Kenner's Family Research Foundation.
      </p>
    `,
    author: "Renata Barnes",
    date: "2022-11-16",
    category: "Awards",
    tags: ["Don Listwin Award", "Sudhir Srivastava", "NCI", "NIH", "Biomarkers", "EDRN"],
    readTime: "6 min read",
    wordCount: 580,
    featured: false,
    originalUrl: "https://www.canaryfoundation.org/2022/11/16/don-listwin-award-for-outstanding-contribution-to-cancer-early-detection-2022-goes-to-sudhir-srivastava-ph-d-mph-ms/"
  },
  {
    id: 8,
    slug: "canary-foundation-program-report-2025",
    title: "2025 Program Highlights",
    excerpt: "A cross-program update on how Canary Foundation teams are advancing ovarian, pancreatic, prostate, ultrasound imaging, and lung cancer initiatives to find and treat disease sooner.",
    fullContent: `
      <p>The Canary Foundation is leading groundbreaking research to detect and prevent some of the deadliest cancers at their earliest, most treatable stages. By advancing science and technology, we aim to save lives through earlier diagnosis and smarter prevention.</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Ovarian Program</h2>
      <p>The Canary ovary team is developing innovative tools to stop high-grade serous ovarian cancer (SOC) at its earliest phase by focusing on prevention and early detection. Their research shows SOC often begins as a precancerous lesion in the fallopian tubes, and the team is using advanced technologies to identify biomarkers that flag disease early.</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Expand access to fallopian tube removal surgery as a preventive measure beyond high-risk women.</li>
        <li>Create a web-based platform with risk calculators and prevention strategies for personalized SOC management.</li>
        <li>Innovate imaging and blood test methods to detect precancerous lesions and early-stage SOC effectively.</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Pancreatic Program</h2>
      <p>Led by Dr. Walter Park at the Stanford/Canary Center, the Pancreas Program targets earlier detection of pancreatic ductal adenocarcinoma (PDAC) by identifying high-risk individuals, mining biomarkers, and deploying point-of-care ultrasound (POCUS). The team maintains a growing high-risk patient database while collecting and studying fluids from pancreatic cysts, a key precursor of pancreatic cancer.</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Focus screening on high-risk groups, analyze pancreatic cyst fluids, and deploy bedside ultrasound screening (POCUS).</li>
        <li>Collaborate across the Canary Center on biomarker discovery, leveraging glycoproteomics with Dr. Sharon Pitteri.</li>
        <li>Publish proof-of-concept research showing POCUS can visualize the pancreas reliably at the bedside.</li>
      </ul>
      <p>Parallel work at UC San Diego, led by Dr. Ahmed El Kaffas, is developing advanced ultrasound technologies—including contrast-enhanced POCUS with microbubbles and molecular imaging—to accelerate clinical adoption.</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Prostate Program</h2>
      <p>The Canary Prostate team concentrates on detecting lethal prostate cancer sooner while avoiding unnecessary treatment for low-risk disease via two multicenter clinical studies: Canary PASS and Canary PATROL. PASS tracks more than 2,400 men opting for active surveillance, while PATROL monitors individuals with genetic risk.</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Collect 1,257 biopsy tissue specimens to build the largest transcriptomic database of active-surveillance patients.</li>
        <li>Digitize biopsy slides from 1,800 participants and co-develop AI algorithms to improve risk assessment.</li>
        <li>Publish 17+ peer-reviewed papers, including a JAMA study validating active surveillance as a safe strategy.</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Ultrasound Imaging Innovation</h2>
      <p>Ultrasound is a highly portable, relatively affordable, non-ionizing, and widely available technology for non-invasive real-time bedside imaging. Canary Foundation supports Dr. Ahmed El Kaffas’s Translational Ultrasound Program at UC San Diego’s Moores Cancer Center, a unique hub that unites lab innovation and patient care to accelerate ultrasound research for early cancer detection.</p>
      <p>The program bridges engineering and clinical practice to pioneer contrast-enhanced POCUS with microbubbles and targeted molecular imaging approaches that improve accuracy and access.</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Advance contrast-enhanced POCUS using microbubbles to lower costs and increase access for liver, pancreatic, and other cancers.</li>
        <li>Fund research into clinically translatable targeted microbubbles for non-invasive molecular ultrasound imaging.</li>
        <li>Invest in integrating engineering and clinical research to accelerate regulatory approvals and adoption.</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Lung Program</h2>
      <p>Low-dose CT screening often reveals lung nodules that imaging alone cannot classify, leading to avoidable invasive procedures. Researchers at the Canary Center at Stanford, led by Dr. Utkan Demirci, are developing integrated diagnostic tests that combine biomarkers with imaging so clinicians can identify malignant nodules earlier.</p>
      <p>Recent studies focus on exosomes—tiny extracellular vesicles isolated from plasma using the ExoTIC (exosome total isolation chip) method developed at the Canary Center—to capture molecular insights from lung tissue.</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Leverage exosomal DNA, RNA, and proteins as specific lung cancer biomarkers.</li>
        <li>Refine the ExoTIC method to isolate analyzable exosomes from patient plasma.</li>
        <li>Enable early intervention for high-risk nodules and non-invasive monitoring of low-risk cases.</li>
      </ul>
    `,
    author: "Canary Foundation Research Team",
    authorBio: "The Canary Foundation Research Team highlights program milestones that advance early cancer detection across our global network.",
    date: "2025-11-16",
    category: "Report",
    tags: ["Report", "Program Update", "Ovarian Cancer", "Pancreatic Cancer", "Prostate Cancer", "Ultrasound", "Lung Cancer"],
    readTime: "7 min read",
    wordCount: 720,
    featured: true
  }
];
