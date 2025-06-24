
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
      toast({
        title: "Assessment Request Submitted!",
        description: "We'll send your migration plan within 24 hours.",
      });

      // Navigate to thank you page
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
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    <i className="fas fa-spinner fa-spin mr-2" aria-hidden="true"></i>
                    Analyzing Your Site...
                  </>
                ) : (
                  <>
                    <i className="fas fa-rocket mr-2" aria-hidden="true"></i>
                    Get My Free Assessment
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                <i className="fas fa-shield-check mr-2 text-green-600" aria-hidden="true"></i>
                100% Free • No Obligation • Secure & Private
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
