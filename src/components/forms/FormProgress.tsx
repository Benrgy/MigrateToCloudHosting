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
  const progressPercentage = currentStep / steps.length * 100;
  return;
};