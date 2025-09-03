
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SEOWrapper } from "@/components/SEOWrapper";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CalculatorPage from "./pages/CalculatorPage";
import ThankYouPage from "./pages/ThankYouPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

function App() {
  console.log('App component rendering...')
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SEOWrapper>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </SEOWrapper>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
