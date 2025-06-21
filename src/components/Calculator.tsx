
import { useState } from "react";

interface CloudwaysPlan {
  name: string;
  storage: number;
  bandwidth: number;
  price: number;
}

interface CloudwaysPlans {
  [key: string]: CloudwaysPlan[];
}

export const Calculator = () => {
  const [currentCost, setCurrentCost] = useState<number>(0);
  const [storage, setStorage] = useState<number>(0);
  const [bandwidth, setBandwidth] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(3.5);
  const [provider, setProvider] = useState<string>("");
  const [trafficGrowth, setTrafficGrowth] = useState<number>(0);
  const [paidSSL, setPaidSSL] = useState<boolean>(false);
  const [paidBackups, setPaidBackups] = useState<boolean>(false);
  const [paidCDN, setPaidCDN] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  const cloudwaysPlans: CloudwaysPlans = {
    digitalocean: [
      { name: '1GB RAM', storage: 25, bandwidth: 1000, price: 11 },
      { name: '2GB RAM', storage: 50, bandwidth: 2000, price: 24 },
      { name: '4GB RAM', storage: 80, bandwidth: 4000, price: 46 },
      { name: '8GB RAM', storage: 160, bandwidth: 5000, price: 88 }
    ],
    aws: [
      { name: '1GB RAM', storage: 25, bandwidth: 1000, price: 37 },
      { name: '2GB RAM', storage: 50, bandwidth: 2000, price: 50 },
      { name: '4GB RAM', storage: 80, bandwidth: 4000, price: 72 },
      { name: '8GB RAM', storage: 160, bandwidth: 5000, price: 114 }
    ],
    google: [
      { name: '1GB RAM', storage: 25, bandwidth: 1000, price: 33 },
      { name: '2GB RAM', storage: 50, bandwidth: 2000, price: 46 },
      { name: '4GB RAM', storage: 80, bandwidth: 4000, price: 68 },
      { name: '8GB RAM', storage: 160, bandwidth: 5000, price: 110 }
    ]
  };

  const isFormValid = currentCost > 0 && provider;

  const calculateResults = () => {
    if (!isFormValid) return;

    // Calculate total current cost
    let totalCurrentCost = currentCost;
    if (paidSSL) totalCurrentCost += 1;
    if (paidBackups) totalCurrentCost += 4;
    if (paidCDN) totalCurrentCost += 3;

    // Find recommended plan
    const plans = cloudwaysPlans[provider] || cloudwaysPlans.digitalocean;
    const growthMultiplier = 1 + (trafficGrowth / 100);
    const adjustedStorage = storage * growthMultiplier;
    const adjustedBandwidth = bandwidth * growthMultiplier;

    let recommendedPlan = plans[plans.length - 1];
    for (const plan of plans) {
      if (plan.storage >= adjustedStorage && plan.bandwidth >= adjustedBandwidth) {
        recommendedPlan = plan;
        break;
      }
    }

    setShowResults(true);
  };

  const getSpeedImprovement = () => {
    return speed > 0 ? Math.round(((speed - (speed * 0.6)) / speed) * 100) : 40;
  };

  const getNewSpeed = () => {
    return speed > 2 ? Math.round((speed * 0.6) * 10) / 10 : Math.max(1.0, Math.round((speed * 0.8) * 10) / 10);
  };

  const getTotalCurrentCost = () => {
    let total = currentCost;
    if (paidSSL) total += 1;
    if (paidBackups) total += 4;
    if (paidCDN) total += 3;
    return total;
  };

  const getRecommendedPlan = () => {
    const plans = cloudwaysPlans[provider] || cloudwaysPlans.digitalocean;
    const growthMultiplier = 1 + (trafficGrowth / 100);
    const adjustedStorage = storage * growthMultiplier;
    const adjustedBandwidth = bandwidth * growthMultiplier;

    for (const plan of plans) {
      if (plan.storage >= adjustedStorage && plan.bandwidth >= adjustedBandwidth) {
        return plan;
      }
    }
    return plans[plans.length - 1];
  };

  const getAnnualSavings = () => {
    const totalCurrent = getTotalCurrentCost();
    const recommendedPlan = getRecommendedPlan();
    return Math.round((totalCurrent - recommendedPlan.price) * 12);
  };

  return (
    <section id="calculator" className="py-24 bg-white" aria-labelledby="calculator-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <i className="fas fa-calculator mr-2" aria-hidden="true"></i>FREE TOOL
          </div>
          <h2 id="calculator-heading" className="text-4xl md:text-5xl font-bold mb-6">See How Much You'll Save & Gain</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential savings, performance improvements, and ROI when migrating from shared hosting to Cloudways cloud hosting
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl border border-blue-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Current Hosting Form */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                <h3 className="text-xl font-semibold mb-4 text-red-700">
                  <i className="fas fa-exclamation-triangle mr-2" aria-hidden="true"></i>Your Current Hosting Nightmare
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="currentCost" className="block text-sm font-medium text-gray-700 mb-1">Monthly Cost (€)</label>
                    <input 
                      type="number" 
                      id="currentCost" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="15" 
                      min="0"
                      value={currentCost || ""}
                      onChange={(e) => setCurrentCost(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  <div>
                    <label htmlFor="storage" className="block text-sm font-medium text-gray-700 mb-1">Storage Limit (GB)</label>
                    <input 
                      type="number" 
                      id="storage" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="50" 
                      min="0"
                      value={storage || ""}
                      onChange={(e) => setStorage(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  <div>
                    <label htmlFor="bandwidth" className="block text-sm font-medium text-gray-700 mb-1">Bandwidth Limit (GB/month)</label>
                    <input 
                      type="number" 
                      id="bandwidth" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="1000" 
                      min="0"
                      value={bandwidth || ""}
                      onChange={(e) => setBandwidth(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  <div>
                    <label htmlFor="speed" className="block text-sm font-medium text-gray-700 mb-1">Site Loading Speed (seconds)</label>
                    <input 
                      type="number" 
                      id="speed" 
                      step="0.1" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="3.5" 
                      min="0"
                      value={speed || ""}
                      onChange={(e) => setSpeed(parseFloat(e.target.value) || 3.5)}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Hidden Fees You're Paying Extra For:</label>
                    <div className="space-y-2">
                      <label className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
                        <input 
                          type="checkbox" 
                          id="paidSSL" 
                          className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={paidSSL}
                          onChange={(e) => setPaidSSL(e.target.checked)}
                        />
                        <span className="text-sm text-gray-700 font-medium">SSL Certificate (€1/month)</span>
                      </label>
                      <label className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
                        <input 
                          type="checkbox" 
                          id="paidBackups" 
                          className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={paidBackups}
                          onChange={(e) => setPaidBackups(e.target.checked)}
                        />
                        <span className="text-sm text-gray-700 font-medium">Backups (€4/month)</span>
                      </label>
                      <label className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
                        <input 
                          type="checkbox" 
                          id="paidCDN" 
                          className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={paidCDN}
                          onChange={(e) => setPaidCDN(e.target.checked)}
                        />
                        <span className="text-sm text-gray-700 font-medium">CDN (€3/month)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloudways Configuration */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  <i className="fas fa-rocket mr-2" aria-hidden="true"></i>Your New Cloud Paradise
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="provider" className="block text-sm font-medium text-gray-700 mb-1">Cloud Provider</label>
                    <select 
                      id="provider" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={provider}
                      onChange={(e) => setProvider(e.target.value)}
                    >
                      <option value="">Select your cloud provider</option>
                      <option value="digitalocean">DigitalOcean (Recommended)</option>
                      <option value="aws">Amazon AWS</option>
                      <option value="google">Google Cloud Platform</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="trafficGrowth" className="block text-sm font-medium text-gray-700 mb-1">Expected Traffic Growth (% in 12 months)</label>
                    <input 
                      type="number" 
                      id="trafficGrowth" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="50" 
                      min="0"
                      value={trafficGrowth || ""}
                      onChange={(e) => setTrafficGrowth(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Included FREE with Cloudways:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Free SSL Certificates</li>
                      <li>• Automated Daily Backups</li>
                      <li>• Free CloudFlare CDN</li>
                      <li>• 24/7 Expert Support</li>
                      <li>• 1-Click Scaling</li>
                      <li>• 99.99% Uptime SLA</li>
                    </ul>
                  </div>
                  
                  <button 
                    id="calculateBtn" 
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      isFormValid 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                        : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    }`}
                    disabled={!isFormValid}
                    onClick={calculateResults}
                  >
                    <i className="fas fa-calculator mr-2" aria-hidden="true"></i>Calculate My Savings & Performance Boost
                  </button>
                  {!isFormValid && (
                    <p className="text-sm text-red-600 text-center" role="alert">
                      Please fill in your current hosting cost and select a cloud provider
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Results Section */}
            {showResults && (
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-200" aria-live="polite">
                <h3 className="text-3xl font-bold text-center mb-8 text-green-700">
                  <i className="fas fa-chart-line mr-3" aria-hidden="true"></i>Your Migration Results Are In!
                </h3>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center border-2 border-green-200 shadow-lg">
                    <div className="text-3xl mb-2"><i className="fas fa-piggy-bank text-green-600" aria-hidden="true"></i></div>
                    <div className="text-3xl font-bold text-green-600">€{getAnnualSavings()}</div>
                    <div className="text-sm text-gray-600 font-medium">Annual Savings</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center border-2 border-blue-200 shadow-lg">
                    <div className="text-3xl mb-2"><i className="fas fa-tachometer-alt text-blue-600" aria-hidden="true"></i></div>
                    <div className="text-3xl font-bold text-blue-600">{getSpeedImprovement()}%</div>
                    <div className="text-sm text-gray-600 font-medium">Speed Improvement</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center border-2 border-purple-200 shadow-lg">
                    <div className="text-3xl mb-2"><i className="fas fa-shield-alt text-purple-600" aria-hidden="true"></i></div>
                    <div className="text-3xl font-bold text-purple-600">99.99%</div>
                    <div className="text-sm text-gray-600 font-medium">Uptime Guarantee</div>
                  </div>
                </div>

                {/* Detailed Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-6 flex items-center">
                      <i className="fas fa-euro-sign text-green-600 mr-3" aria-hidden="true"></i>Cost Comparison
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                        <p className="font-bold text-red-800 text-lg">😰 Current Hosting Total:</p>
                        <p className="text-2xl font-bold text-red-600">€{getTotalCurrentCost()}/month</p>
                        <p className="text-sm text-gray-600">Plus all those hidden fees!</p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                        <p className="font-bold text-green-800 text-lg">🚀 Cloudways Plan:</p>
                        <p className="text-2xl font-bold text-green-600">€{getRecommendedPlan().price}/month ({getRecommendedPlan().name})</p>
                        <p className="text-sm text-gray-600">Everything included, no surprises!</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-6 flex items-center">
                      <i className="fas fa-rocket text-blue-600 mr-3" aria-hidden="true"></i>Performance Gains
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                        <p className="font-bold text-blue-800">⚡ Loading Speed:</p>
                        <p className="text-xl font-bold">
                          <span className="text-red-600">{speed}s</span>
                          <span className="mx-2">→</span>
                          <span className="text-green-600 font-bold">{getNewSpeed()}s</span>
                        </p>
                        <p className="text-sm text-green-600">Faster = More Conversions!</p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                        <p className="font-bold text-green-800">📈 Uptime:</p>
                        <p className="text-xl font-bold">
                          <span className="text-red-600">~98%</span>
                          <span className="mx-2">→</span>
                          <span className="text-green-600">99.99%</span>
                        </p>
                        <p className="text-sm text-green-600">No more lost sales!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white p-8 rounded-2xl shadow-2xl">
                    <h4 className="text-2xl font-bold mb-4">🔥 Limited Time: 3 Days FREE Trial</h4>
                    <p className="text-lg mb-6">
                      {getAnnualSavings() >= 0 
                        ? `💰 Save €${getAnnualSavings()} annually while getting lightning-fast performance!`
                        : `🚀 Invest €${Math.abs(getAnnualSavings())} more annually for premium performance and reliability!`
                      }
                    </p>
                    <a href="https://www.cloudways.com/en/?id=1384181" 
                       className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-lg"
                       target="_blank" rel="noopener">
                        <i className="fas fa-rocket mr-2" aria-hidden="true"></i>Claim Your FREE Trial Now
                    </a>
                    <p className="text-sm mt-4 text-yellow-100">
                      <i className="fas fa-shield-alt mr-1" aria-hidden="true"></i>60-Day Money-Back Guarantee • No Setup Fees • Cancel Anytime
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
