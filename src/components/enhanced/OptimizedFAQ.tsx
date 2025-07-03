import React, { memo, useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: 'migration' | 'costs' | 'technical' | 'support';
}

const faqData: FAQItem[] = [
  {
    question: "How long does the migration process take?",
    answer: "Most migrations are completed within 24-48 hours with zero downtime. We handle everything including DNS updates, SSL certificates, and thorough testing before going live.",
    category: 'migration'
  },
  {
    question: "Will my website go down during migration?",
    answer: "No! We use advanced migration techniques that ensure 100% uptime. Your website continues running on the old server while we set up and test everything on the new cloud infrastructure.",
    category: 'migration'
  },
  {
    question: "How much will cloud hosting actually cost me?",
    answer: "Most businesses save 40-60% on hosting costs while getting dramatically better performance. Our plans start at $12/month with unlimited bandwidth and premium features included.",
    category: 'costs'
  },
  {
    question: "What if something goes wrong after migration?",
    answer: "We provide 30 days of free post-migration support and monitoring. Our team is available 24/7 to address any issues. We also keep a complete backup of your old setup for 60 days.",
    category: 'support'
  },
  {
    question: "Will my SEO rankings be affected?",
    answer: "Your SEO will actually improve! Faster loading times and better uptime are major Google ranking factors. We ensure all redirects and technical SEO elements are properly configured.",
    category: 'technical'
  },
  {
    question: "Do you migrate email accounts and databases?",
    answer: "Yes, we migrate everything - your website files, databases, email accounts, SSL certificates, and all configurations. You won't lose any data or functionality.",
    category: 'technical'
  },
  {
    question: "What makes cloud hosting better than shared hosting?",
    answer: "Cloud hosting offers dedicated resources, automatic scaling, better security, daily backups, and 99.9% uptime. Unlike shared hosting, your site won't slow down when other sites get traffic spikes.",
    category: 'technical'
  },
  {
    question: "Can I cancel if I'm not satisfied?",
    answer: "Absolutely! We offer a 30-day money-back guarantee. If you're not completely satisfied with the improved performance, we'll refund your hosting fees and help you migrate back.",
    category: 'support'
  }
];

const categoryColors = {
  migration: 'bg-blue-100 text-blue-700',
  costs: 'bg-green-100 text-green-700',
  technical: 'bg-purple-100 text-purple-700',
  support: 'bg-orange-100 text-orange-700'
};

const categoryNames = {
  migration: 'Migration',
  costs: 'Costs',
  technical: 'Technical',
  support: 'Support'
};

interface FAQItemComponentProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItemComponent = memo(({ faq, isOpen, onToggle }: FAQItemComponentProps) => (
  <Card className="border border-gray-200 hover:border-blue-300 transition-all duration-200">
    <CardHeader 
      className="cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <Badge className={`text-xs ${categoryColors[faq.category]} shrink-0`}>
            {categoryNames[faq.category]}
          </Badge>
          <CardTitle className="text-left text-lg font-semibold text-gray-900 leading-6">
            {faq.question}
          </CardTitle>
        </div>
        <div className="ml-4 shrink-0">
          {isOpen ? 
            <ChevronUp className="w-5 h-5 text-gray-500" /> : 
            <ChevronDown className="w-5 h-5 text-gray-500" />
          }
        </div>
      </div>
    </CardHeader>
    {isOpen && (
      <CardContent className="pt-0 pb-6">
        <div className="pl-20">
          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
        </div>
      </CardContent>
    )}
  </Card>
));

FAQItemComponent.displayName = 'FAQItemComponent';

interface OptimizedFAQProps {
  className?: string;
}

export const OptimizedFAQ = memo(({ className = '' }: OptimizedFAQProps) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // First item open by default

  const toggleItem = useCallback((index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions about cloud hosting migration
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {faqData.map((faq, index) => (
              <FAQItemComponent
                key={index}
                faq={faq}
                isOpen={openItems.has(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>

          {/* Still have questions CTA */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Get a free consultation and personalized migration plan for your website
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-sm mt-4 text-blue-200">
                ✅ Expert advice • ✅ Custom migration plan • ✅ No sales pressure
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

OptimizedFAQ.displayName = 'OptimizedFAQ';