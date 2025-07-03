import React, { memo, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/CTAComponents";
import { CheckCircle, TrendingUp, Zap, Shield, Clock, Users } from "lucide-react";

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric?: string;
}

const BenefitItem = memo(({ icon, title, description, metric }: BenefitItemProps) => (
  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 group">
    <CardContent className="p-6 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      {metric && (
        <Badge className="mb-3 bg-green-100 text-green-700 font-semibold">
          {metric}
        </Badge>
      )}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </CardContent>
  </Card>
));

BenefitItem.displayName = 'BenefitItem';

const benefits: BenefitItemProps[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning-Fast Performance",
    description: "Your website will load 3x faster with enterprise-grade SSD storage, global CDN, and optimized server configurations.",
    metric: "3x Faster"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Increased Revenue",
    description: "Faster sites convert better. See up to 25% increase in conversions with improved user experience and reduced bounce rates.",
    metric: "+25% Conversions"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Advanced DDoS protection, automated backups, SSL certificates, and 24/7 security monitoring keep your site safe.",
    metric: "99.9% Protected"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Maximum Uptime",
    description: "Redundant infrastructure and automatic failover ensure your website stays online even during traffic spikes or server issues.",
    metric: "99.99% Uptime"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Better User Experience",
    description: "Happy visitors stay longer and convert more. Eliminate frustrating slow loads and server timeouts forever.",
    metric: "-60% Bounce Rate"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "SEO Boost",
    description: "Google rewards fast websites with higher rankings. Improve your search visibility and organic traffic automatically.",
    metric: "+40% Rankings"
  }
];

interface OptimizedBenefitsProps {
  className?: string;
}

export const OptimizedBenefits = memo(({ className = '' }: OptimizedBenefitsProps) => {
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Transform Your Business
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Cloud Hosting Changes Everything
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop losing money to slow, unreliable hosting. Join thousands of businesses that made the switch and never looked back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to 3x Your Website Performance?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get your free migration assessment and discover exactly how much faster (and more profitable) your website could be.
          </p>
          
          <div className="space-y-6">
            <CTAButton 
              onClick={scrollToContact}
              size="lg"
              className="w-auto mx-auto"
            >
              Get My Free Assessment
            </CTAButton>

            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                <span>Free Migration</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                <span>Zero Downtime</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OptimizedBenefits.displayName = 'OptimizedBenefits';