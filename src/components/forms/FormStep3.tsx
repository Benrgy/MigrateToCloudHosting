import { Label } from "@/components/ui/label";
import { StepProps } from "./types";

export const FormStep3 = ({ formData, onInputChange }: StepProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="monthlyTraffic" className="text-gray-700 font-medium">Monthly Website Visitors *</Label>
        <select
          id="monthlyTraffic"
          value={formData.monthlyTraffic}
          onChange={(e) => onInputChange('monthlyTraffic', e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select traffic range</option>
          <option value="Under 1,000">Under 1,000 visitors</option>
          <option value="1,000 - 5,000">1,000 - 5,000 visitors</option>
          <option value="5,000 - 10,000">5,000 - 10,000 visitors</option>
          <option value="10,000 - 50,000">10,000 - 50,000 visitors</option>
          <option value="50,000 - 100,000">50,000 - 100,000 visitors</option>
          <option value="Over 100,000">Over 100,000 visitors</option>
        </select>
      </div>
      <div>
        <Label htmlFor="businessType" className="text-gray-700 font-medium">Business Type *</Label>
        <select
          id="businessType"
          value={formData.businessType}
          onChange={(e) => onInputChange('businessType', e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select business type</option>
          <option value="E-commerce">E-commerce Store</option>
          <option value="SaaS">SaaS/Software</option>
          <option value="Blog/Content">Blog/Content Site</option>
          <option value="Corporate">Corporate Website</option>
          <option value="Agency">Agency/Freelancer</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <Label htmlFor="urgency" className="text-gray-700 font-medium">Migration Timeline</Label>
        <select
          id="urgency"
          value={formData.urgency}
          onChange={(e) => onInputChange('urgency', e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select timeline</option>
          <option value="ASAP">ASAP (this week)</option>
          <option value="1-2 weeks">1-2 weeks</option>
          <option value="This month">This month</option>
          <option value="Next month">Next month</option>
          <option value="Just exploring">Just exploring options</option>
        </select>
      </div>
    </div>
  );
};