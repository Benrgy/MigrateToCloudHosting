export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'Website Speed Cost Calculator - See How Much Slow Hosting Costs You',
    description: 'Calculate exactly how much your slow hosting is costing you in lost sales. Free migration assessment included. Get instant results and start saving today.',
    keywords: 'website speed calculator, hosting performance, slow website cost, migration assessment, website optimization, hosting comparison',
    ogTitle: 'Website Speed Cost Calculator - See How Much Slow Hosting Costs You',
    ogDescription: 'Calculate exactly how much your slow hosting is costing you in lost sales. Free migration assessment included.',
    twitterTitle: 'Website Speed Cost Calculator',
    twitterDescription: 'Calculate how much slow hosting costs your business in lost revenue'
  },
  '/calculator': {
    title: 'Performance Calculator - Analyze Your Website Speed Impact',
    description: 'Use our advanced calculator to analyze how your website performance affects conversions and revenue. Get detailed insights and migration recommendations.',
    keywords: 'performance calculator, website speed analysis, conversion optimization, hosting analysis, site speed tool',
    ogTitle: 'Performance Calculator - Analyze Your Website Speed Impact',
    ogDescription: 'Use our advanced calculator to analyze how your website performance affects conversions and revenue.',
    twitterTitle: 'Performance Calculator',
    twitterDescription: 'Analyze how your website performance affects conversions and revenue'
  },
  '/thank-you': {
    title: 'Thank You - Your Migration Assessment is Ready',
    description: 'Thank you for using our website speed calculator. Your personalized migration assessment and recommendations are being prepared.',
    keywords: 'thank you, migration assessment, website optimization results, hosting recommendations',
    ogTitle: 'Thank You - Your Migration Assessment is Ready',
    ogDescription: 'Thank you for using our website speed calculator. Your personalized assessment is ready.',
    twitterTitle: 'Migration Assessment Complete',
    twitterDescription: 'Your personalized website migration assessment is ready'
  }
};

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];