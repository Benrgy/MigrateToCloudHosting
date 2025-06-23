
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const Calculator = () => {
  const [currentCost, setCurrentCost] = useState<number>(0);
  const [visitors, setVisitors] = useState<number>(0);
  const [conversionRate, setConversionRate] = useState<number>(2);

  const calculateSavings = () => {
    const lostRevenue = visitors * (conversionRate / 100) * 50; // Assuming $50 average order value
    const cloudCost = 12; // Basic cloud hosting cost
    const monthlySavings = lostRevenue - cloudCost;
    return Math.max(0, monthlySavings);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Potential Savings
            </h2>
            <p className="text-xl text-gray-600">
              See how much money slow hosting is costing you every month
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Quick Migration Savings Calculator</CardTitle>
              <CardDescription>
                Calculate the cost of staying on slow shared hosting
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-cost">Current Monthly Hosting Cost ($)</Label>
                <Input
                  id="current-cost"
                  type="number"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(Number(e.target.value))}
                  placeholder="e.g., 10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="visitors">Monthly Website Visitors</Label>
                <Input
                  id="visitors"
                  type="number"
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  placeholder="e.g., 5000"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="conversion">Current Conversion Rate (%)</Label>
                <Input
                  id="conversion"
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  placeholder="e.g., 2"
                />
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Potential Monthly Savings: ${calculateSavings().toFixed(2)}
                </h3>
                <p className="text-gray-600">
                  This is how much you could save by reducing lost sales due to slow loading times
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
                >
                  Start Your Free Migration Today
                </Button>
                <Link to="/calculator">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Advanced Calculator
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
