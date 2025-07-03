import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepProps } from "./types";

export const FormStep1 = ({ formData, onInputChange }: StepProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-gray-700 font-medium">Your Name *</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => onInputChange('name', e.target.value)}
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
          onChange={(e) => onInputChange('email', e.target.value)}
          className="mt-1"
          placeholder="john@example.com"
          required
        />
      </div>
    </div>
  );
};