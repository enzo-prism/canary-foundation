import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import canaryLogo from "@assets/Canary Foundation Logo_1752513431783.webp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src={canaryLogo} 
              alt="Canary Foundation Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-dark">Canary Foundation</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
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
                  <button 
                    onClick={() => scrollToSection("about")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Our Mission
                  </button>
                  <button 
                    onClick={() => scrollToSection("about")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Founder's Story
                  </button>
                  <button 
                    onClick={() => scrollToSection("impact")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Impact & Success
                  </button>
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
                  <button 
                    onClick={() => scrollToSection("programs")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Overview
                  </button>
                  <button 
                    onClick={() => scrollToSection("programs")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Canary Collaborations and Partnership
                  </button>
                  <button 
                    onClick={() => scrollToSection("events")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Canary Symposium
                  </button>
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
                  <button 
                    onClick={() => scrollToSection("programs")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Overview
                  </button>
                  <button 
                    onClick={() => scrollToSection("programs")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Science
                  </button>
                  <button 
                    onClick={() => scrollToSection("programs")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Programs
                  </button>
                  <button 
                    onClick={() => scrollToSection("programs")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Centers
                  </button>
                  <button 
                    onClick={() => scrollToSection("programs")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Publications
                  </button>
                  <button 
                    onClick={() => scrollToSection("programs")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Funding by Invitation
                  </button>
                </div>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection("news")}
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              Blog
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
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
                onClick={() => scrollToSection("home")}
                className="text-dark hover:text-primary transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-dark hover:text-primary transition-colors duration-300 text-left"
              >
                About Canary
              </button>
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
              <button 
                onClick={() => scrollToSection("news")}
                className="text-dark hover:text-primary transition-colors duration-300 text-left"
              >
                Blog
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
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
