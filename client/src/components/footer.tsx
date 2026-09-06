import { Link } from "wouter";
import canaryLogo from "@assets/Canary Foundation Logo_1752513431783.webp";
import { ArrowRight, ArrowUpRight, Heart, Youtube } from "lucide-react";

const footerGroups = [
  {
    heading: "Discover Canary",
    links: [
      ["Our mission", "/about/overview"],
      ["Canary Approach", "/approach/overview"],
      ["Founder & Oral History", "/about/founders-story"],
      ["Our team", "/about/staff"],
      ["Board of Directors", "/about/board-directors"],
      ["Awards", "/about/awards"],
    ],
  },
  {
    heading: "Explore the science",
    links: [
      ["Canary Science", "/science/overview"],
      ["Prostate cancer", "/science/programs/tumors/prostate"],
      ["Ovarian cancer", "/science/programs/tumors/ovarian"],
      ["Pancreatic cancer", "/science/programs/tumors/pancreatic"],
      ["Lung cancer", "/science/programs/tumors/lung"],
      ["Research centers", "/science/centers"],
    ],
  },
  {
    heading: "Stay connected",
    links: [
      ["Research team updates", "/science/programs/team-updates"],
      ["Blog", "/blog"],
      ["Financials", "/about/financials"],
      ["Contact Canary", "/contact"],
      ["Donate", "/donate"],
    ],
  },
];

const focusStyle = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc400] focus-visible:ring-offset-4 focus-visible:ring-offset-[#242722]";

export default function Footer() {
  return (
    <footer className="bg-[#242722] text-[#fffdf7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-7 border-b border-white/15 py-12 md:flex-row md:items-center md:justify-between md:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#ffc400]">
              <Heart aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />Together, we move research forward
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">Help build a future found earlier.</h2>
          </div>
          <Link href="/donate" className={`group inline-flex min-h-12 w-fit shrink-0 items-center justify-between gap-8 rounded-lg bg-[#ffc400] px-6 py-4 font-semibold text-[#242722] transition-colors hover:bg-[#ffda47] motion-reduce:transition-none ${focusStyle}`}>
            Support the research<ArrowRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
          </Link>
        </div>

        <div className="grid gap-12 py-12 lg:grid-cols-[1.1fr_2fr] lg:gap-20 lg:py-16">
          <div className="max-w-sm">
            <Link href="/" aria-label="Canary Foundation home" className={`mb-5 flex min-h-11 w-fit items-center gap-3 rounded-lg ${focusStyle}`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fffdf7]">
                <img src={canaryLogo} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
              </span>
              <span className="text-xl font-semibold tracking-tight">Canary Foundation</span>
            </Link>
            <p className="mb-6 text-sm leading-7 text-[#c1c5ba]">
              Supporting the science of early cancer detection since 2004. Connecting researchers, institutions, and people around a shared purpose.
            </p>
            <a href="https://www.youtube.com/@canaryfoundation/videos" target="_blank" rel="noopener noreferrer"
              className={`inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-white/20 px-4 text-sm text-[#e0e3da] transition-colors hover:border-white/50 hover:bg-white/5 motion-reduce:transition-none ${focusStyle}`}
              aria-label="Visit Canary Foundation YouTube Channel (opens in a new tab)">
              <Youtube aria-hidden="true" className="h-4 w-4" />Watch on YouTube<ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.heading}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#fffdf7]">{group.heading}</h3>
                <ul>
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className={`inline-flex min-h-11 items-center rounded-sm py-2 text-sm leading-snug text-[#c1c5ba] transition-colors hover:text-[#ffc400] motion-reduce:transition-none ${focusStyle}`}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-xs leading-relaxed text-[#a8afa0] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Canary Foundation. All rights reserved.</p>
          <p>Science. Collaboration. Earlier detection.</p>
        </div>
      </div>
    </footer>
  );
}
