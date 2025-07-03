import { useToast } from "@/hooks/use-toast";
import { analytics } from "@/services/analytics";

export const useCalculatorSharing = () => {
  const { toast } = useToast();

  const shareCalculator = async (lostRevenue: number) => {
    // Track the share event
    analytics.trackCalculatorShare(lostRevenue);
    
    const shareData = {
      title: 'Website Speed Cost Calculator - See How Much Slow Hosting Costs You',
      text: `I just discovered I'm losing $${lostRevenue.toFixed(0)}/month due to slow hosting! Check how much you're losing:`,
      url: window.location.href
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to copying URL
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({
        title: "Link copied!",
        description: "Calculator URL has been copied to your clipboard.",
      });
    });
  };

  return { shareCalculator, copyToClipboard };
};