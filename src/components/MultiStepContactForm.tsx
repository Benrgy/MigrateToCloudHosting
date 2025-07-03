import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { analytics } from "@/services/analytics";
import { calculateLeadScore } from "@/utils/leadScoring";
import { useAutoSave } from "@/hooks/useAutoSave";
import { useFormValidation } from "@/hooks/useFormValidation";

interface FormData {
  name: string;
  email: string;
  website: string;
  currentHost: string;
  monthlyTraffic: string;
  businessType: string;
  urgency: string;
}

const steps = [
  {
    id: 1,
    title: "Tell us about yourself",
    description: "Basic information to get started"
  },
  {
    id: 2,
    title: "Your website details",
    description: "Help us understand your current setup"
  },
  {
    id: 3,
    title: "Business context",
    description: "A few more details to customize your plan"
  }
];

export const MultiStepContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    website: "",
    currentHost: "",
    monthlyTraffic: "",
    businessType: "",
    urgency: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Auto-save functionality
  const { lastSaved, clearSaved, loadSaved } = useAutoSave('contact-form-data', formData);

  // Form validation
  const validationRules = {
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    website: { required: true, url: true },
    currentHost: { required: true, minLength: 2 },
    monthlyTraffic: { required: true },
    businessType: { required: true }
  };

  const { errors, validateField } = useFormValidation(validationRules, formData as unknown as Record<string, string>);

  // Load saved data on component mount
  useEffect(() => {
    const savedData = loadSaved();
    if (savedData && Object.keys(savedData).length > 0) {
      setFormData(savedData as FormData);
      toast({
        title: "Form data restored",
        description: "Your previous input has been restored.",
      });
    }
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Real-time validation
    validateField(field, value);

    if (!hasStartedForm) {
      analytics.trackContactFormStart();
      setHasStartedForm(true);
    }
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !errors.name && !errors.email && formData.name.length > 0 && formData.email.length > 0;
      case 2:
        return !errors.website && !errors.currentHost && formData.website.length > 0 && formData.currentHost.length > 0;
      case 3:
        return !errors.monthlyTraffic && !errors.businessType && formData.monthlyTraffic.length > 0 && formData.businessType.length > 0;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    } else {
      toast({
        title: "Please complete all fields",
        description: "Fill in all required information before proceeding.",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) {
      toast({
        title: "Please complete all fields",
        description: "Fill in all required information before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Enhanced lead scoring with multi-step form data
      const trafficNumber = parseInt(formData.monthlyTraffic.replace(/[^0-9]/g, '')) || 5000;
      const leadScore = calculateLeadScore({
        visitors: trafficNumber,
        currentCost: 25,
        website: formData.website,
        currentHost: formData.currentHost,
        lostRevenue: Math.max(100, trafficNumber * 0.02 * 50), // Estimated lost revenue
        potentialYearlySavings: Math.max(1000, trafficNumber * 0.24) // Estimated yearly savings
      });

      // Enhanced data structure for multi-step form
      const submissionData = {
        name: formData.name,
        email: formData.email,
        website: formData.website,
        current_host: formData.currentHost,
        lead_score: leadScore,
        notes: JSON.stringify({
          monthly_traffic: formData.monthlyTraffic,
          business_type: formData.businessType,
          urgency: formData.urgency,
          form_type: 'multi_step'
        })
      };

      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([submissionData])
        .select();

      if (error) {
        throw error;
      }

      // Track enhanced form submission
      analytics.trackContactFormSubmission({
        ...formData,
        lead_score: leadScore,
        form_completion_steps: currentStep
      }, leadScore);

      // Clear auto-saved data on successful submission
      clearSaved();

      toast({
        title: "Assessment Request Submitted!",
        description: "We'll send your custom migration plan within 24 hours.",
      });

      navigate('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercentage = (currentStep / steps.length) * 100;

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Free Migration Assessment
            </h2>
            <p className="text-xl text-blue-100">
              Our experts will analyze your website and create a custom migration plan - completely free!
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center mb-4">
                <CardTitle className="text-lg font-semibold">
                  Step {currentStep} of {steps.length}
                </CardTitle>
                <span className="text-sm text-gray-500">
                  {Math.round(progressPercentage)}% Complete
                </span>
              </div>
              <Progress value={progressPercentage} className="w-full" />
              <div className="mt-4">
                <h3 className="text-xl font-bold">{steps[currentStep - 1].title}</h3>
                <p className="text-gray-600">{steps[currentStep - 1].description}</p>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Your Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="website" className="text-gray-700 font-medium">Website URL *</Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="mt-1"
                      placeholder="https://yoursite.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentHost" className="text-gray-700 font-medium">Current Hosting Provider *</Label>
                    <Input
                      id="currentHost"
                      type="text"
                      value={formData.currentHost}
                      onChange={(e) => handleInputChange('currentHost', e.target.value)}
                      className="mt-1"
                      placeholder="e.g., GoDaddy, Bluehost, SiteGround"
                      required
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="monthlyTraffic" className="text-gray-700 font-medium">Monthly Website Visitors *</Label>
                    <select
                      id="monthlyTraffic"
                      value={formData.monthlyTraffic}
                      onChange={(e) => handleInputChange('monthlyTraffic', e.target.value)}
                      className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select traffic range</option>
                      <option value="Under 1,000">Under 1,000 visitors</option>
                      <option value="1,000 - 5,000">1,000 - 5,000 visitors</option>
                      <option value="5,000 - 10,000">5,000 - 10,000 visitors</option>
                      <option value="10,000 - 50,000">10,000 - 50,000 visitors</option>
                      <option value="50,000 - 100,000">50,000 - 100,000 visitors</option>
                      <option value="Over 100,000">Over 100,000 visitors</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="businessType" className="text-gray-700 font-medium">Business Type *</Label>
                    <select
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => handleInputChange('businessType', e.target.value)}
                      className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select business type</option>
                      <option value="E-commerce">E-commerce Store</option>
                      <option value="SaaS">SaaS/Software</option>
                      <option value="Blog/Content">Blog/Content Site</option>
                      <option value="Corporate">Corporate Website</option>
                      <option value="Agency">Agency/Freelancer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="urgency" className="text-gray-700 font-medium">Migration Timeline</Label>
                    <select
                      id="urgency"
                      value={formData.urgency}
                      onChange={(e) => handleInputChange('urgency', e.target.value)}
                      className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP (this week)</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="This month">This month</option>
                      <option value="Next month">Next month</option>
                      <option value="Just exploring">Just exploring options</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6">
                <Button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="flex items-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentStep < steps.length ? (
                  <Button
                    onClick={nextStep}
                    disabled={!validateStep(currentStep)}
                    className="flex items-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !validateStep(currentStep)}
                    className="flex items-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">⏳</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Get My Free Assessment
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-blue-100">
              <span className="mr-2 text-green-400">🛡️</span>
              100% Free • No Obligation • Secure & Private
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};