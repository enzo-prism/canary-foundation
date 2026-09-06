import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown, Heart, Menu, Microscope, Sparkles, Users, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import canaryLogo from "@assets/Canary Foundation Logo_1752513431783.webp";
import { trackClick } from "@/lib/analytics";

interface NavItem {
  name: string;
  path?: string | null;
  subItems?: NavItem[];
}

interface NavSection {
  items: NavItem[];
}

const navigationStructure: Record<string, NavSection> = {
  "About Canary": {
    items: [
      { name: "Our Mission", path: "/about/overview" },
      { name: "Founder & Oral History", path: "/about/founders-story" },
      { name: "Staff", path: "/about/staff" },
      { name: "Board of Directors", path: "/about/board-directors" },
      { name: "Leadership Council", path: "/about/leadership-council" },
      { name: "Scientific Leadership", path: "/about/scientific-leadership" },
      {
        name: "Awards",
        path: "/about/awards",
        subItems: [
          { name: "Don Listwin Award", path: "/about/awards/listwin" },
          {
            name: "Sanjiv “Sam” Gambhir Memorial Award",
            path: "/about/awards/gambhir",
          },
        ],
      },
      { name: "Financials", path: "/about/financials" },
    ],
  },
  "Canary Approach": {
    items: [
      { name: "Overview", path: "/approach/overview" },
    ],
  },
  "Canary Science": {
    items: [
      { name: "Overview", path: "/science/overview" },
      { name: "Funding by Invitation", path: "/science/funding-by-invitation" },
      {
        name: "Programs",
        path: "/science/programs",
        subItems: [
          {
            name: "Tumors",
            path: "/science/programs/tumors",
            subItems: [
              { name: "Lung", path: "/science/programs/tumors/lung" },
              { name: "Ovarian", path: "/science/programs/tumors/ovarian" },
              { name: "Pancreatic", path: "/science/programs/tumors/pancreatic" },
              { name: "Prostate", path: "/science/programs/tumors/prostate" },
            ],
          },
          {
            name: "Clinical Progress",
            path: "/science/programs/clinical-progress",
            subItems: [
              { name: "Clinical Studies", path: "/science/programs/clinical-studies" },
            ],
          },
          { name: "Team Updates", path: "/science/programs/team-updates" },
        ],
      },
      {
        name: "Centers",
        path: "/science/centers",
        subItems: [
          {
            name: "Canary Center at Stanford",
            path: "/science/centers/stanford",
            subItems: [
              { name: "For Scientists", path: "/science/centers/stanford/for-scientists" },
              { name: "Biomarkers", path: "/science/centers/stanford/biomarkers" },
              { name: "Imaging", path: "/science/centers/stanford/imaging" },
            ],
          },
          { name: "FHCC", path: "/science/centers/fhcc" },
        ],
      },
    ],
  },
};

function pathIsActive(location: string, path?: string | null) {
  if (!path) return false;
  return path === "/" ? location === path : location === path || location.startsWith(`${path}/`);
}

const focusStyle = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b38600] focus-visible:ring-offset-2";

function NavItems({ items, location, onNavigate, depth = 0 }: {
  items: NavItem[];
  location: string;
  onNavigate: () => void;
  depth?: number;
}) {
  return (
    <ul className={depth === 0 ? "space-y-1" : "ml-3 space-y-1 border-l border-black/10 pl-2"}>
      {items.map((item) => (
        <li key={item.path ?? item.name}>
          {item.path && (
            <Link href={item.path} onClick={onNavigate}
              aria-current={location === item.path ? "page" : undefined}
              className={`flex min-h-11 items-center rounded-lg px-3 py-2 text-sm leading-snug transition-colors motion-reduce:transition-none ${focusStyle} ${location === item.path ? "bg-[#ffc400]/20 font-semibold text-[#242722]" : "text-[#50544b] hover:bg-black/[0.04] hover:text-[#242722]"}`}>
              {item.name}
              {location === item.path && <span aria-hidden="true" className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a6800]" />}
            </Link>
          )}
          {item.subItems && <NavItems items={item.subItems} location={location} onNavigate={onNavigate} depth={depth + 1} />}
        </li>
      ))}
    </ul>
  );
}

const sectionDetails = {
  "About Canary": { icon: Users, text: "The people and purpose behind the science.", href: "/about/overview" },
  "Canary Approach": { icon: Sparkles, text: "Collaboration with a shared purpose: earlier detection.", href: "/approach/overview" },
  "Canary Science": { icon: Microscope, text: "Explore the programs, people, and places advancing early detection.", href: "/science/overview" },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSections, setMobileOpenSections] = useState<Record<string, boolean>>({});
  const [location] = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const desktopButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };
    const breakpoint = window.matchMedia("(min-width: 1280px)");
    const closeOnResize = () => { setOpenDropdown(null); setIsMenuOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    breakpoint.addEventListener("change", closeOnResize);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      breakpoint.removeEventListener("change", closeOnResize);
    };
  }, []);

  useEffect(() => { setIsMenuOpen(false); setOpenDropdown(null); }, [location]);
  useEffect(() => {
    if (isMenuOpen) mobileMenuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
  }, [isMenuOpen]);

  const closeMenus = () => { setOpenDropdown(null); setIsMenuOpen(false); };
  const handleEscape = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Escape") return;
    if (isMenuOpen) { event.preventDefault(); setIsMenuOpen(false); mobileToggleRef.current?.focus(); }
    else if (openDropdown) { event.preventDefault(); desktopButtonRefs.current[openDropdown]?.focus(); setOpenDropdown(null); }
  };
  const topLink = `inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-[#242722] transition-colors hover:bg-black/[0.04] motion-reduce:transition-none ${focusStyle}`;

  return (
    <>
      <a href="#main-content" className="skip-link fixed left-4 top-3 z-[100] rounded-lg bg-[#242722] px-4 py-3 font-semibold text-white shadow-lg"
        onClick={(event) => {
          const target = document.getElementById("main-content") ?? document.querySelector<HTMLElement>("main");
          if (!target) return;
          event.preventDefault();
          if (!target.hasAttribute("tabindex")) target.tabIndex = -1;
          target.focus(); target.scrollIntoView();
        }}>Skip to main content</a>
      <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-[#fffdf7]/95 backdrop-blur-lg">
        <nav ref={navRef} aria-label="Main navigation" className="container relative mx-auto px-4 py-3 sm:px-6 xl:py-4"
          onKeyDown={handleEscape}
          onBlur={(event) => {
            if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) closeMenus();
          }}>
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className={`flex min-h-11 min-w-0 items-center gap-2.5 rounded-lg sm:gap-3 ${focusStyle}`} aria-label="Canary Foundation home">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-[#ffc400]/10">
                <img src={canaryLogo} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-base font-bold tracking-tight text-[#242722] sm:text-lg">Canary Foundation</span>
                <span className="hidden text-[10px] font-medium uppercase tracking-[0.15em] text-[#65685e] sm:block">A future found earlier</span>
              </span>
            </Link>
            <div className="hidden items-center gap-1 xl:flex">
              <Link href="/" className={`${topLink} ${location === "/" ? "bg-black/[0.04]" : ""}`} aria-current={location === "/" ? "page" : undefined}>Home</Link>
              {Object.entries(navigationStructure).map(([name, section]) => {
                const id = `desktop-${name.toLowerCase().replace(/\s+/g, "-")}`;
                const isOpen = openDropdown === name;
                const details = sectionDetails[name as keyof typeof sectionDetails];
                const Icon = details.icon;
                const active = section.items.some((item) => pathIsActive(location, item.path));
                return (
                  <div key={name}>
                    <button ref={(element) => { desktopButtonRefs.current[name] = element; }} type="button"
                      className={`${topLink} gap-1.5 ${active || isOpen ? "bg-[#ffc400]/15" : ""}`}
                      aria-expanded={isOpen} aria-controls={id}
                      onClick={() => setOpenDropdown(isOpen ? null : name)}
                      onKeyDown={(event) => {
                        if (event.key !== "ArrowDown") return;
                        event.preventDefault(); setOpenDropdown(name);
                        requestAnimationFrame(() => document.getElementById(id)?.querySelector<HTMLElement>("a")?.focus());
                      }}>
                      {name}<ChevronDown aria-hidden="true" className={`h-3.5 w-3.5 transition-transform motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div id={id} className="absolute left-6 right-6 top-full mt-2 max-h-[75vh] overflow-y-auto rounded-2xl border border-black/10 bg-[#fffdf7] p-5 shadow-[0_20px_60px_-20px_rgba(30,35,25,0.25)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-1 motion-safe:duration-150">
                        <div className="grid grid-cols-[220px_1fr] gap-6">
                          <div className="rounded-xl bg-[#f2f0e6] p-5">
                            <Icon aria-hidden="true" className="mb-5 h-7 w-7 text-[#756000]" strokeWidth={1.5} />
                            <p className="mb-2 text-lg font-semibold text-[#242722]">{name}</p>
                            <p className="mb-5 text-sm leading-relaxed text-[#626659]">{details.text}</p>
                            <Link href={details.href} onClick={closeMenus} className={`inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-[#242722] ${focusStyle}`}>Explore overview <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
                          </div>
                          <div className={name === "Canary Science" ? "grid grid-cols-[0.7fr_1.2fr_1.1fr] gap-4" : name === "About Canary" ? "grid grid-cols-2 gap-4" : "max-w-sm"}>
                            {name === "Canary Science" ? <>
                              <NavItems items={section.items.filter((item) => !item.subItems)} location={location} onNavigate={closeMenus} />
                              {section.items.filter((item) => item.subItems).map((item) => <NavItems key={item.path} items={[item]} location={location} onNavigate={closeMenus} />)}
                            </> : name === "About Canary" ? <>
                              <NavItems items={section.items.slice(0, 4)} location={location} onNavigate={closeMenus} />
                              <NavItems items={section.items.slice(4)} location={location} onNavigate={closeMenus} />
                            </> : <NavItems items={section.items} location={location} onNavigate={closeMenus} />}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <Link href="/blog" className={`${topLink} ${pathIsActive(location, "/blog") ? "bg-black/[0.04]" : ""}`} aria-current={location === "/blog" ? "page" : undefined}>Blog</Link>
              <Link href="/contact" className={topLink} aria-current={location === "/contact" ? "page" : undefined}>Contact</Link>
              <Button asChild className="ml-3 min-h-11 rounded-lg bg-[#ffc400] px-5 font-semibold text-[#242722] shadow-none hover:bg-[#efd000]">
                <Link href="/donate" onClick={() => trackClick("take_action_header", "cta")}><Heart aria-hidden="true" className="mr-2 h-4 w-4" strokeWidth={1.7} />Take Action</Link>
              </Button>
            </div>
            <button ref={mobileToggleRef} type="button" className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-black/10 text-[#242722] hover:bg-black/[0.04] xl:hidden ${focusStyle}`}
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"} aria-expanded={isMenuOpen} aria-controls="mobile-main-menu"
              onClick={() => setIsMenuOpen((open) => !open)}>
              {isMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
            </button>
          </div>
          {isMenuOpen && (
            <div ref={mobileMenuRef} id="mobile-main-menu" className="mt-3 max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain border-t border-black/10 pb-3 pt-3 xl:hidden">
              <Link href="/" onClick={closeMenus} className={`flex min-h-12 items-center rounded-lg px-3 font-medium text-[#242722] ${focusStyle}`} aria-current={location === "/" ? "page" : undefined}>Home</Link>
              {Object.entries(navigationStructure).map(([name, section]) => {
                const id = `mobile-${name.toLowerCase().replace(/\s+/g, "-")}`;
                const isOpen = Boolean(mobileOpenSections[name]);
                const Icon = sectionDetails[name as keyof typeof sectionDetails].icon;
                return <div key={name} className="border-t border-black/[0.06]">
                  <button type="button" className={`flex min-h-14 w-full items-center gap-3 rounded-lg px-3 text-left font-semibold text-[#242722] ${focusStyle}`} aria-expanded={isOpen} aria-controls={id}
                    onClick={() => setMobileOpenSections((sections) => ({ ...sections, [name]: !sections[name] }))}>
                    <Icon aria-hidden="true" className="h-4 w-4 text-[#756000]" strokeWidth={1.7} />{name}<ChevronDown aria-hidden="true" className={`ml-auto h-4 w-4 transition-transform motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <div id={id} className="mb-3 rounded-xl bg-[#f2f0e6] p-2"><NavItems items={section.items} location={location} onNavigate={closeMenus} /></div>}
                </div>;
              })}
              <div className="grid grid-cols-2 gap-2 border-t border-black/[0.06] pt-2">
                <Link href="/blog" onClick={closeMenus} className={topLink} aria-current={location === "/blog" ? "page" : undefined}>Blog</Link>
                <Link href="/contact" onClick={closeMenus} className={topLink} aria-current={location === "/contact" ? "page" : undefined}>Contact</Link>
              </div>
              <Button asChild className="mt-3 min-h-12 w-full rounded-lg bg-[#ffc400] font-semibold text-[#242722] shadow-none hover:bg-[#efd000]">
                <Link href="/donate" onClick={() => { trackClick("take_action_mobile", "cta"); closeMenus(); }}><Heart aria-hidden="true" className="mr-2 h-4 w-4" />Take Action</Link>
              </Button>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
