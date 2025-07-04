import React, { memo, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Share2 } from "lucide-react";
import { useCalculator } from "@/hooks/useCalculator";
import { useCalculatorSharing } from "@/utils/calculator";
import { OptimizedCalculatorInputs } from "@/components/performance/OptimizedCalculatorInputs";
import { OptimizedCalculatorResults } from "@/components/performance/OptimizedCalculatorResults";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const EnhancedCalculator = memo(() => {
  const {
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
    showResults,
    calculateMetrics,
    handleCalculate,
  } = useCalculator();

  const { shareCalculator } = useCalculatorSharing();

  const handleShare = useCallback(() => {
    shareCalculator(calculateMetrics.lostRevenue);
  }, [shareCalculator, calculateMetrics.lostRevenue]);

  return (
    <ErrorBoundary>
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
                onClick={handleShare}
                variant="outline"
                className="mb-4"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share This Calculator
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <ErrorBoundary>
                <OptimizedCalculatorInputs
                  currentCost={currentCost}
                  setCurrentCost={setCurrentCost}
                  visitors={visitors}
                  setVisitors={setVisitors}
                  conversionRate={conversionRate}
                  setConversionRate={setConversionRate}
                  averageOrderValue={averageOrderValue}
                  setAverageOrderValue={setAverageOrderValue}
                  loadingTime={loadingTime}
                  setLoadingTime={setLoadingTime}
                  onCalculate={handleCalculate}
                />
              </ErrorBoundary>

              <div className="space-y-6" id="calculator-results">
                <ErrorBoundary>
                  <OptimizedCalculatorResults
                    showResults={showResults}
                    visitors={visitors}
                    metrics={calculateMetrics}
                    conversionRate={conversionRate}
                  />
                </ErrorBoundary>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
});

EnhancedCalculator.displayName = 'EnhancedCalculator';