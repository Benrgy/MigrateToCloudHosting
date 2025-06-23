
export const Benefits = () => {
  const benefits = [
    {
      metric: "2.5x",
      label: "Faster Loading",
      description: "Average speed improvement after migration"
    },
    {
      metric: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable hosting with minimal downtime"
    },
    {
      metric: "24hr",
      label: "Migration Time",
      description: "Most sites migrated within 24 hours"
    },
    {
      metric: "100%",
      label: "SEO Preserved",
      description: "Rankings and traffic maintained"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Proven Results from Real Migrations
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of websites that have successfully migrated to faster, more reliable hosting
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {benefit.metric}
              </div>
              <div className="text-xl font-semibold mb-2">
                {benefit.label}
              </div>
              <div className="text-blue-100">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
