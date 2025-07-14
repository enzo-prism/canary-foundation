import { Bird } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

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
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Bird className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold">Canary Foundation</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering communities worldwide through sustainable development programs and collaborative partnerships.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </button>
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
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("impact")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Impact Stories
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
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Education & Literacy</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Healthcare Access</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Economic Empowerment</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Emergency Response</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Involved</h3>
            <ul className="space-y-3">
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Donate</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Volunteer</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Partner With Us</button></li>
              <li><button className="text-gray-300 hover:text-primary transition-colors duration-300">Newsletter</button></li>
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
