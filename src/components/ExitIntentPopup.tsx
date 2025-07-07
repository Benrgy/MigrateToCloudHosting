import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { analytics } from '@/services/analytics';
interface ExitIntentPopupProps {
  isVisible: boolean;
  onClose: () => void;
}
const ExitIntentPopup = ({
  isVisible,
  onClose
}: ExitIntentPopupProps) => {
  if (!isVisible) return null;
  const handleCTAClick = () => {
    analytics.trackCTAClick('exit_intent_cta', 'popup');
    window.open('https://www.cloudways.com/en/?id=1384181', '_blank');
    onClose();
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      
    </div>;
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