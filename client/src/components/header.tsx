import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import canaryLogo from "@assets/Canary Foundation Logo_1752513431783.webp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

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

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
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
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={navigateToHome}
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <div className="relative group">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-dark hover:text-primary transition-colors duration-300 flex items-center"
              >
                About Canary
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="/about/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Overview
                  </Link>
                  <Link href="/about/founders-story" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Founder's Story
                  </Link>
                  <Link href="/about/staff" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Staff
                  </Link>
                  <Link href="/about/board-directors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Board of Directors
                  </Link>
                  <Link href="/about/leadership-council" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Leadership Council
                  </Link>
                  <Link href="/about/scientific-leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Scientific Leadership
                  </Link>
                  <Link href="/about/financials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Financials
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button 
                onClick={() => scrollToSection("programs")}
                className="text-dark hover:text-primary transition-colors duration-300 flex items-center"
              >
                Canary Approach
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="/approach/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Overview
                  </Link>
                  <Link href="/approach/collaborations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Canary Collaborations and Partnership
                  </Link>
                  <Link href="/approach/symposium" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Canary Symposium
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button 
                onClick={() => scrollToSection("programs")}
                className="text-dark hover:text-primary transition-colors duration-300 flex items-center"
              >
                Canary Science
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="/science/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Overview
                  </Link>
                  <Link href="/science/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Science
                  </Link>
                  <Link href="/science/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Programs
                  </Link>
                  <Link href="/science/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Centers
                  </Link>
                  <Link href="/science/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Publications
                  </Link>
                  <Link href="/science/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Funding by Invitation
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              href="/blog"
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              Blog
            </Link>
            <Button 
              onClick={() => window.open('https://donorbox.org/annual-campaign-2023', '_blank')}
              className="bg-primary text-white hover:bg-primary-dark px-6 py-2 rounded-full font-semibold"
            >
              Take Action
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={navigateToHome}
                className="text-dark hover:text-primary transition-colors duration-300 text-left"
              >
                Home
              </button>
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="text-sm font-semibold text-gray-500 mb-2">About Canary</div>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Overview
                </button>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Founder's Story
                </button>
                <button 
                  onClick={() => scrollToSection("leadership")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Staff
                </button>
                <button 
                  onClick={() => scrollToSection("leadership")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Board of Directors
                </button>
                <button 
                  onClick={() => scrollToSection("leadership")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Leadership Council
                </button>
                <button 
                  onClick={() => scrollToSection("leadership")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Scientific Leadership
                </button>
                <button 
                  onClick={() => scrollToSection("financials")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left"
                >
                  Financials
                </button>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="text-sm font-semibold text-gray-500 mb-2">Canary Approach</div>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Overview
                </button>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Collaborations & Partnership
                </button>
                <button 
                  onClick={() => scrollToSection("events")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left"
                >
                  Canary Symposium
                </button>
              </div>
              <div className="border-l-2 border-gray-200 pl-4">
                <div className="text-sm font-semibold text-gray-500 mb-2">Canary Science</div>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Overview
                </button>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Science
                </button>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Programs
                </button>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Centers
                </button>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left mb-2"
                >
                  Publications
                </button>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="block text-dark hover:text-primary transition-colors duration-300 text-left"
                >
                  Funding by Invitation
                </button>
              </div>
              <Link 
                href="/blog"
                className="text-dark hover:text-primary transition-colors duration-300 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Button 
                onClick={() => {
                  window.open('https://donorbox.org/annual-campaign-2023', '_blank');
                  setIsMenuOpen(false);
                }}
                className="bg-primary text-white hover:bg-primary-dark w-full font-semibold"
              >
                Take Action
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
