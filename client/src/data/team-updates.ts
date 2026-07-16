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
  highlights: readonly TeamUpdateHighlight[];
  strategies: readonly TeamUpdateStrategy[];
  evidence: {
    title: string;
    paragraphs: readonly string[];
    image: {
      src: string;
      alt: string;
      caption: string;
    };
  };
  lookingAhead: string;
  programRoute: string;
  sourceLabel: string;
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
  lookingAhead:
    "The next wave of work includes expanding blood biomarker validation, beginning fallopian tube ultrasound studies in summer 2026, scaling prevention implementation efforts statewide, and continuing to build the STIC network and centralized data infrastructure.",
  programRoute: "/science/programs/tumors/ovarian",
  sourceLabel:
    "Canary Foundation Ovarian Cancer Team Progress Report, June 2026.",
};

// Only public-use-approved records belong in the browser application. Private
// shells live under internal/ so their identifiers never enter the public
// JavaScript bundle.
export const publishedTeamUpdates: readonly PublishedTeamUpdate[] = [
  ovarianJune2026Update,
];
