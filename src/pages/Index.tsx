
import { Calculator } from "@/components/Calculator";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { VideoSection } from "@/components/VideoSection";
import { TrustIndicators } from "@/components/TrustIndicators";
import { FinalCTA } from "@/components/FinalCTA";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* FTC Affiliate Disclosure Banner */}
      <div className="bg-yellow-50 border-b border-yellow-200 text-center py-2 px-4">
        <p className="text-sm text-yellow-800">
          <i className="fas fa-info-circle mr-1" aria-hidden="true"></i>
          <strong>Disclosure:</strong> This site contains affiliate links. We may earn a commission when you make a purchase through our links at no additional cost to you. 
          <a href="#disclosure" className="underline hover:text-yellow-900">Learn more</a>
        </p>
      </div>

      <Header />
      
      <main id="main-content">
        <Hero />
        <Calculator />
        <TrustIndicators />
        <Features />
        <VideoSection />
        <Benefits />
        <Testimonials />
        <FAQ />
        <AffiliateDisclosure />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
