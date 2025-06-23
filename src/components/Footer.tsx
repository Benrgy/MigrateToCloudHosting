
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <i className="fas fa-server mr-2" aria-hidden="true"></i>
              <a href="https://www.cloudways.com/en/?id=1384181" 
                 target="_blank" 
                 rel="noopener"
                 className="text-white hover:text-blue-400 transition-colors">
                Migrate From Shared Hosting To Cloud Hosting
              </a>
            </h3>
            <p className="text-gray-400">
              Professional website migration services with zero downtime guarantee.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Website Migration</li>
              <li>Cloud Hosting</li>
              <li>SEO Preservation</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Migration Guide</li>
              <li>FAQ</li>
              <li>Performance Calculator</li>
              <li>Migration Benefits</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href="https://www.cloudways.com/en/?id=1384181" 
                   target="_blank" 
                   rel="noopener"
                   className="text-blue-400 hover:text-blue-300 transition-colors">
                  <i className="fas fa-rocket mr-2" aria-hidden="true"></i>Start Your Migration
                </a>
              </p>
              <p className="text-sm">Free 3-day trial available</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024{" "}
            <a href="https://MigrateToCloudHosting.com" 
               className="text-white hover:text-blue-400 transition-colors">
              MigrateToCloudHosting.com
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
