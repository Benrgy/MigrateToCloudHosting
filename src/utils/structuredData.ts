export const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Website Performance Cost Calculator",
    "description": "Calculate how much your slow hosting is costing you in lost sales and revenue",
    "url": window.location.href,
    "applicationCategory": "CalculatorApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Organization",
      "name": "Website Performance Calculator",
      "url": window.location.origin
    },
    "featureList": [
      "Calculate lost revenue from slow loading times",
      "Estimate potential savings with faster hosting",
      "Compare hosting performance impact",
      "Free migration assessment"
    ]
  };
};

export const generateFAQStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does slow hosting cost my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Slow hosting can cost businesses thousands of dollars monthly in lost conversions. Every 1-second delay in page load time can reduce conversions by up to 7%."
        }
      },
      {
        "@type": "Question", 
        "name": "Is the migration really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide completely free migration services with zero downtime and full SEO protection. Our experts handle the entire process."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is this calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator uses industry-standard metrics and conversion data. Results are estimates based on your inputs and industry benchmarks."
        }
      }
    ]
  };
};

export const generateTestimonialStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Chen"
        },
        "reviewBody": "Migration increased our site speed by 300% and conversions by 45%. ROI was immediate.",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review", 
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Marcus Rodriguez"
        },
        "reviewBody": "From 8-second load times to under 2 seconds. Game changer for our e-commerce business.",
        "datePublished": "2024-02-01"
      }
    ]
  };
};