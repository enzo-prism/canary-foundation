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
  dateLabel?: string;
  publishedDate?: string;
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
    title: "Canary Foundation 2025 Program Highlights: Accelerating Early Detection",
    excerpt: "A cross-program update on how Canary Foundation teams are advancing ovarian, pancreatic, prostate, ultrasound imaging, and lung cancer initiatives to find and treat disease sooner.",
    fullContent: `
      <p>The Canary Foundation is leading groundbreaking research to detect and prevent some of the deadliest cancers at their earliest, most treatable stages. By advancing science and technology, we aim to save lives through earlier diagnosis and smarter prevention.</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Ovarian</h2>
      <p>The Canary ovary team is developing innovative tools to stop high-grade serous ovarian cancer (SOC) at its earliest phase by focusing on prevention and early detection. Their research shows SOC often begins as a precancerous lesion in the fallopian tubes, and the team is using advanced technologies to identify biomarkers that flag disease early.</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Expand access to fallopian tube removal surgery as a preventive measure beyond high-risk women.</li>
        <li>Create a web-based platform with risk calculators and prevention strategies for personalized SOC management.</li>
        <li>Innovate imaging and blood test methods to detect precancerous lesions and early-stage SOC effectively.</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Pancreatic</h2>
      <p>Led by Dr. Walter Park at the Stanford/Canary Center, the Pancreas Program targets earlier detection of pancreatic ductal adenocarcinoma (PDAC) by identifying high-risk individuals, mining biomarkers, and deploying point-of-care ultrasound (POCUS). The team maintains a growing high-risk patient database while collecting and studying fluids from pancreatic cysts, a key precursor of pancreatic cancer.</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Focus screening on high-risk groups, analyze pancreatic cyst fluids, and deploy bedside ultrasound screening (POCUS).</li>
        <li>Collaborate across the Canary Center on biomarker discovery, leveraging glycoproteomics with Dr. Sharon Pitteri.</li>
        <li>Publish proof-of-concept research showing POCUS can visualize the pancreas reliably at the bedside.</li>
      </ul>
      <p>Parallel work at UC San Diego, led by Dr. Ahmed El Kaffas, is developing advanced ultrasound technologies—including contrast-enhanced POCUS with microbubbles and molecular imaging—to accelerate clinical adoption.</p>
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Prostate</h2>
      <p>The Canary Prostate team focuses on early detection of lethal prostate cancer while minimizing unnecessary treatment for low-risk cases through two multicenter clinical studies, Canary PASS and Canary PATROL. PASS monitors men with early-stage, low-risk prostate cancer choosing active surveillance, and PATROL studies individuals with genetic risk. With over 2,400 PASS participants at 11 sites, the team has developed a rich biobank and data set for research, leading to advancements in risk stratification using transcriptomic data and AI, as well as impactful publications and ongoing grant-supported projects.</p>
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
      
      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Lung</h2>
      <p>Low-dose CT screening often reveals lung nodules that imaging alone cannot classify, leading to avoidable invasive procedures. Researchers at the Canary Center at Stanford, led by Dr. Utkan Demirci, are developing integrated diagnostic tests that combine biomarkers with imaging so clinicians can identify malignant nodules earlier.</p>
      <p>Recent studies focus on exosomes—tiny extracellular vesicles isolated from plasma using the ExoTIC (exosome total isolation chip) method developed at the Canary Center—to capture molecular insights from lung tissue.</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Leverage exosomal DNA, RNA, and proteins as specific lung cancer biomarkers.</li>
        <li>Refine the ExoTIC method to isolate analyzable exosomes from patient plasma.</li>
        <li>Enable early intervention for high-risk nodules and non-invasive monitoring of low-risk cases.</li>
      </ul>
      
      <div class="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mt-12">
        <h3 class="text-2xl font-semibold text-dark mb-4">Support Our Research</h3>
        <p class="text-gray-600 mb-6">
          Help us advance these groundbreaking programs and bring life-saving early detection technologies to patients worldwide.
        </p>
        <a href="https://donorbox.org/canary-campaign" target="_blank" rel="noopener noreferrer" class="inline-block bg-primary text-white hover:bg-primary-dark font-semibold py-3 px-8 rounded-lg transition-all duration-300">
          Donate Now
        </a>
      </div>
    `,
    author: "Canary Foundation Research Team",
    authorBio: "The Canary Foundation Research Team highlights program milestones that advance early cancer detection across our global network.",
    date: "2025-11-16",
    category: "Report",
    tags: ["Report", "Program Update", "Ovarian Cancer", "Pancreatic Cancer", "Prostate Cancer", "Ultrasound", "Lung Cancer"],
    readTime: "7 min read",
    wordCount: 720,
    featured: false
  },
  {
    id: 9,
    slug: "don-listwin-award-2025-ruth-etzioni",
    title: "Don Listwin Award For Outstanding Contribution to Cancer Early Detection 2025 goes to: Ruth Etzioni",
    excerpt: "The 2025 Early Detection Impact Award recognizes Ruth Etzioni, Fred Hutch Cancer Center, for outstanding contributions that help inform how best to screen for different cancers.",
    fullContent: `
      <p>The Don Listwin Award (Early Detection Impact Award) for Outstanding Contribution to Cancer Early Detection recognizes a sustained contribution to, or singular achievement in, the cancer early detection field.</p>

      <p>The 2025 Award goes to: <strong>Ruth Etzioni</strong>, <strong>Fred Hutch Cancer Center</strong>.</p>

      <figure class="my-8">
        <img src="https://www.earlydetectionresearch.com/wp-content/uploads/Ruth-Etzioni-1.jpg" alt="Ruth Etzioni, Fred Hutch Cancer Center" loading="lazy" decoding="async" class="mx-auto w-full max-w-sm rounded-lg shadow-md" />
        <figcaption class="mt-2 text-center text-sm text-gray-600">Ruth Etzioni, Fred Hutch Cancer Center</figcaption>
      </figure>

      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">About the Award</h2>

      <p>The Early Detection Impact Award for Outstanding Contribution to Cancer Early Detection recognizes a sustained contribution to, or singular achievement in, the cancer early detection field.</p>

      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Eligibility and Selection Process</h3>

      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Nominations are open to any individual or team of individuals who have contributed to the field of cancer early detection through an outstanding sustained commitment or a singular achievement.</li>
        <li>All nominations are kept for three years.</li>
        <li>Decisions are made by an awards committee consisting of the scientific organizers of the annual Early Detection of Cancer conference and an additional representative from each organizing institution.</li>
        <li>The main criterion for judging nominations is impact on the cancer early detection field, whether scientific, translational, advocacy, or other.</li>
      </ul>

      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">2025 Winner: Ruth Etzioni</h2>

      <p>Ruth Etzioni is a Professor in the Biostatistics Program, Public Health Sciences Division, at the Fred Hutch Cancer Center, where she holds the Rosalie and Harold Rea Brown Endowed Chair.</p>

      <p>She has been involved in cancer early detection research since the early days of PSA, when she became fascinated with the many ways of screening for cancer using blood-based biomarkers. The driving motivation of her research program is to develop the evidence needed to inform decisions about how best to screen for different cancers.</p>

      <p>Her work has focused primarily on prostate cancer, with additional contributions in breast and ovarian cancer. She is currently supported by an NCI Outstanding Investigator Award to develop models and methods for novel cancer diagnostics, with a primary focus on multi-cancer early detection tests.</p>

      <div class="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mt-12">
        <h3 class="text-2xl font-semibold text-dark mb-4">Make a nomination</h3>
        <p class="text-gray-600 mb-6">
          Submit a nomination for the Early Detection Impact Award at <a href="https://www.earlydetectionresearch.com/award/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">earlydetectionresearch.com/award</a>.
        </p>
        <a href="https://www.earlydetectionresearch.com/award/" target="_blank" rel="noopener noreferrer" class="inline-block bg-primary text-white hover:bg-primary-dark font-semibold py-3 px-8 rounded-lg transition-all duration-300">
          Nominate now
        </a>
      </div>
    `,
    author: "Renata Barnes",
    authorBio: "Renata Barnes is a science communications specialist at the Canary Foundation, dedicated to sharing breakthrough research in early cancer detection.",
    date: "2025-11-01",
    category: "Awards",
    tags: ["Don Listwin Award", "Early Detection Impact Award", "Ruth Etzioni", "Fred Hutch Cancer Center", "Biostatistics", "Cancer Screening", "Multi-Cancer Early Detection"],
    readTime: "5 min read",
    wordCount: 460,
    featured: false
  },
  {
    id: 10,
    slug: "edx25-conference-portland-early-detection",
    title: "Early Detection of Cancer Annual Conference - EDx25",
    excerpt: "Held October 21–23, 2025 in Portland, Oregon, EDx25 convened international experts to share advances in AI, multi-cancer early detection, next-generation biomarkers, and bringing early detection into primary care and communities.",
    fullContent: `
      <p>The Early Detection of Cancer Conference (EDx25) was held October 21–23, 2025 in Portland, Oregon, USA. Presented by Cancer Research UK, the Canary Center at Stanford, and the OHSU Knight Cancer Institute, the meeting brought together researchers, clinicians, technologists, and public health leaders to translate cutting-edge discovery into real-world early detection.</p>

      <p>Across sessions, speakers highlighted the role of artificial intelligence, innovative technologies, and the practical work of getting early detection into the community and primary care—so clinicians can focus testing and follow-up on the people who need it most.</p>

      <h2 class="text-2xl font-bold text-dark mt-8 mb-4">Key highlights from EDx25</h2>

      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Long-term registry follow-up for MCED in symptomatic patients</h3>

      <p>One major update featured long-term data from the SYMPLIFY study (GRAIL and the University of Oxford), evaluating the Galleri multi-cancer early detection (MCED) test in symptomatic individuals.</p>

      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>With follow-up extended to 24 months in national cancer registries, the positive predictive value (PPV) increased to <strong>84.2%</strong> (up from 75.5%).</li>
        <li>About <strong>one-third</strong> of participants initially considered “false positive” were later diagnosed with cancer during extended follow-up.</li>
        <li>These results reinforce the test’s ability to predict the cancer signal origin and the value of longer-term outcome capture when evaluating early detection tools.</li>
      </ul>

      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Innovation across AI, biomarkers, and liquid biopsy</h3>

      <p>The agenda emphasized how new technologies—and the way we evaluate them—can accelerate early detection while supporting clinical adoption. Talks highlighted:</p>

      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>How AI can support detection, triage, and decision-making across screening and diagnostic pathways.</li>
        <li>Emerging biomarker strategies and assay designs aimed at improving early-stage sensitivity and specificity.</li>
        <li>Implementation-oriented research focused on pathways that work in real care settings.</li>
      </ul>

      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">DNA methylation signals that sharpen colorectal cancer detection</h3>

      <p>Research presented at EDx25 demonstrated that distinguishing between DNA methylation types <strong>5mC</strong> and <strong>5hmC</strong> can significantly enhance the diagnostic accuracy of liquid biopsy tests for early-stage colorectal cancer (<strong>AUC = 0.95</strong>).</p>

      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Primary care integration and community impact</h3>

      <p>A recurring theme was the importance of moving early detection strategies into community and primary care settings—where most patients first present—so that risk-informed tools and pathways can help identify who should receive further testing.</p>

      <h3 class="text-xl font-semibold text-dark mt-6 mb-3">Collaboration across disciplines and institutions</h3>

      <p>Hosted by Cancer Research UK, the Canary Center at Stanford, and the OHSU Knight Cancer Institute, EDx25 underscored international, multidisciplinary collaboration as essential for progress in early detection—bringing together experts in research, clinical practice, engineering, and public health to accelerate translation and improve outcomes through earlier diagnosis.</p>

      <p class="mt-8">Learn more about the Early Detection of Cancer Conference at <a href="https://www.earlydetectionresearch.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">earlydetectionresearch.com</a>.</p>
    `,
    author: "Renata Barnes",
    authorBio: "Renata Barnes is a science communications specialist at the Canary Foundation, dedicated to sharing breakthrough research in early cancer detection.",
    date: "2025-11-01",
    category: "Conference",
    tags: ["EDx25", "Conference", "Portland", "Cancer Research UK", "Stanford", "OHSU", "Collaboration", "AI", "MCED", "Galleri", "SYMPLIFY", "Liquid Biopsy", "Biomarkers", "DNA Methylation", "Primary Care", "Colorectal Cancer"],
    readTime: "6 min read",
    wordCount: 520,
    featured: false
  },
  {
    id: 11,
    slug: "oral-history-caltech",
    title: "Caltech Heritage Project Oral History (2025) — Don Listwin",
    excerpt: "A four-part 2025 Caltech Heritage Project interview with Don Listwin about building early-stage cancer detection systems through lessons learned from Cisco, Openwave, and his team science approach at the Canary Foundation.",
    fullContent: `
      <section class="space-y-6">
        <div class="space-y-3 rounded-2xl bg-white/95 p-6 shadow-panel ring-1 ring-white/60">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Interview</p>
          <h1 class="text-3xl font-semibold text-dark md:text-4xl">Caltech Heritage Project Oral History (2025)</h1>
          <p class="text-gray-700">
            A four-part oral history recorded March–April 2025 with David Zierler (Caltech Heritage Project). Don Listwin traces the arc from building Cisco’s growth engine to leading Openwave through the dot-com collapse—and then rebuilding his life around early cancer detection through the Canary Foundation.
          </p>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold text-dark mt-10">What this series covers</h2>
        <ul class="list-disc pl-6 my-4 space-y-2 text-gray-700">
          <li>Building markets, not just products: Cisco-era lessons on platform shifts, distribution, and customer-pulled roadmaps</li>
          <li>The pivot from tech to science: why early detection became the mission, and what team science fixes</li>
          <li>The Canary model: seed funding to early data, leveraging major grant support, and why milestones matter</li>
          <li>Why imaging is the next big bet: biomarker + confirmatory imaging as a practical path to action</li>
          <li>AI’s near-term impact: imaging + pathology as domains where algorithms are reliably outpacing variability</li>
        </ul>
      </section>

      <section class="space-y-6">
        <h2 class="text-2xl font-semibold text-dark">Listen + download</h2>
        <div class="flex flex-wrap gap-3">
          <a href="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1771359675/Don_Listwin_xojqyi.pdf" target="_blank" rel="noopener noreferrer" class="inline-block text-primary hover:text-primary-dark hover:underline">
            Download full transcript (PDF)
          </a>
          <a href="https://www.listwinventures.com/media/oral-history/caltech-2025/transcript-full.txt" class="inline-block text-primary hover:text-primary-dark hover:underline">
            Download full transcript (TXT)
          </a>
        </div>
      </section>

      <section class="space-y-8">
        <h2 class="text-2xl font-semibold text-dark">Episodes</h2>

        <article class="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 text-gray-700">
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-dark">Episode 1 — March 25, 2025</h3>
            <p class="text-sm font-medium text-gray-600">From Cisco to Canary: building early detection as a system</p>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Runtime: 1h 04m</p>
          </div>

          <audio class="w-full" controls preload="metadata">
            <source src="https://www.listwinventures.com/media/oral-history/caltech-2025/episode-1-2025-03-25.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <a href="https://www.listwinventures.com/media/oral-history/caltech-2025/episode-1-2025-03-25-transcript.txt" class="inline-block text-primary hover:text-primary-dark hover:underline">
            Episode transcript (TXT)
          </a>

          <ul class="list-disc space-y-1 pl-5 text-sm">
            <li>Why the “two-step” early detection model matters (biomarker + imaging)</li>
            <li>The leverage strategy: seed dollars that unlock major grant funding</li>
            <li>What progress looks like today—and what still hasn’t broken through</li>
            <li>How a first $1M gift and later $10M Fred Hutch investment set the early team-science model</li>
          </ul>
        </article>

        <article class="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 text-gray-700">
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-dark">Episode 2 — April 2, 2025</h3>
            <p class="text-sm font-medium text-gray-600">Origins: family, Canada, and the making of a builder</p>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Runtime: 1h 00m</p>
          </div>

          <audio class="w-full" controls preload="metadata">
            <source src="https://www.listwinventures.com/media/oral-history/caltech-2025/episode-2-2025-04-02.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <a href="https://www.listwinventures.com/media/oral-history/caltech-2025/episode-2-2025-04-02-transcript.txt" class="inline-block text-primary hover:text-primary-dark hover:underline">
            Episode transcript (TXT)
          </a>

          <ul class="list-disc space-y-1 pl-5 text-sm">
            <li>Growing up in Saskatchewan; early work ethic and entrepreneurship</li>
            <li>Engineering education and early networking sales/product lessons</li>
            <li>How early personal experiences shaped later leadership instincts</li>
            <li>A ground-level operating lens built from factory work, field sales, and product management discipline</li>
          </ul>
        </article>

        <article class="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 text-gray-700">
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-dark">Episode 3 — April 7, 2025</h3>
            <p class="text-sm font-medium text-gray-600">Cisco years: product rigor, acquisitions, and the internet boom</p>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Runtime: 1h 04m</p>
          </div>

          <audio class="w-full" controls preload="metadata">
            <source src="https://www.listwinventures.com/media/oral-history/caltech-2025/episode-3-2025-04-07.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <a href="https://www.listwinventures.com/media/oral-history/caltech-2025/episode-3-2025-04-07-transcript.txt" class="inline-block text-primary hover:text-primary-dark hover:underline">
            Episode transcript (TXT)
          </a>

          <ul class="list-disc space-y-1 pl-5 text-sm">
            <li>Product management under hypergrowth: engineering vs sales vs customers</li>
            <li>The IBM interoperability push as a market unlock</li>
            <li>Scaling lines of business and what it takes to go from $100M → $250M → billions</li>
            <li>How release discipline, roadmap arbitration, and customer signal translated into repeatable growth</li>
          </ul>
        </article>

        <article class="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 text-gray-700">
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-dark">Episode 4 — April 28, 2025</h3>
            <p class="text-sm font-medium text-gray-600">Loss, purpose, and the next decade of early detection</p>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Runtime: 1h 18m</p>
          </div>

          <audio class="w-full" controls preload="metadata">
            <source src="https://www.listwinventures.com/media/oral-history/caltech-2025/episode-4-2025-04-28.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <a href="https://www.listwinventures.com/media/oral-history/caltech-2025/episode-4-2025-04-28-transcript.txt" class="inline-block text-primary hover:text-primary-dark hover:underline">
            Episode transcript (TXT)
          </a>

          <ul class="list-disc space-y-1 pl-5 text-sm">
            <li>His mother’s ovarian cancer story as the catalyst</li>
            <li>Why diagnostics economics are still broken—and how that affects adoption</li>
            <li>The forward bet: molecular imaging + ultrasound + AI as the next frontier</li>
            <li>A practical thesis: fix care-continuum bottlenecks first, then scale delivery economics</li>
          </ul>
        </article>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-dark">Related links</h2>
        <div class="flex flex-wrap gap-3">
          <a href="https://www.listwinventures.com/company/canary-foundation" class="inline-block text-primary hover:text-primary-dark hover:underline">
            Canary Foundation
          </a>
          <a href="https://www.listwinventures.com/oral-history" class="inline-block text-primary hover:text-primary-dark hover:underline">
            Oral History (Computer History Museum, 2018)
          </a>
          <a href="https://www.listwinventures.com/press" class="inline-block text-primary hover:text-primary-dark hover:underline">
            Press & References
          </a>
        </div>
      </section>
    `,
    author: "Don Listwin",
    date: "2025-04-28",
    dateLabel: "Recorded",
    publishedDate: "2026-02-19",
    category: "Interview",
    tags: ["Don Listwin", "Oral History", "Caltech Heritage Project", "Canary Foundation", "Interview", "Interview Series"],
    readTime: "30 min read",
    wordCount: 1900,
    featured: true,
    originalUrl: "https://www.listwinventures.com/oral-history-caltech"
  },
];
