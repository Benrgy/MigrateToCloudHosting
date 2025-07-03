import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepProps } from "./types";

export const FormStep2 = ({ formData, onInputChange }: StepProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="website" className="text-gray-700 font-medium">Website URL *</Label>
        <Input
          id="website"
          type="url"
          value={formData.website}
          onChange={(e) => onInputChange('website', e.target.value)}
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
          onChange={(e) => onInputChange('currentHost', e.target.value)}
          className="mt-1"
          placeholder="e.g., GoDaddy, Bluehost, SiteGround"
          required
        />
      </div>
    </div>
  );
};