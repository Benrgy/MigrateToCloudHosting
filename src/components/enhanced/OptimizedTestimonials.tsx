import React, { memo, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Award } from "lucide-react";

interface TestimonialProps {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  savings?: string;
  image?: string;
}

const TestimonialCard = memo(({ name, company, role, content, rating, savings }: TestimonialProps) => (
  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : ''}`} />
          ))}
        </div>
        {savings && (
          <Badge className="ml-auto bg-green-100 text-green-700">
            {savings} saved
          </Badge>
        )}
      </div>
      <blockquote className="text-gray-700 mb-4 leading-relaxed">
        "{content}"
      </blockquote>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="ml-3">
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{role} at {company}</div>
        </div>
      </div>
    </CardContent>
  </Card>
));

TestimonialCard.displayName = 'TestimonialCard';

const testimonials: TestimonialProps[] = [
  {
    name: "Sarah Chen",
    company: "TechFlow Solutions",
    role: "CTO",
    content: "After migrating to cloud hosting, our site speed improved by 150% and we saw a 23% increase in conversions. The ROI was immediate.",
    rating: 5,
    savings: "$15K/month"
  },
  {
    name: "Marcus Rodriguez",
    company: "EcoShop",
    role: "Founder",
    content: "The migration was seamless and our Google rankings improved significantly. Customer complaints about slow loading disappeared overnight.",
    rating: 5,
    savings: "$8K/month"
  },
  {
    name: "Jennifer Walsh",
    company: "Digital Marketing Pro",
    role: "CEO",
    content: "Best decision we made this year. Our hosting costs went down while performance went through the roof. Clients are thrilled with the results.",
    rating: 5,
    savings: "$12K/month"
  }
];

interface OptimizedTestimonialsProps {
  className?: string;
}

export const OptimizedTestimonials = memo(({ className = '' }: OptimizedTestimonialsProps) => {
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join 500+ Businesses Saving Money
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies like yours transformed their performance and profits with professional cloud hosting
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Successful Migrations</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-600">Migration Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
              <div className="text-gray-600">Average Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OptimizedTestimonials.displayName = 'OptimizedTestimonials';