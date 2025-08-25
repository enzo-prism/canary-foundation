import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import canaryLogo from "@assets/Canary Foundation Logo_1752513431783.webp";
import { trackClick } from "@/lib/analytics";

// Define navigation item types
interface NavItem {
  name: string;
  path?: string | null;
  subItems?: NavItem[];
}

interface NavSection {
  path?: string | null;
  items: NavItem[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSections, setMobileOpenSections] = useState<{ [key: string]: boolean }>({});
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Navigation structure with all pages
  const navigationStructure: Record<string, NavSection> = {
    'About Canary': {
      path: null,
      items: [
        { name: 'Our Mission', path: '/about/overview' },
        { name: "Founder's Story", path: '/about/founders-story' },
        { name: 'Staff', path: '/about/staff' },
        { name: 'Board of Directors', path: '/about/board-directors' },
        { name: 'Leadership Council', path: '/about/leadership-council' },
        { name: 'Scientific Leadership', path: '/about/scientific-leadership' },
        { name: 'Financials', path: '/about/financials' }
      ]
    },
    'Canary Approach': {
      path: null,
      items: [
        { name: 'Overview', path: '/approach/overview' },
        { name: 'Collaborations & Partnership', path: '/approach/collaborations' },
        { name: 'Canary Symposium', path: '/approach/symposium' }
      ]
    },
    'Canary Science': {
      path: null,
      items: [
        { name: 'Overview', path: '/science/overview' },
        { 
          name: 'Science', 
          path: '/science/science',
          subItems: [
            { name: 'Imaging', path: '/science/science/imaging' },
            { name: 'Biomarkers', path: '/science/science/biomarkers' }
          ]
        },
        { 
          name: 'Programs', 
          path: '/science/programs',
          subItems: [
            { 
              name: 'Tumors', 
              path: '/science/programs/tumors',
              subItems: [
                { name: 'Breast', path: '/science/programs/tumors/breast' },
                { name: 'Lung', path: '/science/programs/tumors/lung' },
                { name: 'Ovarian', path: '/science/programs/tumors/ovarian' },
                { name: 'Pancreatic', path: '/science/programs/tumors/pancreatic' },
                { name: 'Prostate', path: '/science/programs/tumors/prostate' }
              ]
            },
            { 
              name: 'Clinical Progress', 
              path: '/science/programs/clinical-progress',
              subItems: [
                { name: 'Clinical Studies', path: '/science/programs/clinical-studies' }
              ]
            }
          ]
        },
        { 
          name: 'Centers', 
          path: '/science/centers',
          subItems: [
            { 
              name: 'Canary Center at Stanford', 
              path: '/science/centers/stanford',
              subItems: [
                { name: 'For Scientists', path: '/science/centers/stanford/for-scientists' },
                { name: 'Biomarkers', path: '/science/centers/stanford/biomarkers' },
                { name: 'Imaging', path: '/science/centers/stanford/imaging' }
              ]
            },
            { name: 'FHCC', path: '/science/centers/fhcc' }
          ]
        },
        { 
          name: 'Publications', 
          path: '/science/publications',
          subItems: [
            { name: 'Canary-ACS Postdoctoral Fellowships', path: '/science/publications/fellowships' },
            { name: 'Technology Seed Grants', path: '/science/publications/seed-grants' }
          ]
        }
      ]
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    if (location !== "/") {
      window.location.href = "/";
    } else {
      scrollToSection("home");
    }
    setIsMenuOpen(false);
  };

  const toggleMobileSection = (sectionName: string) => {
    setMobileOpenSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4" ref={dropdownRef}>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src={canaryLogo} 
              alt="Canary Foundation Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-dark">Canary Foundation</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={navigateToHome}
              className="text-dark hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </button>
            
            {/* Dynamic Desktop Dropdowns */}
            {Object.entries(navigationStructure).map(([sectionName, section]) => (
              <div key={sectionName} className="relative">
                <button 
                  className="text-dark hover:text-primary transition-colors duration-300 flex items-center font-medium"
                  onMouseEnter={() => setOpenDropdown(sectionName)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {sectionName}
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200" />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-300 ${
                    openDropdown === sectionName 
                      ? 'opacity-100 visible transform translate-y-0' 
                      : 'opacity-0 invisible transform -translate-y-2'
                  }`}
                  onMouseEnter={() => setOpenDropdown(sectionName)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="py-2">
                    {section.items.map((item, index) => (
                      <div key={index} className="relative group">
                        {item.path ? (
                          <Link 
                            href={item.path} 
                            className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span className="font-medium">{item.name}</span>
                            {item.subItems && <ChevronRight className="w-4 h-4 opacity-50" />}
                          </Link>
                        ) : (
                          <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 transition-colors duration-200 cursor-default">
                            <span className="font-medium">{item.name}</span>
                            {item.subItems && <ChevronRight className="w-4 h-4 opacity-50" />}
                          </div>
                        )}
                        
                        {/* Nested dropdown for sub-items */}
                        {item.subItems && (
                          <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div className="py-2">
                              {item.subItems.map((subItem, subIndex) => (
                                <div key={subIndex} className="relative group/sub">
                                  {subItem.path ? (
                                    <Link 
                                      href={subItem.path} 
                                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      <span>{subItem.name}</span>
                                      {subItem.subItems && <ChevronRight className="w-3 h-3 opacity-50" />}
                                    </Link>
                                  ) : (
                                    <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:bg-primary/5 transition-colors duration-200 cursor-default">
                                      <span>{subItem.name}</span>
                                      {subItem.subItems && <ChevronRight className="w-3 h-3 opacity-50" />}
                                    </div>
                                  )}
                                  
                                  {/* Third level dropdown */}
                                  {subItem.subItems && (
                                    <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                                      <div className="py-2">
                                        {subItem.subItems.map((thirdItem, thirdIndex) => (
                                          <Link 
                                            key={thirdIndex}
                                            href={thirdItem.path || '/'} 
                                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                                            onClick={() => setOpenDropdown(null)}
                                          >
                                            {thirdItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <Link 
              href="/blog"
              className="text-dark hover:text-primary transition-colors duration-300 font-medium"
            >
              Blog
            </Link>
            <Button 
              onClick={() => {
                trackClick('take_action_header', 'cta');
                window.open('https://donorbox.org/annual-campaign-2023', '_blank');
              }}
              className="bg-primary text-white hover:bg-primary-dark px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Take Action
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-dark p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 border-t border-gray-100 pt-6">
            <div className="max-h-96 overflow-y-auto">
              <div className="space-y-4">
                <button 
                  onClick={navigateToHome}
                  className="text-dark hover:text-primary transition-colors duration-300 text-left font-medium block w-full"
                >
                  Home
                </button>
                
                {/* Dynamic Mobile Navigation */}
                {Object.entries(navigationStructure).map(([sectionName, section]) => (
                  <div key={sectionName} className="border-l-2 border-primary/20 pl-4">
                    <button
                      onClick={() => toggleMobileSection(sectionName)}
                      className="flex items-center justify-between w-full text-left py-2"
                    >
                      <span className="text-sm font-semibold text-gray-600">{sectionName}</span>
                      <ChevronDown 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          mobileOpenSections[sectionName] ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {mobileOpenSections[sectionName] && (
                      <div className="mt-2 space-y-2">
                        {section.items.map((item, index) => (
                          <div key={index}>
                            {item.path ? (
                              <Link 
                                href={item.path}
                                className="block text-dark hover:text-primary transition-colors duration-300 text-sm py-2 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ) : (
                              <div className="text-dark text-sm py-2 font-medium">
                                {item.name}
                              </div>
                            )}
                            
                            {/* Sub-items for mobile */}
                            {item.subItems && (
                              <div className="ml-4 space-y-1">
                                {item.subItems.map((subItem, subIndex) => (
                                  <div key={subIndex}>
                                    {subItem.path ? (
                                      <Link 
                                        href={subItem.path}
                                        className="block text-gray-600 hover:text-primary transition-colors duration-300 text-xs py-1"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        • {subItem.name}
                                      </Link>
                                    ) : (
                                      <div className="text-gray-600 text-xs py-1 font-medium">
                                        • {subItem.name}
                                      </div>
                                    )}
                                    
                                    {/* Third level for mobile */}
                                    {subItem.subItems && (
                                      <div className="ml-4 space-y-1">
                                        {subItem.subItems.map((thirdItem, thirdIndex) => (
                                          <Link 
                                            key={thirdIndex}
                                            href={thirdItem.path || '/'}
                                            className="block text-gray-500 hover:text-primary transition-colors duration-300 text-xs py-1"
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            - {thirdItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <Link 
                  href="/blog"
                  className="text-dark hover:text-primary transition-colors duration-300 text-left font-medium block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                
                <Button 
                  onClick={() => {
                    window.open('https://donorbox.org/annual-campaign-2023', '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="bg-primary text-white hover:bg-primary-dark w-full font-semibold py-3 rounded-lg shadow-md"
                >
                  Take Action
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
