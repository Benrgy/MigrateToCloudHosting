
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="contact-name" className="text-sm font-medium text-gray-700">
          Full Name
        </Label>
        <Input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="contact-email" className="text-sm font-medium text-gray-700">
          Email Address
        </Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="w-full"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="contact-website" className="text-sm font-medium text-gray-700">
          Current Website URL
        </Label>
        <Input
          id="contact-website"
          name="website"
          type="url"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://yourwebsite.com"
          className="w-full"
        />
      </div>
      
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Get Free Migration Quote
      </Button>
    </form>
  );
};
