import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { CalculatorSkeleton } from '@/components/CalculatorSkeleton';

// Lazy load the EnhancedCalculator component
const EnhancedCalculatorLazy = lazy(() => 
  import('@/components/EnhancedCalculator').then(module => ({ 
    default: module.EnhancedCalculator 
  }))
);

export const LazyEnhancedCalculator = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<CalculatorSkeleton />}>
        <EnhancedCalculatorLazy />
      </Suspense>
    </ErrorBoundary>
  );
};