import { memo, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { FormData, steps } from "./forms/types";
import { FormProgress } from "./forms/FormProgress";
import { FormStep1 } from "./forms/FormStep1";
import { FormStep2 } from "./forms/FormStep2";
import { FormStep3 } from "./forms/FormStep3";
import { FormNavigation } from "./forms/FormNavigation";

interface MultiStepContactFormContentProps {
  currentStep: number;
  formData: FormData;
  isSubmitting: boolean;
  errors: Record<string, string>;
  lastSaved: Date | null;
  onInputChange: (field: keyof FormData, value: string) => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onSubmit: () => void;
  validateStep: (step: number) => boolean;
}

export const MultiStepContactFormContent = memo(({
  currentStep,
  formData,
  isSubmitting,
  errors,
  lastSaved,
  onInputChange,
  onNextStep,
  onPrevStep,
  onSubmit,
  validateStep
}: MultiStepContactFormContentProps) => {
  const renderCurrentStep = useCallback(() => {
    switch (currentStep) {
      case 1:
        return <FormStep1 formData={formData} onInputChange={onInputChange} errors={errors} />;
      case 2:
        return <FormStep2 formData={formData} onInputChange={onInputChange} errors={errors} />;
      case 3:
        return <FormStep3 formData={formData} onInputChange={onInputChange} errors={errors} />;
      default:
        return null;
    }
  }, [currentStep, formData, onInputChange, errors]);

  return (
    <ErrorBoundary>
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6">
          <FormProgress currentStep={currentStep} steps={steps} />
          
          <div className="mt-6">
            {renderCurrentStep()}
          </div>
          
          <FormNavigation
            currentStep={currentStep}
            steps={steps}
            onPrevStep={onPrevStep}
            onNextStep={onNextStep}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            canProceed={validateStep(currentStep)}
          />
          
          {lastSaved && (
            <div className="text-xs text-muted-foreground mt-4 text-center">
              Last saved: {lastSaved.toLocaleTimeString()}
            </div>
          )}
        </CardContent>
      </Card>
    </ErrorBoundary>
  );
});

MultiStepContactFormContent.displayName = 'MultiStepContactFormContent';