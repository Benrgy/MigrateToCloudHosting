
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
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main id="main-content">
        <Hero />
        <ContactForm />
        <TrustIndicators />
        <Calculator />
        <Features />
        <VideoSection />
        <Benefits />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <AffiliateDisclosure />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
