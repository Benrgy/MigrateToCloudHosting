import { Progress } from "@/components/ui/progress";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Step } from "./types";
interface FormProgressProps {
  currentStep: number;
  steps: Step[];
}
export const FormProgress = ({
  currentStep,
  steps
}: FormProgressProps) => {
  const progressPercentage = (currentStep / steps.length) * 100;
  
  return (
    <div className="mb-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-center">
          Step {currentStep} of {steps.length}: {steps[currentStep - 1]?.title}
        </CardTitle>
        <p className="text-center text-muted-foreground text-sm">
          {steps[currentStep - 1]?.description}
        </p>
      </CardHeader>
      <Progress value={progressPercentage} className="w-full" />
    </div>
  );
};