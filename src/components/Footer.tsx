
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <i className="fas fa-server mr-2" aria-hidden="true"></i>MigrateHost
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
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>24/7 Live Chat</li>
              <li>Migration Guide</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p><i className="fas fa-envelope mr-2" aria-hidden="true"></i>support@migratehost.com</p>
              <p><i className="fas fa-phone mr-2" aria-hidden="true"></i>1-800-MIGRATE</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MigrateHost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
