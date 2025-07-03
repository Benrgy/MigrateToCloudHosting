import { Progress } from "@/components/ui/progress";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Step } from "./types";

interface FormProgressProps {
  currentStep: number;
  steps: Step[];
}

export const FormProgress = ({ currentStep, steps }: FormProgressProps) => {
  const progressPercentage = (currentStep / steps.length) * 100;

  return (
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
  );
};