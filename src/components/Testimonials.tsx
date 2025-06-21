
export const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "The migration was flawless! Our e-commerce site with 50,000+ products moved without any downtime. Page speeds improved 40% and our conversion rate increased by 23%.",
      author: "Sarah Johnson",
      title: "E-commerce Director, TechStyle",
      initials: "SJ",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      rating: 5,
      text: "24/7 support team was incredible. They handled everything while I slept. Woke up to a faster, more reliable website. All SEO rankings intact!",
      author: "Michael Chen",
      title: "CTO, Digital Solutions Inc.",
      initials: "MC",
      gradient: "from-green-500 to-blue-500"
    },
    {
      rating: 5,
      text: "Our news site serves 500K monthly visitors. Zero disruption during migration. Server response time improved from 2.8s to 0.9s. Amazing!",
      author: "Emily Rodriguez",
      title: "Operations Manager, NewsDaily",
      initials: "ER",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      rating: 5,
      text: "Migrated 12 WordPress sites in one weekend. Saved 35% on hosting costs and gained features that would cost hundreds elsewhere. ROI was immediate.",
      author: "David Thompson",
      title: "Founder, WebPress Agency",
      initials: "DT",
      gradient: "from-yellow-500 to-red-500"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it - here's what real customers experience</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex text-yellow-400 mb-4" aria-label={`${testimonial.rating} star rating`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star" aria-hidden="true"></i>
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6 text-lg">"{testimonial.text}"</blockquote>
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                  {testimonial.initials}
                </div>
                <div>
                  <cite className="font-bold not-italic">{testimonial.author}</cite>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
