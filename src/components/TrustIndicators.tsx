
export const TrustIndicators = () => {
  const indicators = [
    { icon: "fas fa-shield-halved", text: "SSL Certified", detail: "256-bit encryption" },
    { icon: "fas fa-award", text: "SOC 2 Compliant", detail: "Enterprise security" },
    { icon: "fas fa-clock", text: "99.9% Uptime SLA", detail: "Guaranteed reliability" },
    { icon: "fas fa-users", text: "10,000+ Migrations", detail: "Successfully completed" },
    { icon: "fas fa-headset", text: "24/7 Support", detail: "Expert assistance" },
    { icon: "fas fa-money-bill-wave", text: "Money Back Guarantee", detail: "Risk-free migration" }
  ];

  const partnerLogos = [
    { name: "Cloudflare", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center" },
    { name: "Let's Encrypt", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=40&fit=crop&crop=center" },
    { name: "Google Cloud", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=40&fit=crop&crop=center" },
    { name: "AWS", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=40&fit=crop&crop=center" }
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Thousands</h3>
          <p className="text-gray-600">Enterprise-grade security and reliability</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-3">
                <i className={indicator.icon} aria-hidden="true"></i>
              </div>
              <p className="text-sm font-medium text-gray-700">{indicator.text}</p>
              <p className="text-xs text-gray-500 mt-1">{indicator.detail}</p>
            </div>
          ))}
        </div>

        {/* Partner Trust Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 font-medium">Powered by industry leaders</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Security Badges */}
        <div className="flex justify-center items-center gap-6 mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center text-sm text-gray-600">
            <i className="fas fa-lock text-green-600 mr-2" aria-hidden="true"></i>
            <span>256-bit SSL Encryption</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <i className="fas fa-certificate text-blue-600 mr-2" aria-hidden="true"></i>
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <i className="fas fa-shield-check text-purple-600 mr-2" aria-hidden="true"></i>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};
