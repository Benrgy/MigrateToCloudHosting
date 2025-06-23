
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Owner",
      company: "SarahShop.com",
      content: "The migration was seamless! My site is now 3x faster and my sales have increased by 40%. The zero-downtime promise was kept - not a single visitor noticed the switch.",
      rating: 5,
      migrationTime: "18 hours",
      improvement: "40% sales increase"
    },
    {
      name: "Mike Chen",
      role: "Blog Owner", 
      company: "TechInsights Blog",
      content: "Zero downtime as promised. My SEO rankings actually improved after the migration! Page load speeds went from 4.2s to 1.1s. My bounce rate dropped significantly.",
      rating: 5,
      migrationTime: "12 hours",
      improvement: "SEO rankings improved"
    },
    {
      name: "Lisa Rodriguez",
      role: "Agency Owner",
      company: "WebCraft Agency",
      content: "We migrate all our client sites through this service. Professional and reliable every time. The support team walks you through everything and provides detailed progress reports.",
      rating: 5,
      migrationTime: "24 hours avg",
      improvement: "100% client satisfaction"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Real results from real website owners
          </p>
          <div className="flex justify-center items-center gap-2 text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star text-lg" aria-hidden="true"></i>
            ))}
            <span className="text-gray-700 font-semibold ml-2">4.9/5</span>
          </div>
          <p className="text-sm text-gray-600">Based on 10,000+ successful migrations</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400" aria-hidden="true"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              {/* Migration Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{testimonial.migrationTime}</div>
                  <div className="text-xs text-gray-500">Migration Time</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-medium text-green-600">{testimonial.improvement}</div>
                  <div className="text-xs text-gray-500">Result</div>
                </div>
              </div>
              
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-blue-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="text-center mt-12 p-8 bg-blue-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Happy Customers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10,000+</div>
              <div className="text-sm text-gray-600">Sites Migrated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">99.8%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2.5x</div>
              <div className="text-sm text-gray-600">Speed Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
