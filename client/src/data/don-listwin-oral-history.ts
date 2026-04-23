export const DON_LISTWIN_STORY_PATH = "/about/founders-story";

export const caltechTranscriptPdfUrl =
  "https://res.cloudinary.com/dhqpqfw6w/image/upload/v1771359675/Don_Listwin_xojqyi.pdf";
export const caltechTranscriptTxtUrl =
  "https://www.listwinventures.com/media/oral-history/caltech-2025/transcript-full.txt";

export type DonListwinStoryPillarIcon = "heart" | "systems" | "team" | "imaging";

export type DonListwinStoryPillar = {
  title: string;
  description: string;
  icon: DonListwinStoryPillarIcon;
};

export type DonListwinOralHistoryEpisode = {
  title: string;
  date: string;
  subtitle: string;
  runtime: string;
  audioUrl: string;
  transcriptUrl: string;
  highlights: string[];
};

export type DonListwinExternalInterview = {
  title: string;
  year: string;
  description: string;
  embedUrl: string;
  watchUrl: string;
  transcriptPdfUrl: string;
  summaryPoints: string[];
};

export const oralHistoryHeroMetrics = [
  {
    value: "2004",
    label: "Canary Foundation founded",
    description: "Don Listwin launched Canary after his mother Grace died from late-stage ovarian cancer.",
  },
  {
    value: "4",
    label: "Caltech oral history episodes",
    description: "Recorded March-April 2025 with David Zierler for the Caltech Heritage Project.",
  },
  {
    value: "2018",
    label: "Computer History Museum interview",
    description: "A broader career retrospective covering Cisco, Openwave, leadership, and philanthropy.",
  },
] as const;

export const donListwinStoryPillars: DonListwinStoryPillar[] = [
  {
    title: "Grace Listwin's story changed the mission",
    description:
      "Don's mother was twice treated for a bladder infection before doctors discovered late-stage ovarian cancer. That experience turned early detection from an abstract idea into a personal mandate.",
    icon: "heart",
  },
  {
    title: "He brought systems thinking from tech into science",
    description:
      "After building markets and operating at Cisco and Openwave, Don approached cancer early detection like an engineering and market-development problem that could be organized, funded, and accelerated.",
    icon: "systems",
  },
  {
    title: "Canary's model is team science with leverage",
    description:
      "The oral history explains why Canary focused on seed funding, shared milestones, and cross-institution teams that could turn early data into much larger grants and sustained programs.",
    icon: "team",
  },
  {
    title: "The goal is action, not just a signal",
    description:
      "A recurring theme is the two-step model: a biomarker or blood-based signal should lead to confirmatory imaging or another action path that gives clinicians confidence to intervene early.",
    icon: "imaging",
  },
];

export const oralHistoryThemes = [
  "How lessons from Cisco's growth era shaped Canary's culture of execution, milestones, and interdisciplinary collaboration.",
  "Why early detection was the strategic wedge: better outcomes, lower burden, and a path to real population impact.",
  "How Canary used seed capital to unlock larger institutional funding and recruit researchers into a field that once felt too risky.",
  "Why biomarker plus imaging remains a practical model for moving from a promising signal to a clinical decision.",
  "Where Don believes AI can help most in the near term: imaging, pathology, workflow, and care-continuum bottlenecks.",
];

export const oralHistoryEpisodes: DonListwinOralHistoryEpisode[] = [
  {
    title: "Episode 1 - From Cisco to Canary",
    date: "March 25, 2025",
    subtitle: "Building early detection as a system",
    runtime: "1h 04m",
    audioUrl:
      "https://www.listwinventures.com/media/oral-history/caltech-2025/episode-1-2025-03-25.mp3",
    transcriptUrl:
      "https://www.listwinventures.com/media/oral-history/caltech-2025/episode-1-2025-03-25-transcript.txt",
    highlights: [
      "Why the two-step early detection model matters: biomarker plus imaging, not signal alone.",
      "How small catalytic grants helped researchers generate data and win much larger awards.",
      "What progress in early detection looks like today and where the bottlenecks still are.",
      "How the first gifts to Fred Hutch established Canary's early team-science model.",
    ],
  },
  {
    title: "Episode 2 - Origins",
    date: "April 2, 2025",
    subtitle: "Family, Canada, and the making of a builder",
    runtime: "1h 00m",
    audioUrl:
      "https://www.listwinventures.com/media/oral-history/caltech-2025/episode-2-2025-04-02.mp3",
    transcriptUrl:
      "https://www.listwinventures.com/media/oral-history/caltech-2025/episode-2-2025-04-02-transcript.txt",
    highlights: [
      "Growing up in Saskatchewan and developing an early work ethic rooted in family and operations.",
      "Engineering education and the product, sales, and market lessons that shaped his management style.",
      "The personal experiences that later informed how he built teams and handled risk.",
      "A practical operating lens formed long before Cisco, from factory floors to field relationships.",
    ],
  },
  {
    title: "Episode 3 - Cisco Years",
    date: "April 7, 2025",
    subtitle: "Product rigor, acquisitions, and the internet boom",
    runtime: "1h 04m",
    audioUrl:
      "https://www.listwinventures.com/media/oral-history/caltech-2025/episode-3-2025-04-07.mp3",
    transcriptUrl:
      "https://www.listwinventures.com/media/oral-history/caltech-2025/episode-3-2025-04-07-transcript.txt",
    highlights: [
      "How product management worked under hypergrowth: roadmap arbitration between engineering, sales, and customers.",
      "The IBM interoperability push as an example of market creation, not just product delivery.",
      "What it took to grow lines of business from early traction to multibillion-dollar scale.",
      "How customer signal, release discipline, and acquisition strategy created repeatable growth.",
    ],
  },
  {
    title: "Episode 4 - Loss, Purpose, and the Next Decade",
    date: "April 28, 2025",
    subtitle: "The personal catalyst behind Canary's mission",
    runtime: "1h 18m",
    audioUrl:
      "https://www.listwinventures.com/media/oral-history/caltech-2025/episode-4-2025-04-28.mp3",
    transcriptUrl:
      "https://www.listwinventures.com/media/oral-history/caltech-2025/episode-4-2025-04-28-transcript.txt",
    highlights: [
      "Grace Listwin's ovarian cancer experience as the defining catalyst for Canary Foundation.",
      "Why diagnostics economics remain difficult and how that affects real-world adoption.",
      "Why imaging, ultrasound, and AI look like the next frontier for practical early detection.",
      "A thesis for the future: remove care-continuum bottlenecks first, then scale delivery.",
    ],
  },
];

export const computerHistoryMuseumInterview: DonListwinExternalInterview = {
  title: "Computer History Museum Oral History",
  year: "2018",
  description:
    "A broader interview on Don Listwin's early career, Cisco growth years, Openwave, leadership lessons, and the origin of Canary Foundation.",
  embedUrl: "https://www.youtube.com/embed/WEHJnQ2XtN8",
  watchUrl: "https://www.youtube.com/watch?v=WEHJnQ2XtN8",
  transcriptPdfUrl:
    "https://archive.computerhistory.org/resources/access/text/2018/11/102738862-05-01-acc.pdf",
  summaryPoints: [
    "Early life in Saskatoon and the move toward networking work during the Ethernet boom.",
    "Joining Cisco in 1990 and helping shape product management, acquisitions, and market expansion.",
    "Leading Openwave through the dot-com collapse and reflecting on resilience under pressure.",
    "Founding Canary Foundation after his mother's misdiagnosed ovarian cancer.",
    "A long-view perspective on entrepreneurship, reinvention, and engineering's role in medicine.",
  ],
};

const renderEpisodeSummaryHtml = (episode: DonListwinOralHistoryEpisode) => {
  const highlights = episode.highlights
    .map((highlight) => `<li>${highlight}</li>`)
    .join("");

  return `
    <article class="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 text-gray-700">
      <div class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Recorded ${episode.date}</p>
        <h3 class="text-xl font-semibold text-dark">${episode.title}</h3>
        <p class="text-sm font-medium text-gray-600">${episode.subtitle}</p>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Runtime: ${episode.runtime}</p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a href="${episode.audioUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-primary/90">
          Open audio
        </a>
        <a href="${episode.transcriptUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md border border-primary/30 px-4 py-2 text-sm font-semibold text-primary no-underline hover:bg-primary/5">
          Episode transcript
        </a>
      </div>

      <ul class="list-disc space-y-1 pl-5 text-sm">
        ${highlights}
      </ul>
    </article>
  `;
};

export function buildDonListwinOralHistoryBlogContent(
  founderStoryPath = DON_LISTWIN_STORY_PATH,
) {
  const themes = oralHistoryThemes.map((theme) => `<li>${theme}</li>`).join("");
  const episodes = oralHistoryEpisodes.map(renderEpisodeSummaryHtml).join("");

  return `
    <section class="space-y-6">
      <div class="space-y-4 rounded-2xl bg-white p-6 shadow-panel ring-1 ring-white/60">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Interview</p>
        <h1 class="text-3xl font-semibold text-dark md:text-4xl">Caltech Heritage Project Oral History (2025)</h1>
        <p class="text-gray-700">
          This interview series is now presented as part of Canary Foundation's canonical
          <a href="${founderStoryPath}" class="text-primary hover:text-primary-dark hover:underline">Founder & Oral History page</a>,
          where visitors can move from the story of Grace Listwin and Canary's origin into the full audio and transcript archive.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="${founderStoryPath}" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-primary/90">
            Visit Founder & Oral History
          </a>
          <a href="${caltechTranscriptPdfUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md border border-primary/30 px-4 py-2 text-sm font-semibold text-primary no-underline hover:bg-primary/5">
            Download full transcript
          </a>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold text-dark">What this series covers</h2>
      <ul class="list-disc pl-6 my-4 space-y-2 text-gray-700">
        ${themes}
      </ul>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold text-dark">Listen + read</h2>
      <div class="flex flex-wrap gap-3">
        <a href="${caltechTranscriptPdfUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-primary/90">
          Full transcript (PDF)
        </a>
        <a href="${caltechTranscriptTxtUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md border border-primary/30 px-4 py-2 text-sm font-semibold text-primary no-underline hover:bg-primary/5">
          Full transcript (TXT)
        </a>
        <a href="${computerHistoryMuseumInterview.watchUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md border border-primary/30 px-4 py-2 text-sm font-semibold text-primary no-underline hover:bg-primary/5">
          Earlier oral history (2018)
        </a>
      </div>
    </section>

    <section class="space-y-8">
      <h2 class="text-2xl font-semibold text-dark">Episodes</h2>
      ${episodes}
    </section>
  `;
}
