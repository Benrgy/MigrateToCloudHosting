import React, { memo, useCallback, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Users, Clock, TrendingUp } from "lucide-react";

interface InputFieldProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  icon?: React.ReactNode;
  description?: string;
}

const InputField = memo(({ 
  id, 
  label, 
  value, 
  onChange, 
  prefix, 
  suffix, 
  min = 0, 
  max = 1000000, 
  step = 1,
  icon,
  description 
}: InputFieldProps) => {
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value) || 0;
    onChange(Math.min(Math.max(newValue, min), max));
  }, [onChange, min, max]);

  const displayValue = useMemo(() => {
    return value === 0 ? '' : value.toString();
  }, [value]);

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium flex items-center">
        {icon}
        {label}
      </Label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            {prefix}
          </span>
        )}
        <Input
          id={id}
          type="number"
          value={displayValue}
          onChange={handleInputChange}
          min={min}
          max={max}
          step={step}
          className={`${prefix ? 'pl-8' : ''} ${suffix ? 'pr-12' : ''}`}
          placeholder="Enter value"
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            {suffix}
          </span>
        )}
      </div>
      {description && (
        <p className="text-xs text-gray-600">{description}</p>
      )}
    </div>
  );
});

InputField.displayName = 'InputField';

interface SliderFieldProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  formatValue: (value: number) => string;
  icon?: React.ReactNode;
  description?: string;
}

const SliderField = memo(({ 
  id, 
  label, 
  value, 
  onChange, 
  min, 
  max, 
  step, 
  formatValue,
  icon,
  description 
}: SliderFieldProps) => {
  const handleSliderChange = useCallback((newValue: number[]) => {
    onChange(newValue[0]);
  }, [onChange]);

  return (
    <div className="space-y-3">
      <Label htmlFor={id} className="text-sm font-medium flex items-center justify-between">
        <span className="flex items-center">
          {icon}
          {label}
        </span>
        <span className="text-blue-600 font-semibold">
          {formatValue(value)}
        </span>
      </Label>
      <Slider
        id={id}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={handleSliderChange}
        className="w-full"
      />
      {description && (
        <p className="text-xs text-gray-600">{description}</p>
      )}
    </div>
  );
});

SliderField.displayName = 'SliderField';

interface OptimizedCalculatorInputsProps {
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

export const OptimizedCalculatorInputs = memo(({
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
  onCalculate
}: OptimizedCalculatorInputsProps) => {
  
  const formatCurrency = useCallback((value: number) => `$${value}`, []);
  const formatPercentage = useCallback((value: number) => `${value}%`, []);
  const formatTime = useCallback((value: number) => `${value}s`, []);
  const formatNumber = useCallback((value: number) => value.toLocaleString(), []);

  return (
    <Card className="bg-white shadow-xl border-0">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <CardTitle className="text-xl font-bold flex items-center">
          <Calculator className="w-5 h-5 mr-2" />
          Website Performance Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        <InputField
          id="currentCost"
          label="Current Monthly Hosting Cost"
          value={currentCost}
          onChange={setCurrentCost}
          prefix="$"
          min={1}
          max={10000}
          icon={<DollarSign className="w-4 h-4 mr-2" />}
          description="What do you currently pay for hosting per month?"
        />

        <InputField
          id="visitors"
          label="Monthly Website Visitors"
          value={visitors}
          onChange={setVisitors}
          min={100}
          max={10000000}
          icon={<Users className="w-4 h-4 mr-2" />}
          description="How many people visit your website each month?"
        />

        <SliderField
          id="conversionRate"
          label="Conversion Rate"
          value={conversionRate}
          onChange={setConversionRate}
          min={0.1}
          max={10}
          step={0.1}
          formatValue={formatPercentage}
          icon={<TrendingUp className="w-4 h-4 mr-2" />}
          description="What percentage of visitors take your desired action?"
        />

        <InputField
          id="averageOrderValue"
          label="Average Order/Lead Value"
          value={averageOrderValue}
          onChange={setAverageOrderValue}
          prefix="$"
          min={1}
          max={100000}
          icon={<DollarSign className="w-4 h-4 mr-2" />}
          description="Average value of each sale or qualified lead"
        />

        <SliderField
          id="loadingTime"
          label="Current Page Load Time"
          value={loadingTime}
          onChange={setLoadingTime}
          min={1}
          max={15}
          step={0.5}
          formatValue={formatTime}
          icon={<Clock className="w-4 h-4 mr-2" />}
          description="How long does your website take to load? (Test with GTmetrix or PageSpeed Insights)"
        />

        <Button 
          onClick={onCalculate}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calculate My Lost Revenue
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            🔒 Your data is secure and never shared
          </p>
        </div>
      </CardContent>
    </Card>
  );
});

OptimizedCalculatorInputs.displayName = 'OptimizedCalculatorInputs';