export type TeamUpdateIcon =
  | "dna"
  | "microscope"
  | "shield-check"
  | "stethoscope"
  | "users";

export interface TeamUpdateHighlight {
  label: string;
  title: string;
  text: string;
}

export interface TeamUpdateStrategy {
  icon: TeamUpdateIcon;
  title: string;
  purpose: string;
  progress: string;
}

export interface TeamUpdateFeature {
  icon: TeamUpdateIcon;
  title: string;
  text: string;
  link?: {
    href: string;
    label: string;
  };
}

export interface PublishedTeamUpdate {
  id: string;
  status: "published";
  approvedForPublicUse: true;
  slug: string;
  route: string;
  teamName: string;
  dateLabel: string;
  title: string;
  summary: string;
  introduction: readonly string[];
  highlightsTitle: string;
  highlights: readonly TeamUpdateHighlight[];
  strategySectionTitle: string;
  strategySectionSummary: string;
  strategies: readonly TeamUpdateStrategy[];
  features?: readonly TeamUpdateFeature[];
  evidence?: {
    title: string;
    paragraphs: readonly string[];
    image: {
      src: string;
      alt: string;
      caption: string;
    };
  };
  lookingAheadTitle: string;
  lookingAhead: string;
  programRoute: string;
  programLinkLabel: string;
  sourceLabel: string;
  sourceFileName: string;
  sourcePdfDownloadApproved: boolean;
}

export const ovarianJune2026Update: PublishedTeamUpdate = {
  id: "ovarian-june-2026",
  status: "published",
  approvedForPublicUse: true,
  slug: "ovarian-june-2026",
  route: "/science/programs/team-updates/ovarian-june-2026",
  teamName: "Ovarian Cancer Team",
  dateLabel: "June 2026",
  title:
    "Advancing Earlier Detection and Prevention of High-Grade Serous Ovarian Cancer",
  summary:
    "The Canary Ovarian Cancer Team is advancing blood biomarkers, precursor-lesion biology, preventive surgery, personalized risk resources, and imaging.",
  introduction: [
    "High-grade serous ovarian cancer is the most common and aggressive form of ovarian cancer. Because most women are still diagnosed at a late, hard-to-treat stage, the Canary Ovarian Cancer Team is focused on finding cancer sooner and expanding practical prevention.",
    "A core insight now shapes the program: many of these cancers begin in the fallopian tubes. What began as a discovery about cancer origin is now guiding work in blood biomarkers, precursor-lesion biology, preventive surgery, personalized risk resources, and imaging.",
  ],
  highlightsTitle: "Key Progress Signals",
  highlights: [
    {
      label: "37",
      title: "candidate biomarkers nominated",
      text: "The team used computational approaches and prior studies, including Precancer Atlas work, to nominate candidates for early detection testing.",
    },
    {
      label: "5",
      title: "ovarian-cell-specific signals",
      text: "Laboratory testing on 20 candidates identified five that appear to be present only in ovarian cells.",
    },
    {
      label: "0.973",
      title: "AUC for the four-marker panel",
      text: "The strongest initial blood panel combined FTC1p, FTC2, CA125, and HE4 across a 160-sample case-control cohort.",
    },
    {
      label: "365+",
      title: "STIC lesions assembled",
      text: "The international STIC network has built the world's largest collection of these rare fallopian tube precursor lesions.",
    },
  ],
  strategySectionTitle: "Five-Part Research Strategy",
  strategySectionSummary:
    "The ovarian update is organized around five connected strategies: find earlier signals, understand which lesions become dangerous, expand prevention, support personalized decisions, and improve imaging.",
  strategies: [
    {
      icon: "dna",
      title: "Earlier blood-based detection markers",
      purpose:
        "Find molecules that appear in blood early enough to detect cancer before symptoms develop.",
      progress:
        "The team generated the Ovarian Precancer Atlas, built a pipeline from fallopian tube biology to blood testing, nominated 37 candidate biomarkers, tested 20 in the lab, and identified five ovarian-cell-specific signals. FTC1p and FTC2 are now priority markers for deeper blood-sample validation.",
    },
    {
      icon: "microscope",
      title: "Understanding which lesions become dangerous",
      purpose:
        "Learn which early fallopian tube lesions progress to aggressive cancer and which remain harmless.",
      progress:
        "The international STIC network now spans 20 participating institutions and has assembled the world's largest collection of these rare fallopian tube precursor lesions, totaling more than 365 cases. The team has completed molecular profiling on 36 STIC samples and built a centralized REDCap database to integrate pathology, molecular, and clinical outcome data.",
    },
    {
      icon: "shield-check",
      title: "Expanding preventive surgery approaches",
      purpose:
        "Prevent ovarian cancer through salpingectomy — removing the fallopian tubes while preserving the ovaries and their hormone function.",
      progress:
        "A multidisciplinary team of surgeons, gynecologic oncologists, health-outcomes researchers, and communication experts is working with the Michigan Surgical Quality Collaborative to promote fallopian tube removal during non-gynecologic abdominal surgeries as a statewide quality initiative for 2026-2027. Starting at the University of Michigan and backed by new philanthropic and grant support, the group is addressing billing, surgeon training, consent, and pathology workflows before the first pilot procedures begin in late 2026, with later expansion across Michigan and into Washington state under exploration.",
    },
    {
      icon: "users",
      title: "Personalized risk reduction resources",
      purpose:
        "Give women and clinicians clearer tools for prevention, early detection, and informed decision-making.",
      progress:
        "The team is building an ovarian cancer risk calculator, patient-friendly education, and links to current resources, clinical studies, and trials. Work includes collaborating with international experts to update CRUK/Cambridge's validated CanRisk platform, running focus groups for average-risk women, and evaluating regulatory and launch requirements.",
    },
    {
      icon: "stethoscope",
      title: "Ultrasound and MR-based imaging strategies",
      purpose:
        "Develop imaging methods that can directly visualize fallopian tubes and detect tiny early lesions, complementing the emerging blood tests and improving diagnostic accuracy.",
      progress:
        "The team has an IRB-approved protocol for high-frequency and intravascular ultrasound imaging of surgically removed fallopian tubes, submitted a first-of-its-kind 2D and 3D microbubble contrast-enhanced ultrasound study for high-risk patients, and evaluated an advanced MR diffusion model on 44 patients.",
    },
  ],
  evidence: {
    title: "Early Blood Test Evidence",
    paragraphs: [
      "The report's clearest visual evidence is the biomarker panel chart. It shows that combining the known markers CA125 and HE4 with the newly discovered FTC1p and FTC2 improves the team's ability to distinguish ovarian cancer cases from healthy controls in an initial cohort of 160 blood samples — 90 from ovarian cancer patients and 60 from healthy women.",
      "This is still validation-stage science, so we frame it as encouraging progress rather than a finished screening test. The next step is testing these markers in blood collected up to years before diagnosis to confirm whether they can detect cancer earlier.",
    ],
    image: {
      src: "/team-updates/ovarian-biomarker-panel-roc.png",
      alt: "Four receiver operating characteristic charts comparing ovarian cancer biomarker panel performance.",
      caption:
        "Initial case-control results: FTC1p alone showed AUC 0.899; FTC1p plus FTC2 showed AUC 0.944; adding CA125 increased AUC to 0.972; adding HE4 reached AUC 0.973.",
    },
  },
  lookingAheadTitle: "Looking Ahead",
  lookingAhead:
    "The next wave of work includes expanding blood biomarker validation, beginning fallopian tube ultrasound studies in summer 2026, scaling prevention implementation efforts statewide, and continuing to build the STIC network and centralized data infrastructure.",
  programRoute: "/science/programs/tumors/ovarian",
  programLinkLabel: "Explore Ovarian Research",
  sourceLabel:
    "Canary Foundation Ovarian Cancer Team Progress Report, June 2026.",
  sourceFileName: "Canary Ovary Team Progress_June2026_final.pdf",
  sourcePdfDownloadApproved: false,
};

export const prostateJuly2026Update: PublishedTeamUpdate = {
  id: "prostate-july-2026",
  status: "published",
  approvedForPublicUse: true,
  slug: "prostate-july-2026",
  route: "/science/programs/team-updates/prostate-july-2026",
  teamName: "Prostate Cancer Team",
  dateLabel: "July 2026",
  title: "Transforming the Future of Prostate Cancer Care",
  summary:
    "The Canary Prostate Cancer Team is advancing active surveillance, inherited-risk screening, imaging, and patient-centered tools to improve care decisions.",
  introduction: [
    "The Canary Prostate Cancer Team is working to ensure that cancers unlikely to cause harm are not overtreated, while life-threatening cancers are detected and treated early, when cure is most likely.",
    "The program combines clinical studies, biomarkers, advanced imaging, and patient-centered tools to help patients and physicians make more confident care decisions.",
  ],
  highlightsTitle: "Prostate Program Impact",
  highlights: [
    {
      label: "2,500+",
      title: "PASS participants",
      text: "The world's largest multi-institutional active surveillance cohort spans 11 sites.",
    },
    {
      label: "65+",
      title: "peer-reviewed publications",
      text: "PASS findings are cited in major international guidelines and influence treatment decisions for tens of thousands of men each year.",
    },
    {
      label: "$28M+",
      title: "external grant funding",
      text: "PASS has generated more than $28 million in external grant funding.",
    },
    {
      label: "500+",
      title: "PATROL participants",
      text: "Men with elevated genetic risk are enrolled across seven U.S. sites.",
    },
  ],
  strategySectionTitle: "Four-Part Prostate Research Strategy",
  strategySectionSummary:
    "The team is connecting active surveillance, inherited-risk screening, prostate-specific imaging, and patient-centered tools to improve early detection and treatment decisions.",
  strategies: [
    {
      icon: "shield-check",
      title: "Distinguishing cancers that need treatment",
      purpose:
        "Identify biomarkers and tools that separate favorable-risk cancers from aggressive disease.",
      progress:
        "Canary PASS follows men with early-stage, low-risk prostate cancer who choose active surveillance. The study has reduced treatment of favorable-risk cancers by 50%, and its findings are cited in major international guidelines.",
    },
    {
      icon: "dna",
      title: "Screening men with inherited risk",
      purpose:
        "Establish evidence-based screening for men at genetic risk of aggressive prostate cancer.",
      progress:
        "Canary PATROL has enrolled more than 500 men across seven U.S. sites, advanced MR imaging for high-risk screening, refined PSA thresholds for biopsy decisions, and helped define how imaging and biomarkers should be used for genetically high-risk populations. The work has support from the National Institutes of Health and CureBRCA and received Best Poster at the 2026 American Urological Association Annual Meeting.",
    },
    {
      icon: "microscope",
      title: "Prostate-specific imaging",
      purpose:
        "Develop imaging tools that identify aggressive disease earlier and support more precise care decisions.",
      progress:
        "MRI images from more than 1,000 PASS participants are being collected across U.S. and Canadian sites for an AI platform designed to map the prostate, detect lesions, and extract imaging features. The SOUND project is also developing handheld quantitative ultrasound and preparing a 100-participant pilot for fall 2026 at the University of California San Diego with the Canary Translational Ultrasound Center at UCSD.",
    },
    {
      icon: "users",
      title: "Patient-centered tools",
      purpose:
        "Make prostate cancer information easier to understand and support shared decisions between patients and physicians.",
      progress:
        "An initial Prostate Biopsy Viewer model turns text-based pathology reports into a visual guide showing where tissue was sampled and what each biopsy found. The Canary PASS Risk Calculator helps men using active surveillance estimate the risk that more serious cancer may be found in the future.",
    },
  ],
  features: [
    {
      icon: "users",
      title: "Prostate Biopsy Viewer",
      text: "Canary researchers, patient advocates, clinicians, and engineers have built an initial visual model that turns text-based pathology reports into a 3D guide to biopsy locations and results.",
    },
    {
      icon: "dna",
      title: "Canary PASS Risk Calculator",
      text: "The calculator helps men already diagnosed with prostate cancer and using active surveillance estimate the risk that more serious cancer may be found in the future.",
      link: {
        href: "https://canarypass.org",
        label: "Visit Canary PASS",
      },
    },
  ],
  lookingAheadTitle: "Prostate Team: Looking Ahead",
  lookingAhead:
    "MRI collection and AI analysis are underway across multiple U.S. and Canadian sites, and SOUND pilot studies of 100 participants are set to begin in fall 2026 at the University of California San Diego.",
  programRoute: "/science/programs/tumors/prostate",
  programLinkLabel: "Explore Prostate Research",
  sourceLabel:
    "Canary Foundation Prostate Cancer Team Program Highlights Report, July 2026.",
  sourceFileName: "Canary Prostate Program July 2026_updated.pdf",
  sourcePdfDownloadApproved: false,
};

// Only public-use-approved records belong in the browser application. Private
// shells live under internal/ so their identifiers never enter the public
// JavaScript bundle.
export const publishedTeamUpdates: readonly PublishedTeamUpdate[] = [
  prostateJuly2026Update,
  ovarianJune2026Update,
];
