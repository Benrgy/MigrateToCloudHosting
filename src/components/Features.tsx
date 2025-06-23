
export const Features = () => {
  const features = [
    {
      icon: "fas fa-rocket",
      title: "Lightning Fast Speed",
      description: "2.5x faster loading times with optimized cloud infrastructure"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Zero Downtime Migration",
      description: "Advanced cloning technology ensures your site stays online during migration"
    },
    {
      icon: "fas fa-search",
      title: "SEO Protection",
      description: "Preserve all rankings, meta data, and search engine visibility"
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Expert Support",
      description: "Dedicated migration specialists guide you through every step"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Migration Service?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional website migration with guarantees you can trust
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <i className={`${feature.icon} text-2xl`} aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
