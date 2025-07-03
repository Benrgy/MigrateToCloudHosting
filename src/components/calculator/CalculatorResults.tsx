import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Share2 } from "lucide-react";
import { useCalculatorSharing } from "@/utils/calculator";
import { analytics } from "@/services/analytics";

interface CalculatorResultsProps {
  showResults: boolean;
  visitors: number;
  metrics: {
    lostRevenue: number;
    netBenefit: number;
    yearlyBenefit: number;
    effectiveConversionRate: number;
    loadingImpact: number;
  };
  conversionRate: number;
}

export const CalculatorResults = ({
  showResults,
  visitors,
  metrics,
  conversionRate,
}: CalculatorResultsProps) => {
  const { shareCalculator } = useCalculatorSharing();

  if (!showResults || visitors === 0) {
    return (
      <Card className="border-dashed border-gray-300">
        <CardContent className="p-12 text-center text-gray-500">
          <Calculator className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-xl mb-2">Enter your details to see results</h3>
          <p>Discover how much slow hosting is really costing your business</p>
        </CardContent>
      </Card>
    );
  }

  return (
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
            onClick={() => {
              analytics.trackCTAClick('migration_cta', 'calculator_results');
              window.open('https://www.cloudways.com/en/?id=1384181', '_blank');
            }}
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 text-xl px-8 py-4 font-bold transform hover:scale-105 transition-all duration-300"
          >
            Start FREE Migration Now
          </Button>
          <p className="text-sm mt-4 text-purple-100">
            Zero downtime • SEO protected • 24/7 support
          </p>
          <div className="mt-6 pt-4 border-t border-purple-300">
            <Button
              onClick={() => shareCalculator(metrics.lostRevenue)}
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
  );
};