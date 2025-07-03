import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { Step } from "./types";

interface FormNavigationProps {
  currentStep: number;
  steps: Step[];
  onPrevStep: () => void;
  onNextStep: () => void;
  onSubmit: () => void;
  canProceed: boolean;
  isSubmitting: boolean;
}

export const FormNavigation = ({
  currentStep,
  steps,
  onPrevStep,
  onNextStep,
  onSubmit,
  canProceed,
  isSubmitting
}: FormNavigationProps) => {
  return (
    <div className="flex justify-between pt-6">
      <Button
        onClick={onPrevStep}
        disabled={currentStep === 1}
        variant="outline"
        className="flex items-center"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Previous
      </Button>

      {currentStep < steps.length ? (
        <Button
          onClick={onNextStep}
          disabled={!canProceed}
          className="flex items-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      ) : (
        <Button
          onClick={onSubmit}
          disabled={isSubmitting || !canProceed}
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
  );
};