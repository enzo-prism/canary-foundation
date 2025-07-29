
import canaryLogo from "@assets/Canary Foundation Logo_1752513431783.webp";
import { Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={canaryLogo} 
                alt="Canary Foundation Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">Canary Foundation</span>
            </div>
            <p className="text-gray-300 mb-6">
              Advancing early cancer detection through innovative research, biomarker development, and precision medicine approaches since 2004.
            </p>
            
            {/* Social Media Links */}
            <div>
              <h4 className="text-md font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.youtube.com/@canaryfoundation/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors duration-300"
                  aria-label="Visit Canary Foundation YouTube Channel"
                >
                  <Youtube className="w-5 h-5" />
                  <span className="text-sm">YouTube</span>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  About Canary
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Canary Approach
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Canary Science
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("news")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Research Areas</h3>
            <ul className="space-y-3">
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Prostate Cancer</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Ovarian Cancer</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Pancreatic Cancer</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Liquid Biopsy</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Involved</h3>
            <ul className="space-y-3">
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Fund Research</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Fellowship Programs</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Partner With Us</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Research Collaboration</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Canary Foundation. All rights reserved. | 
            <button className="hover:text-primary transition-colors duration-300 ml-1">Privacy Policy</button> | 
            <button className="hover:text-primary transition-colors duration-300 ml-1">Terms of Service</button>
          </p>
        </div>
      </div>
    </footer>
  );
}
