
export const TrustIndicators = () => {
  const indicators = [
    { icon: "fas fa-certificate", text: "SSL Certified" },
    { icon: "fas fa-shield-alt", text: "SOC 2 Compliant" },
    { icon: "fas fa-award", text: "99.9% Uptime SLA" },
    { icon: "fas fa-users", text: "10,000+ Migrations" },
    { icon: "fas fa-clock", text: "24/7 Support" },
    { icon: "fas fa-money-back", text: "Money Back Guarantee" }
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Thousands</h3>
          <p className="text-gray-600">Enterprise-grade security and reliability</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-3">
                <i className={indicator.icon} aria-hidden="true"></i>
              </div>
              <p className="text-sm font-medium text-gray-700">{indicator.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
