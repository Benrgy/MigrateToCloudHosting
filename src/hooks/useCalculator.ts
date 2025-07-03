import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const useCalculator = () => {
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

  return {
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
    calculateMetrics: calculateMetrics(),
    handleCalculate,
  };
};