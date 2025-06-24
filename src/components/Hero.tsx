
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="hero pt-40 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <i className="fas fa-fire mr-2" aria-hidden="true"></i>Over 10,000 Successful Migrations
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8">
            Migrate from Shared Hosting 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">Without Losing Traffic, Rankings, or Sleep</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto">
            Stop losing money to slow loading times, frequent downtimes, and frustrated customers. Migrate to lightning-fast cloud hosting with <strong>ZERO downtime guaranteed</strong> and watch your conversions soar.
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-blue-100">
            <div className="flex items-center">
              <i className="fas fa-star text-yellow-400 mr-1" aria-hidden="true"></i>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-clock text-green-400 mr-1" aria-hidden="true"></i>
              <span className="font-semibold">24hr Migration</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-blue-400 mr-1" aria-hidden="true"></i>
              <span className="font-semibold">100% Uptime</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="https://www.cloudways.com/en/?id=1384181" 
               className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-2xl font-bold rounded-full hover:from-yellow-500 hover:to-orange-500 transform hover:scale-110 transition-all duration-300 shadow-2xl"
               target="_blank" rel="noopener">
                <i className="fas fa-rocket mr-3" aria-hidden="true"></i>Start FREE 3-Day Trial
            </a>
            <a href="#contact" 
               className="inline-block px-10 py-5 bg-white/20 backdrop-blur-sm text-white text-xl font-bold rounded-full hover:bg-white/30 transform hover:scale-110 transition-all duration-300 border-2 border-white/30">
                <i className="fas fa-calculator mr-3" aria-hidden="true"></i>Get Free Assessment
            </a>
          </div>
          
          <p className="text-sm text-blue-200 mt-6">
            <i className="fas fa-credit-card mr-1" aria-hidden="true"></i>No Credit Card Required • <i className="fas fa-times mr-1" aria-hidden="true"></i>Cancel Anytime • <i className="fas fa-headset mr-1" aria-hidden="true"></i>24/7 Expert Support
          </p>
        </div>
      </div>
    </section>
  );
};
