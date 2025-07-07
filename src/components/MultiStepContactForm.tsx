import { memo } from "react";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { MultiStepContactFormContent } from "./MultiStepContactFormContent";

export const MultiStepContactForm = memo(() => {
  const {
    currentStep,
    formData,
    isSubmitting,
    errors,
    lastSaved,
    handleInputChange,
    nextStep,
    prevStep,
    handleSubmit,
    validateStep
  } = useMultiStepForm();

  return (
    <MultiStepContactFormContent
      currentStep={currentStep}
      formData={formData}
      isSubmitting={isSubmitting}
      errors={errors}
      lastSaved={lastSaved}
      onInputChange={handleInputChange}
      onNextStep={nextStep}
      onPrevStep={prevStep}
      onSubmit={handleSubmit}
      validateStep={validateStep}
    />
  );
});

MultiStepContactForm.displayName = 'MultiStepContactForm';