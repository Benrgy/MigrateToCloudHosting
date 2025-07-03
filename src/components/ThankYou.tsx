
import { Link } from "react-router-dom";

export const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-8">
            <i className="fas fa-check text-3xl text-white" aria-hidden="true"></i>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl mb-8 text-blue-100">
            Your free migration assessment request has been received. Our experts will analyze your website and send you a detailed migration plan within 24 hours.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">What happens next?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Analysis (2-4 hours)</h3>
                  <p className="text-sm text-blue-100">We'll analyze your current hosting setup, website size, and migration requirements.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Custom Plan (24 hours)</h3>
                  <p className="text-sm text-blue-100">You'll receive a detailed migration timeline, cost estimate, and personalized recommendations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Migration (when ready)</h3>
                  <p className="text-sm text-blue-100">Schedule your zero-downtime migration at a time that works for you.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/calculator" 
               className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 font-semibold transition-colors duration-300">
                <i className="fas fa-calculator mr-2" aria-hidden="true"></i>
                Use Migration Calculator
            </Link>
            <a href="https://www.cloudways.com/en/?id=1384181" 
               target="_blank" 
               rel="noopener"
               className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full hover:from-green-700 hover:to-blue-700 font-semibold transition-all duration-300">
                <i className="fas fa-rocket mr-2" aria-hidden="true"></i>
                Start Free Trial Now
            </a>
          </div>

          <p className="text-sm text-blue-200">
            <i className="fas fa-envelope mr-2" aria-hidden="true"></i>
            Check your email for confirmation and next steps
          </p>
        </div>
      </div>
    </div>
  );
};
