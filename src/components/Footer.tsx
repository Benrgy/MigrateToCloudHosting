
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
              <i className="fas fa-server mr-2 text-blue-400" aria-hidden="true"></i>MigrateHost
            </h3>
            <p className="mb-6 text-lg">
              Professional website migration services with zero downtime guarantee. 
              Trusted by 10,000+ websites worldwide.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-400" aria-hidden="true"></i>
                <a href="mailto:bgkingdombizz2009@gmail.com" className="hover:text-white transition-colors">
                  bgkingdombizz2009@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <i className="fas fa-clock mr-3 text-green-400" aria-hidden="true"></i>
                24/7 Support Available
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Migration Services</h3>
            <nav aria-label="Migration services">
              <ul className="space-y-3">
                <li><a href="#calculator" className="hover:text-white transition-colors flex items-center">
                  <i className="fas fa-calculator mr-2 text-blue-400" aria-hidden="true"></i>Cost Calculator
                </a></li>
                <li><a href="#features" className="hover:text-white transition-colors flex items-center">
                  <i className="fas fa-rocket mr-2 text-blue-400" aria-hidden="true"></i>Zero Downtime Migration
                </a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors flex items-center">
                  <i className="fas fa-search mr-2 text-blue-400" aria-hidden="true"></i>SEO Preservation
                </a></li>
                <li><a href="https://www.cloudways.com/en/?id=1384181" className="hover:text-white transition-colors flex items-center" target="_blank" rel="noopener">
                  <i className="fas fa-cloud mr-2 text-blue-400" aria-hidden="true"></i>Cloudways Hosting
                </a></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <nav aria-label="Resources">
              <ul className="space-y-3">
                <li><a href="#faq" className="hover:text-white transition-colors flex items-center">
                  <i className="fas fa-question-circle mr-2 text-blue-400" aria-hidden="true"></i>FAQ
                </a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors flex items-center">
                  <i className="fas fa-star mr-2 text-blue-400" aria-hidden="true"></i>Success Stories
                </a></li>
                <li><a href="#disclosure" className="hover:text-white transition-colors flex items-center">
                  <i className="fas fa-info-circle mr-2 text-blue-400" aria-hidden="true"></i>Affiliate Disclosure
                </a></li>
                <li><a href="https://docs.cloudways.com/" className="hover:text-white transition-colors flex items-center" target="_blank" rel="noopener">
                  <i className="fas fa-book mr-2 text-blue-400" aria-hidden="true"></i>Migration Guides
                </a></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal & Trust</h3>
            <nav aria-label="Legal and trust">
              <ul className="space-y-3">
                <li><a href="#privacy" className="hover:text-white transition-colors flex items-center">
                  <i className="fas fa-shield-alt mr-2 text-blue-400" aria-hidden="true"></i>Privacy Policy
                </a></li>
                <li><a href="#terms" className="hover:text-white transition-colors flex items-center">
                  <i className="fas fa-file-contract mr-2 text-blue-400" aria-hidden="true"></i>Terms of Service
                </a></li>
                <li><a href="#security" className="hover:text-white transition-colors flex items-center">
                  <i className="fas fa-lock mr-2 text-blue-400" aria-hidden="true"></i>Security Policy
                </a></li>
                <li><a href="mailto:bgkingdombizz2009@gmail.com" className="hover:text-white transition-colors flex items-center">
                  <i className="fas fa-envelope mr-2 text-blue-400" aria-hidden="true"></i>Contact Us
                </a></li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 MigrateHost. All rights reserved.</p>
              <p className="text-sm mt-1">Professional Website Migration Services</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://twitter.com" className="hover:text-white transition-colors" aria-label="Follow us on Twitter">
                <i className="fab fa-twitter text-2xl" aria-hidden="true"></i>
              </a>
              <a href="https://linkedin.com" className="hover:text-white transition-colors" aria-label="Follow us on LinkedIn">
                <i className="fab fa-linkedin text-2xl" aria-hidden="true"></i>
              </a>
              <a href="https://youtube.com" className="hover:text-white transition-colors" aria-label="Subscribe to our YouTube channel">
                <i className="fab fa-youtube text-2xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
