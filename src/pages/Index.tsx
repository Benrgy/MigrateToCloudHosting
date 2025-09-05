import { LazyEnhancedCalculator } from "@/components/LazyEnhancedCalculator";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { OptimizedBenefits } from "@/components/enhanced/OptimizedBenefits";
import { OptimizedTestimonials } from "@/components/enhanced/OptimizedTestimonials";
import { OptimizedFAQ } from "@/components/enhanced/OptimizedFAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { VideoSection } from "@/components/VideoSection";
import { TrustIndicators } from "@/components/TrustIndicators";
import { FinalCTA } from "@/components/FinalCTA";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { MultiStepContactForm } from "@/components/MultiStepContactForm";
import { usePageAnalytics } from "@/hooks/usePageAnalytics";
import { useSmoothScrolling } from "@/hooks/useSmoothScrolling";
import { useScrollReveal } from "@/hooks/useScrollReveal";


export default function Index() {
  usePageAnalytics('home');
  useSmoothScrolling();
  useScrollReveal();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main id="main-content">
        <Hero />
        <MultiStepContactForm />
        <TrustIndicators />
        <LazyEnhancedCalculator />
        <Features />
        <VideoSection />
        <OptimizedBenefits />
        <OptimizedTestimonials />
        <OptimizedFAQ />
        <FinalCTA />
        <AffiliateDisclosure />
      </main>

      <Footer />
    </div>
  );
}