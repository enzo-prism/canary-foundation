import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Bird } from "lucide-react";

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
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Bird className="text-white text-xl" />
            </div>
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
            <button 
              onClick={() => scrollToSection("about")}
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("programs")}
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection("impact")}
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              Impact
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-dark hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
            <Button className="bg-primary text-white hover:bg-primary-dark">
              Donate Now
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
                About
              </button>
              <button 
                onClick={() => scrollToSection("programs")}
                className="text-dark hover:text-primary transition-colors duration-300 text-left"
              >
                Research
              </button>
              <button 
                onClick={() => scrollToSection("impact")}
                className="text-dark hover:text-primary transition-colors duration-300 text-left"
              >
                Impact
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-dark hover:text-primary transition-colors duration-300 text-left"
              >
                Contact
              </button>
              <Button className="bg-primary text-white hover:bg-primary-dark w-full">
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
