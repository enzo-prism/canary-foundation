
import { Link } from "wouter";
import canaryLogo from "@assets/Canary Foundation Logo_1752513431783.webp";
import { Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6 w-fit">
              <img 
                src={canaryLogo} 
                alt="Canary Foundation Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">Canary Foundation</span>
            </Link>
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
                <Link href="/about/overview" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  About Canary
                </Link>
              </li>
              <li>
                <Link href="/approach/overview" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Canary Approach
                </Link>
              </li>
              <li>
                <Link href="/science/overview" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Canary Science
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about/founders-story" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Founder's Story
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Research Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/science/programs/tumors/prostate" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Prostate Cancer
                </Link>
              </li>
              <li>
                <Link href="/science/programs/tumors/ovarian" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Ovarian Cancer
                </Link>
              </li>
              <li>
                <Link href="/science/programs/tumors/pancreatic" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Pancreatic Cancer
                </Link>
              </li>
              <li>
                <Link href="/science/programs/tumors/lung" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Lung Cancer
                </Link>
              </li>
              <li>
                <Link href="/science/programs/tumors/breast" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Breast Cancer
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about/staff" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about/board-directors" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/science/centers" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Research Centers
                </Link>
              </li>
              <li>
                <Link href="/science/publications" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/about/financials" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Financials
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Canary Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
