import { useEffect } from 'react';
import { analytics } from '@/services/analytics';

export const usePageAnalytics = (pageName: string) => {
  useEffect(() => {
    analytics.trackPageView(pageName);
  }, [pageName]);
};