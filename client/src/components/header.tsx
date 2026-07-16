import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
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
      { name: "Financials", path: "/about/financials" },
    ],
  },
  "Canary Approach": {
    items: [
      { name: "Overview", path: "/approach/overview" },
      { name: "Collaborations & Partnership", path: "/approach/collaborations" },
      { name: "Canary Symposium", path: "/approach/symposium" },
    ],
  },
  "Canary Science": {
    items: [
      { name: "Overview", path: "/science/overview" },
      {
        name: "Science",
        path: "/science/science",
        subItems: [
          { name: "Imaging", path: "/science/science/imaging" },
          { name: "Biomarkers", path: "/science/science/biomarkers" },
        ],
      },
      {
        name: "Programs",
        path: "/science/programs",
        subItems: [
          {
            name: "Tumors",
            path: "/science/programs/tumors",
            subItems: [
              { name: "Breast", path: "/science/programs/tumors/breast" },
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
      {
        name: "Publications",
        path: "/science/publications",
        subItems: [
          { name: "Canary-ACS Postdoctoral Fellowships", path: "/science/publications/fellowships" },
          { name: "Technology Seed Grants", path: "/science/publications/seed-grants" },
        ],
      },
    ],
  },
};

function pathIsActive(location: string, path?: string | null) {
  if (!path) return false;
  return path === "/" ? location === path : location === path || location.startsWith(`${path}/`);
}

function NavItems({
  items,
  location,
  onNavigate,
  depth = 0,
}: {
  items: NavItem[];
  location: string;
  onNavigate: () => void;
  depth?: number;
}) {
  return (
    <ul className={depth === 0 ? "space-y-1" : "ml-4 mt-1 space-y-1 border-l border-gray-200 pl-3"}>
      {items.map((item) => (
        <li key={`${item.name}-${item.path ?? depth}`}>
          {item.path ? (
            <Link
              href={item.path}
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10"
              aria-current={pathIsActive(location, item.path) ? "page" : undefined}
              onClick={onNavigate}
            >
              {item.name}
            </Link>
          ) : (
            <span className="block px-3 py-2 text-sm font-semibold text-gray-700">{item.name}</span>
          )}
          {item.subItems && (
            <NavItems
              items={item.subItems}
              location={location}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

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
    const handlePointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      mobileMenuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    }
  }, [isMenuOpen]);

  const closeDesktopMenu = (restoreFocus = false) => {
    const sectionName = openDropdown;
    setOpenDropdown(null);
    if (restoreFocus && sectionName) {
      desktopButtonRefs.current[sectionName]?.focus();
    }
  };

  const handleNavKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Escape") return;

    if (isMenuOpen) {
      event.preventDefault();
      setIsMenuOpen(false);
      mobileToggleRef.current?.focus();
      return;
    }

    if (openDropdown) {
      event.preventDefault();
      closeDesktopMenu(true);
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="skip-link fixed left-4 top-3 z-[100] rounded-md bg-dark px-4 py-3 font-semibold text-white shadow-lg"
        onClick={(event) => {
          const target = document.getElementById("main-content") ?? document.querySelector<HTMLElement>("main");
          if (!target || target.id === "main-content") return;

          event.preventDefault();
          if (!target.hasAttribute("tabindex")) target.tabIndex = -1;
          target.focus();
          target.scrollIntoView();
        }}
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav
          ref={navRef}
          className="container mx-auto px-4 py-4"
          aria-label="Main navigation"
          onKeyDown={handleNavKeyDown}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 rounded-md">
              <img src={canaryLogo} alt="" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold text-dark">Canary Foundation</span>
            </Link>

            <div className="hidden items-center gap-5 lg:flex">
              <Link
                href="/"
                className="rounded-md font-medium text-dark transition-colors hover:text-primary"
                aria-current={location === "/" ? "page" : undefined}
              >
                Home
              </Link>

              {Object.entries(navigationStructure).map(([sectionName, section]) => {
                const sectionId = `desktop-${sectionName.toLowerCase().replace(/\s+/g, "-")}`;
                const isOpen = openDropdown === sectionName;

                return (
                  <div key={sectionName} className="relative">
                    <button
                      ref={(element) => {
                        desktopButtonRefs.current[sectionName] = element;
                      }}
                      type="button"
                      className="flex items-center rounded-md font-medium text-dark transition-colors hover:text-primary"
                      aria-expanded={isOpen}
                      aria-controls={sectionId}
                      onClick={() => setOpenDropdown(isOpen ? null : sectionName)}
                      onKeyDown={(event) => {
                        if (event.key === "ArrowDown") {
                          event.preventDefault();
                          setOpenDropdown(sectionName);
                          requestAnimationFrame(() => {
                            document.getElementById(sectionId)?.querySelector<HTMLElement>("a")?.focus();
                          });
                        }
                      }}
                    >
                      {sectionName}
                      <ChevronDown
                        aria-hidden="true"
                        className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={sectionId}
                        className="absolute left-0 mt-3 max-h-[70vh] w-72 overflow-y-auto rounded-lg border border-gray-200 bg-white p-2 shadow-xl"
                      >
                        <NavItems
                          items={section.items}
                          location={location}
                          onNavigate={() => closeDesktopMenu()}
                        />
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                href="/blog"
                className="rounded-md font-medium text-dark transition-colors hover:text-primary"
                aria-current={pathIsActive(location, "/blog") ? "page" : undefined}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="rounded-md font-medium text-dark transition-colors hover:text-primary"
                aria-current={location === "/contact" ? "page" : undefined}
              >
                Contact
              </Link>
              <Button asChild className="rounded-full bg-primary px-6 py-2 font-semibold text-dark shadow-md hover:bg-primary-dark">
                <Link href="/donate" onClick={() => trackClick("take_action_header", "cta")}>
                  Take Action
                </Link>
              </Button>
            </div>

            <button
              ref={mobileToggleRef}
              type="button"
              className="rounded-md p-2 text-dark lg:hidden"
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-main-menu"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
              {isMenuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div
              ref={mobileMenuRef}
              id="mobile-main-menu"
              className="mt-5 max-h-[calc(100vh-7rem)] overflow-y-auto border-t border-gray-200 pt-5 lg:hidden"
            >
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="block rounded-md px-3 py-2 font-medium text-dark hover:bg-primary/10 hover:text-primary"
                    aria-current={location === "/" ? "page" : undefined}
                  >
                    Home
                  </Link>
                </li>
                {Object.entries(navigationStructure).map(([sectionName, section]) => {
                  const sectionId = `mobile-${sectionName.toLowerCase().replace(/\s+/g, "-")}`;
                  const isOpen = Boolean(mobileOpenSections[sectionName]);

                  return (
                    <li key={sectionName} className="border-l-2 border-primary/30 pl-2">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-semibold text-gray-700 hover:bg-primary/10"
                        aria-expanded={isOpen}
                        aria-controls={sectionId}
                        onClick={() =>
                          setMobileOpenSections((sections) => ({
                            ...sections,
                            [sectionName]: !sections[sectionName],
                          }))
                        }
                      >
                        {sectionName}
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isOpen && (
                        <div id={sectionId} className="mt-1">
                          <NavItems
                            items={section.items}
                            location={location}
                            onNavigate={() => setIsMenuOpen(false)}
                          />
                        </div>
                      )}
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/blog"
                    className="block rounded-md px-3 py-2 font-medium text-dark hover:bg-primary/10 hover:text-primary"
                    aria-current={pathIsActive(location, "/blog") ? "page" : undefined}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block rounded-md px-3 py-2 font-medium text-dark hover:bg-primary/10 hover:text-primary"
                    aria-current={location === "/contact" ? "page" : undefined}
                  >
                    Contact
                  </Link>
                </li>
                <li className="pt-2">
                  <Button asChild className="w-full bg-primary py-3 font-semibold text-dark shadow-md hover:bg-primary-dark">
                    <Link
                      href="/donate"
                      onClick={() => {
                        trackClick("take_action_mobile", "cta");
                        setIsMenuOpen(false);
                      }}
                    >
                      Take Action
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
