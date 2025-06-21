
export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white" aria-labelledby="features-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold mb-6">Why 10,000+ Websites Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need for a stress-free migration with guaranteed results</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <article className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-clipboard-list text-3xl text-white" aria-hidden="true"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Zero-Risk Migration</h3>
            <p className="text-gray-600 text-center">Step-by-step process with automated tools and expert support. We handle everything while you sleep peacefully.</p>
          </article>

          <article className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-green-100">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-shield-alt text-3xl text-white" aria-hidden="true"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">100% Uptime Promise</h3>
            <p className="text-gray-600 text-center">Your site stays live throughout the entire process. Not a single visitor lost, not a single sale missed.</p>
          </article>

          <article className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-search text-3xl text-white" aria-hidden="true"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">SEO Rankings Protected</h3>
            <p className="text-gray-600 text-center">Preserve every bit of SEO juice. Our proprietary system maintains all rankings and search visibility.</p>
          </article>
        </div>
      </div>
    </section>
  );
};
