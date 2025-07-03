
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { analytics } from "@/services/analytics";
import { calculateLeadScore } from "@/utils/leadScoring";

interface FormData {
  name: string;
  email: string;
  website: string;
  currentHost: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    website: "",
    currentHost: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Calculate lead score based on form data and potential calculator results
      const leadScore = calculateLeadScore({
        visitors: 5000, // Default estimate - could be enhanced with actual calculator data
        currentCost: 25, // Default estimate
        website: formData.website,
        currentHost: formData.currentHost,
        lostRevenue: 500, // Default estimate
        potentialYearlySavings: 6000 // Default estimate
      });

      // Insert form data into Supabase with lead score
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            website: formData.website,
            current_host: formData.currentHost,
            lead_score: leadScore,
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      // Track the form submission
      analytics.trackContactFormSubmission(formData, leadScore);

      console.log('Form submitted successfully:', data);
      
      toast({
        title: "Assessment Request Submitted!",
        description: "We'll send your migration plan within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        website: "",
        currentHost: ""
      });

      navigate('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormFocus = () => {
    analytics.trackContactFormStart();
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Free Migration Assessment
            </h2>
            <p className="text-xl text-blue-100">
              Our experts will analyze your website and create a custom migration plan - completely free!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} onFocus={handleFormFocus} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Your Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
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
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="website" className="text-gray-700 font-medium">Website URL *</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
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
                  onChange={(e) => handleInputChange('currentHost', e.target.value)}
                  className="mt-1"
                  placeholder="e.g., GoDaddy, Bluehost, SiteGround"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">⏳</span>
                    Analyzing Your Site...
                  </>
                ) : (
                  <>
                    <span className="mr-2">🚀</span>
                    Get My Free Assessment
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                <span className="mr-2 text-green-600">🛡️</span>
                100% Free • No Obligation • Secure & Private
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
