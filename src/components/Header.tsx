
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-40" role="banner" style={{top: '40px'}}>
      <nav className="container mx-auto px-6 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300" aria-label="MigrateHost - Home">
            <i className="fas fa-server mr-2" aria-hidden="true"></i>MigrateHost
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Benefits</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Reviews</a>
            <a href="#calculator" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Calculator</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">FAQ</a>
          </div>
          <button 
            className="mobile-menu-button md:hidden" 
            aria-label="Toggle mobile menu" 
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-gray-600`} aria-hidden="true"></i>
          </button>
          <a href="https://www.cloudways.com/en/?id=1384181" 
             className="hidden md:inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
             target="_blank" rel="noopener">
             <i className="fas fa-rocket mr-2" aria-hidden="true"></i>Start Free Trial
          </a>
        </div>
        {isMobileMenuOpen && (
          <div className="mobile-menu md:hidden mt-4 bg-white rounded-lg shadow-lg absolute left-0 right-0 mx-6 p-4">
            <a href="#features" className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#benefits" className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Benefits</a>
            <a href="#testimonials" className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
            <a href="#calculator" className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Calculator</a>
            <a href="#faq" className="block py-2 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <a href="https://www.cloudways.com/en/?id=1384181" 
               className="block mt-2 px-4 py-2 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700 transition-colors duration-300"
               target="_blank" rel="noopener">Start Free Trial</a>
          </div>
        )}
      </nav>
    </header>
  );
};
