
export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Stop Losing Money to Slow Hosting?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of website owners who have already made the switch to lightning-fast cloud hosting
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="https://www.cloudways.com/en/?id=1384181" 
             className="inline-block px-10 py-4 bg-yellow-400 text-gray-900 text-xl font-bold rounded-full hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300"
             target="_blank" rel="noopener">
            <i className="fas fa-rocket mr-3" aria-hidden="true"></i>Start Your Free Migration
          </a>
          <a href="#calculator" 
             className="inline-block px-10 py-4 bg-white/20 backdrop-blur-sm text-white text-xl font-bold rounded-full hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
            <i className="fas fa-calculator mr-3" aria-hidden="true"></i>Calculate Savings
          </a>
        </div>
        
        <div className="flex justify-center items-center space-x-8 text-blue-100">
          <div className="flex items-center">
            <i className="fas fa-check-circle text-green-400 mr-2" aria-hidden="true"></i>
            <span>Free 3-Day Trial</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-check-circle text-green-400 mr-2" aria-hidden="true"></i>
            <span>Zero Downtime</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-check-circle text-green-400 mr-2" aria-hidden="true"></i>
            <span>SEO Protected</span>
          </div>
        </div>
      </div>
    </section>
  );
};
