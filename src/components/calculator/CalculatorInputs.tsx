import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, DollarSign, TrendingUp, Users, Zap, ExternalLink } from "lucide-react";

interface CalculatorInputsProps {
  currentCost: number;
  setCurrentCost: (value: number) => void;
  visitors: number;
  setVisitors: (value: number) => void;
  conversionRate: number;
  setConversionRate: (value: number) => void;
  averageOrderValue: number;
  setAverageOrderValue: (value: number) => void;
  loadingTime: number;
  setLoadingTime: (value: number) => void;
  onCalculate: () => void;
}

export const CalculatorInputs = ({
  currentCost,
  setCurrentCost,
  visitors,
  setVisitors,
  conversionRate,
  setConversionRate,
  averageOrderValue,
  setAverageOrderValue,
  loadingTime,
  setLoadingTime,
  onCalculate,
}: CalculatorInputsProps) => {
  return (
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
          onClick={onCalculate}
          className="w-full text-xl py-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
        >
          <Calculator className="w-6 h-6 mr-3" />
          Reveal My Hidden Costs
        </Button>
      </CardContent>
    </Card>
  );
};