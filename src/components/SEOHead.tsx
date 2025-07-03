import { useEffect } from 'react';
import { generateStructuredData, generateFAQStructuredData, generateTestimonialStructuredData } from '@/utils/structuredData';

export const SEOHead = () => {
  useEffect(() => {
    // Update meta tags
    document.title = 'Website Speed Cost Calculator - See How Much Slow Hosting Costs You';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate exactly how much your slow hosting is costing you in lost sales. Free migration assessment included. Get instant results and start saving today.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Calculate exactly how much your slow hosting is costing you in lost sales. Free migration assessment included. Get instant results and start saving today.';
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Website Speed Cost Calculator - See How Much Slow Hosting Costs You' },
      { property: 'og:description', content: 'Calculate exactly how much your slow hosting is costing you in lost sales. Free migration assessment included.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: `${window.location.origin}/calculator-preview.jpg` },
      { property: 'og:site_name', content: 'Website Performance Calculator' }
    ];

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Website Speed Cost Calculator' },
      { name: 'twitter:description', content: 'Calculate how much slow hosting costs your business in lost revenue' },
      { name: 'twitter:image', content: `${window.location.origin}/calculator-preview.jpg` }
    ];

    // Add or update meta tags
    [...ogTags, ...twitterTags].forEach(tag => {
      const property = 'property' in tag ? tag.property : tag.name;
      const attr = 'property' in tag ? 'property' : 'name';
      let existingTag = document.querySelector(`meta[${attr}="${property}"]`);
      
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute(attr, property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Add structured data
    const structuredDataElements = [
      { id: 'calculator-schema', data: generateStructuredData() },
      { id: 'faq-schema', data: generateFAQStructuredData() },
      { id: 'testimonial-schema', data: generateTestimonialStructuredData() }
    ];

    structuredDataElements.forEach(({ id, data }) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    });

    // Preload critical resources
    const preloadLinks = [
      { href: '/fonts/main.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
    ];

    preloadLinks.forEach(linkData => {
      const existingLink = document.querySelector(`link[href="${linkData.href}"]`);
      if (!existingLink) {
        const linkEl = document.createElement('link');
        linkEl.rel = 'preload';
        linkEl.href = linkData.href;
        linkEl.setAttribute('as', linkData.as);
        if (linkData.type) linkEl.setAttribute('type', linkData.type);
        if (linkData.crossorigin) linkEl.setAttribute('crossorigin', linkData.crossorigin);
        document.head.appendChild(linkEl);
      }
    });
  }, []);

  return null;
};