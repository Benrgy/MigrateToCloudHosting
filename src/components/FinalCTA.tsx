
export const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden" aria-labelledby="final-cta-heading">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 id="final-cta-heading" className="text-4xl md:text-6xl font-bold mb-8">Stop Losing Money Every Day</h2>
        <p className="text-2xl mb-10 text-blue-100 max-w-4xl mx-auto">
          Every day you stay on slow shared hosting, you're losing visitors, sales, and search rankings. 
          Start your <strong>FREE 3-day trial</strong> now and see the difference in 24 hours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <a href="https://www.cloudways.com/en/?id=1384181" 
             className="inline-block px-12 py-5 bg-yellow-400 text-gray-900 text-2xl font-bold rounded-full hover:bg-yellow-500 transform hover:scale-110 transition-all duration-300 shadow-2xl"
             target="_blank" rel="noopener">
              <i className="fas fa-rocket mr-3" aria-hidden="true"></i>Start FREE Trial Now
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
          <div className="flex items-center">
            <i className="fas fa-credit-card mr-2" aria-hidden="true"></i>
            <span className="font-semibold">No Credit Card</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock mr-2" aria-hidden="true"></i>
            <span className="font-semibold">3 Days FREE</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-shield-alt mr-2" aria-hidden="true"></i>
            <span className="font-semibold">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};
