
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, DollarSign, TrendingUp, Clock, Users, Zap, Share2, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const EnhancedCalculator = () => {
  const [currentCost, setCurrentCost] = useState<number>(0);
  const [visitors, setVisitors] = useState<number>(0);
  const [conversionRate, setConversionRate] = useState<number>(2);
  const [averageOrderValue, setAverageOrderValue] = useState<number>(50);
  const [loadingTime, setLoadingTime] = useState<number>(5);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const calculateMetrics = () => {
    // Lost revenue due to slow loading (every 1 second delay reduces conversions by 7%)
    const loadingImpact = Math.max(0, (loadingTime - 2) * 0.07);
    const effectiveConversionRate = Math.max(0.5, conversionRate - (conversionRate * loadingImpact));
    
    const monthlyRevenue = visitors * (effectiveConversionRate / 100) * averageOrderValue;
    const potentialRevenue = visitors * (conversionRate / 100) * averageOrderValue;
    const lostRevenue = potentialRevenue - monthlyRevenue;
    
    const cloudCost = 12; // Basic cloud hosting cost
    const currentHostingCost = currentCost;
    const costDifference = cloudCost - currentHostingCost;
    
    const netBenefit = lostRevenue - Math.max(0, costDifference);
    const yearlyBenefit = netBenefit * 12;
    
    return {
      monthlyRevenue,
      potentialRevenue,
      lostRevenue,
      netBenefit: Math.max(0, netBenefit),
      yearlyBenefit: Math.max(0, yearlyBenefit),
      effectiveConversionRate,
      loadingImpact: loadingImpact * 100
    };
  };

  const metrics = calculateMetrics();

  const handleCalculate = () => {
    if (visitors === 0) {
      toast({
        title: "Please enter your monthly visitors",
        description: "We need this information to calculate your potential savings.",
        variant: "destructive",
      });
      return;
    }
    setShowResults(true);
    // Smooth scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('calculator-results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const shareCalculator = async () => {
    const shareData = {
      title: 'Website Speed Cost Calculator - See How Much Slow Hosting Costs You',
      text: `I just discovered I'm losing $${metrics.lostRevenue.toFixed(0)}/month due to slow hosting! Check how much you're losing:`,
      url: window.location.href
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to copying URL
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({
        title: "Link copied!",
        description: "Calculator URL has been copied to your clipboard.",
      });
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700 px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Stop Losing Money Every Second
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Website Performance Cost Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Discover exactly how much your slow hosting is costing you in lost sales, frustrated customers, and damaged SEO rankings
            </p>
            <Button
              onClick={shareCalculator}
              variant="outline"
              className="mb-4"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share This Calculator
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <Card className="h-fit">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-2xl">
                  <Calculator className="w-6 h-6 mr-3" />
                  Enter Your Website Details
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Just a few quick questions to reveal your hidden costs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="space-y-3">
                  <Label htmlFor="visitors" className="text-lg font-semibold flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    How many visitors do you get monthly?
                  </Label>
                  <Input
                    id="visitors"
                    type="number"
                    value={visitors}
                    onChange={(e) => setVisitors(Number(e.target.value))}
                    placeholder="e.g., 5,000"
                    className="text-lg p-4 border-2 focus:border-blue-500"
                  />
                  <p className="text-sm text-gray-500">💡 Even 1,000 visitors can reveal surprising costs</p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="conversion" className="text-lg font-semibold flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    What's your conversion rate?
                  </Label>
                  <Input
                    id="conversion"
                    type="number"
                    step="0.1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    placeholder="e.g., 2.5"
                    className="text-lg p-4 border-2 focus:border-green-500"
                  />
                  <p className="text-sm text-gray-500">📊 Industry average is 2-3% (don't worry if you're not sure)</p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="order-value" className="text-lg font-semibold flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-yellow-600" />
                    Average order/lead value?
                  </Label>
                  <Input
                    id="order-value"
                    type="number"
                    value={averageOrderValue}
                    onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                    placeholder="e.g., 75"
                    className="text-lg p-4 border-2 focus:border-yellow-500"
                  />
                  <p className="text-sm text-gray-500">💰 This could be a sale, lead value, or consultation fee</p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="loading-time" className="text-lg font-semibold flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-red-600" />
                    How fast does your site load? (seconds)
                  </Label>
                  <Input
                    id="loading-time"
                    type="number"
                    step="0.1"
                    value={loadingTime}
                    onChange={(e) => setLoadingTime(Number(e.target.value))}
                    placeholder="e.g., 4.5"
                    className="text-lg p-4 border-2 focus:border-red-500"
                  />
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>⚡ Test your speed here (under 2s is ideal):</p>
                    <div className="flex flex-wrap gap-2">
                      <a 
                        href="https://gtmetrix.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 underline"
                      >
                        GTmetrix <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                      <span>•</span>
                      <a 
                        href="https://pagespeed.web.dev/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 underline"
                      >
                        Google PageSpeed <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="current-cost" className="text-lg font-semibold">
                    Current monthly hosting cost?
                  </Label>
                  <Input
                    id="current-cost"
                    type="number"
                    value={currentCost}
                    onChange={(e) => setCurrentCost(Number(e.target.value))}
                    placeholder="e.g., 8"
                    className="text-lg p-4 border-2 focus:border-purple-500"
                  />
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full text-xl py-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
                >
                  <Calculator className="w-6 h-6 mr-3" />
                  Reveal My Hidden Costs
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6" id="calculator-results">
              {showResults && visitors > 0 ? (
                <>
                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-red-800 text-2xl">💸 Money You're Losing Monthly</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-red-600 mb-2">
                        ${metrics.lostRevenue.toFixed(0)}
                      </div>
                      <p className="text-red-700">
                        Due to {metrics.loadingImpact.toFixed(1)}% conversion loss from slow loading
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-800 text-2xl">💰 Your Potential with Fast Hosting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        ${metrics.netBenefit.toFixed(0)}/month
                      </div>
                      <div className="text-2xl text-green-700 mb-2">
                        ${metrics.yearlyBenefit.toFixed(0)}/year
                      </div>
                      <p className="text-green-700">
                        Net benefit after switching to cloud hosting
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-blue-800">📊 Performance Impact</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span>Current conversion rate:</span>
                        <span className="font-semibold">{metrics.effectiveConversionRate.toFixed(2)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Potential conversion rate:</span>
                        <span className="font-semibold text-green-600">{conversionRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly revenue impact:</span>
                        <span className="font-semibold">${metrics.lostRevenue.toFixed(0)}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-2xl font-bold mb-4">
                        🚀 Ready to Stop the Bleeding?
                      </h3>
                      <p className="mb-6 text-lg">
                        Start your free 3-day migration today and see immediate results
                      </p>
                      <Button 
                        onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
                        className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 text-xl px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300"
                      >
                        Start FREE Migration Now
                      </Button>
                      <p className="text-sm mt-4 text-purple-100">
                        Zero downtime • SEO protected • 24/7 support
                      </p>
                      <div className="mt-6 pt-4 border-t border-purple-300">
                        <Button
                          onClick={shareCalculator}
                          variant="outline"
                          className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share These Results
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="border-dashed border-gray-300">
                  <CardContent className="p-12 text-center text-gray-500">
                    <Calculator className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-xl mb-2">Enter your details to see results</h3>
                    <p>Discover how much slow hosting is really costing your business</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
