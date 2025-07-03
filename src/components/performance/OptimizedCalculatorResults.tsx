import React, { memo, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, AlertCircle, Zap } from "lucide-react";

interface PerformanceMetric {
  label: string;
  value: string;
  impact: 'high' | 'medium' | 'low';
  description: string;
}

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  variant: 'danger' | 'success' | 'info';
  description?: string;
  metrics?: PerformanceMetric[];
}

const MetricCard = memo(({ title, value, subtitle, icon, variant, description, metrics }: MetricCardProps) => {
  const cardStyles = useMemo(() => ({
    danger: "border-red-200 bg-red-50",
    success: "border-green-200 bg-green-50", 
    info: "border-blue-200 bg-blue-50"
  }), []);

  const valueStyles = useMemo(() => ({
    danger: "text-red-600",
    success: "text-green-600",
    info: "text-blue-600"
  }), []);

  return (
    <Card className={cardStyles[variant]}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${valueStyles[variant]} mb-1`}>
          {typeof value === 'number' ? value.toLocaleString() : value}
        </div>
        {subtitle && (
          <p className="text-xs text-gray-600 mb-2">{subtitle}</p>
        )}
        {description && (
          <p className="text-sm text-gray-700">{description}</p>
        )}
        {metrics && (
          <div className="mt-4 space-y-2">
            {metrics.map((metric, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="flex items-center">
                  <Badge variant={metric.impact === 'high' ? 'destructive' : metric.impact === 'medium' ? 'default' : 'secondary'} className="mr-2 text-xs">
                    {metric.impact}
                  </Badge>
                  {metric.label}
                </span>
                <span className="font-medium">{metric.value}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
});

MetricCard.displayName = 'MetricCard';

interface OptimizedCalculatorResultsProps {
  showResults: boolean;
  visitors: number;
  metrics: {
    lostRevenue: number;
    potentialYearlySavings: number;
    timeWasted: number;
    seoImpact: number;
  };
  conversionRate: number;
}

export const OptimizedCalculatorResults = memo(({ 
  showResults, 
  visitors, 
  metrics, 
  conversionRate 
}: OptimizedCalculatorResultsProps) => {
  const performanceMetrics = useMemo((): PerformanceMetric[] => [
    {
      label: "Page Load Speed",
      value: "3.2s slower",
      impact: 'high',
      description: "Every second of delay costs you customers"
    },
    {
      label: "Bounce Rate",
      value: "+15%",
      impact: 'high', 
      description: "More visitors leave before seeing your content"
    },
    {
      label: "SEO Ranking",
      value: "-12 positions",
      impact: 'medium',
      description: "Google penalizes slow websites"
    }
  ], []);

  const handleGetStarted = useCallback(() => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (!showResults) {
    return (
      <div className="text-center p-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
        <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Ready to See Your Savings?
        </h3>
        <p className="text-gray-600">
          Fill out the calculator above to discover how much your slow hosting is costing you
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <MetricCard
        title="💸 Revenue Lost This Month"
        value={`$${metrics.lostRevenue.toLocaleString()}`}
        subtitle={`Based on ${visitors.toLocaleString()} visitors and ${conversionRate}% conversion rate`}
        icon={<AlertCircle className="w-4 h-4 mr-2 text-red-600" />}
        variant="danger"
        description="This is money you're losing every month due to slow loading times and poor user experience."
      />

      <MetricCard
        title="🚀 Potential Yearly Savings"
        value={`$${metrics.potentialYearlySavings.toLocaleString()}`}
        subtitle={`${metrics.timeWasted.toFixed(1)} hours saved per month`}
        icon={<TrendingUp className="w-4 h-4 mr-2 text-green-600" />}
        variant="success"
        description="By switching to high-performance cloud hosting, you could recover this much revenue annually."
      />

      <MetricCard
        title="⚡ Performance Impact"
        value="Critical Issues Found"
        icon={<Zap className="w-4 h-4 mr-2 text-blue-600" />}
        variant="info"
        description="Your current hosting is significantly impacting your business performance:"
        metrics={performanceMetrics}
      />

      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Stop Losing Money?
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Get your free migration assessment and custom plan to boost your revenue by ${metrics.potentialYearlySavings.toLocaleString()} this year
          </p>
          <Button 
            onClick={handleGetStarted}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
          >
            Get My Free Assessment →
          </Button>
          <p className="text-sm mt-4 text-blue-200">
            ✅ No cost • ✅ No obligation • ✅ Results in 24 hours
          </p>
        </CardContent>
      </Card>
    </div>
  );
});

OptimizedCalculatorResults.displayName = 'OptimizedCalculatorResults';