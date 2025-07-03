import React, { memo } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";

interface CTAButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const CTAButton = memo(({ 
  onClick, 
  className = '', 
  children, 
  variant = 'primary',
  size = 'md' 
}: CTAButtonProps) => {
  const baseClasses = "font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base", 
    lg: "px-8 py-4 text-lg"
  };

  return (
    <Button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  );
});

CTAButton.displayName = 'CTAButton';

interface TrustIndicatorProps {
  icon: React.ReactNode;
  text: string;
}

export const TrustIndicator = memo(({ icon, text }: TrustIndicatorProps) => (
  <div className="flex items-center text-sm text-gray-600">
    {icon}
    <span>{text}</span>
  </div>
));

TrustIndicator.displayName = 'TrustIndicator';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
  showTrustIndicators?: boolean;
  className?: string;
}

export const CTASection = memo(({ 
  title, 
  subtitle, 
  buttonText, 
  onButtonClick,
  showTrustIndicators = true,
  className = ''
}: CTASectionProps) => {
  return (
    <div className={`text-center space-y-6 ${className}`}>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="space-y-4">
        <CTAButton 
          onClick={onButtonClick}
          size="lg"
          className="w-auto mx-auto"
        >
          {buttonText}
        </CTAButton>

        {showTrustIndicators && (
          <div className="flex justify-center space-x-6 text-green-600">
            <TrustIndicator 
              icon={<CheckCircle className="w-4 h-4 mr-2" />}
              text="100% Free"
            />
            <TrustIndicator 
              icon={<Shield className="w-4 h-4 mr-2" />}
              text="No Obligation"
            />
            <TrustIndicator 
              icon={<Clock className="w-4 h-4 mr-2" />}
              text="Results in 24h"
            />
          </div>
        )}
      </div>
    </div>
  );
});

CTASection.displayName = 'CTASection';