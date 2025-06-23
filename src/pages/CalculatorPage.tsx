
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnhancedCalculator } from "@/components/EnhancedCalculator";

const CalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20">
        <EnhancedCalculator />
      </main>
      <Footer />
    </div>
  );
};

export default CalculatorPage;
