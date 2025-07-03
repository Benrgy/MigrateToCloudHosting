export interface FormData {
  name: string;
  email: string;
  website: string;
  currentHost: string;
  monthlyTraffic: string;
  businessType: string;
  urgency: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface StepProps {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
  errors: Record<string, string | null>;
}

export const steps: Step[] = [
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