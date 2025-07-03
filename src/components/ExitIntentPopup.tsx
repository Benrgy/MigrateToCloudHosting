import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { analytics } from '@/services/analytics';

interface ExitIntentPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const ExitIntentPopup = ({ isVisible, onClose }: ExitIntentPopupProps) => {
  if (!isVisible) return null;

  const handleCTAClick = () => {
    analytics.trackCTAClick('exit_intent_cta', 'popup');
    window.open('https://www.cloudways.com/en/?id=1384181', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-scale-in">
        <Button
          onClick={onClose}
          variant="outline"
          size="sm"
          className="absolute top-4 right-4 w-8 h-8 p-0"
        >
          <X className="w-4 h-4" />
        </Button>
        
        <div className="text-center">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-2">Wait! Don't Let Slow Hosting Kill Your Business</h3>
          <p className="text-gray-600 mb-6">
            Get a FREE migration assessment and see how much you could save with faster hosting
          </p>
          
          <div className="space-y-3">
            <Button
              onClick={handleCTAClick}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              Get My FREE Assessment
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full"
            >
              No thanks, I'll keep losing money
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            100% Free • No credit card required • Takes 2 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export const useExitIntent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      if (!hasShown && e.clientY <= 0) {
        setShowPopup(true);
        setHasShown(true);
        analytics.trackCTAClick('exit_intent_trigger', 'mouse_leave');
      }
    };

    const handleBeforeUnload = () => {
      if (!hasShown) {
        // Note: Modern browsers don't allow custom messages
        return 'Are you sure you want to leave? You might be missing out on significant savings!';
      }
    };

    // Show popup after 30 seconds if user hasn't interacted
    timeoutId = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
        analytics.trackCTAClick('exit_intent_trigger', 'timeout');
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hasShown]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return {
    ExitIntentPopup: () => <ExitIntentPopup isVisible={showPopup} onClose={closePopup} />,
    showPopup,
    closePopup
  };
};