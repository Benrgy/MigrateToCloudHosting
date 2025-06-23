
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // AWeber webhook URL - you'll need to replace this with your actual AWeber webhook URL
      const aweberWebhookUrl = process.env.AWEBER_WEBHOOK_URL || 'YOUR_AWEBER_WEBHOOK_URL_HERE';
      
      if (aweberWebhookUrl === 'YOUR_AWEBER_WEBHOOK_URL_HERE') {
        toast({
          title: "Configuration Required",
          description: "Please configure your AWeber webhook URL to enable email capture.",
          variant: "destructive",
        });
        return;
      }

      const response = await fetch(aweberWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          website: formData.website,
          source: 'Migration Quote Form',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your information has been submitted. We'll send you a free migration quote shortly!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          website: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was an issue submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          Full Name *
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
          disabled={isSubmitting}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="contact-email" className="text-sm font-medium text-gray-700">
          Email Address *
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <i className="fas fa-spinner fa-spin mr-2" aria-hidden="true"></i>
            Submitting...
          </>
        ) : (
          <>
            <i className="fas fa-envelope mr-2" aria-hidden="true"></i>
            Get Free Migration Quote
          </>
        )}
      </Button>
      
      <p className="text-xs text-gray-500 text-center mt-2">
        <i className="fas fa-lock mr-1" aria-hidden="true"></i>
        Your information is secure and will only be used to send you migration quotes and hosting tips.
      </p>
    </form>
  );
};
