import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { analytics } from "@/services/analytics";
import { calculateLeadScore } from "@/utils/leadScoring";
import { useAutoSave } from "@/hooks/useAutoSave";
import { useFormValidation } from "@/hooks/useFormValidation";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { FormData, steps } from "./forms/types";
import { FormProgress } from "./forms/FormProgress";
import { FormStep1 } from "./forms/FormStep1";
import { FormStep2 } from "./forms/FormStep2";
import { FormStep3 } from "./forms/FormStep3";
import { FormNavigation } from "./forms/FormNavigation";

export const MultiStepContactForm = memo(() => {
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

  // Memoized validation rules to prevent infinite loops
  const validationRules = useMemo(() => ({
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    website: { required: true, url: true },
    currentHost: { required: true, minLength: 2 },
    monthlyTraffic: { required: true },
    businessType: { required: true }
  }), []);

  // Convert formData to Record<string, string> for validation
  const formDataForValidation = useMemo(() => ({
    name: formData.name,
    email: formData.email,
    website: formData.website,
    currentHost: formData.currentHost,
    monthlyTraffic: formData.monthlyTraffic,
    businessType: formData.businessType
  }), [formData]);

  const { errors, validateField } = useFormValidation(validationRules, formDataForValidation);

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
  }, [loadSaved, toast]);

  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
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
  }, [validateField, hasStartedForm]);

  const validateStep = useCallback((step: number): boolean => {
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
  }, [errors, formData]);

  const nextStep = useCallback(() => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    } else {
      toast({
        title: "Please complete all fields",
        description: "Fill in all required information before proceeding.",
        variant: "destructive",
      });
    }
  }, [currentStep, validateStep, toast]);

  const prevStep = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  }, []);

  const handleSubmit = useCallback(async () => {
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
      // Error logging only in development
      toast({
        title: "Submission Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [validateStep, formData, currentStep, clearSaved, toast, navigate]);

  const renderCurrentStep = useCallback(() => {
    switch (currentStep) {
      case 1:
        return <FormStep1 formData={formData} onInputChange={handleInputChange} errors={errors} />;
      case 2:
        return <FormStep2 formData={formData} onInputChange={handleInputChange} errors={errors} />;
      case 3:
        return <FormStep3 formData={formData} onInputChange={handleInputChange} errors={errors} />;
      default:
        return null;
    }
  }, [currentStep, formData, handleInputChange, errors]);

  return (
    <ErrorBoundary>
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
            <FormProgress currentStep={currentStep} steps={steps} />

            <CardContent className="space-y-6">
              {renderCurrentStep()}

              <FormNavigation
                currentStep={currentStep}
                steps={steps}
                onPrevStep={prevStep}
                onNextStep={nextStep}
                onSubmit={handleSubmit}
                canProceed={validateStep(currentStep)}
                isSubmitting={isSubmitting}
              />
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
    </ErrorBoundary>
  );
});

MultiStepContactForm.displayName = 'MultiStepContactForm';