import { useState, useRef, useEffect } from 'react';
import { HelpCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip = ({ content, children, position = 'top' }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [actualPosition, setActualPosition] = useState(position);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && tooltipRef.current && triggerRef.current) {
      const tooltip = tooltipRef.current;
      const trigger = triggerRef.current;
      const rect = trigger.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Auto-adjust position based on viewport
      let newPosition = position;
      
      if (position === 'top' && rect.top < 100) {
        newPosition = 'bottom';
      } else if (position === 'bottom' && rect.bottom > viewportHeight - 100) {
        newPosition = 'top';
      } else if (position === 'left' && rect.left < 200) {
        newPosition = 'right';
      } else if (position === 'right' && rect.right > viewportWidth - 200) {
        newPosition = 'left';
      }

      setActualPosition(newPosition);
    }
  }, [isVisible, position]);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-800',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-800',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-800'
  };

  return (
    <div 
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg max-w-xs ${positionClasses[actualPosition]} animate-fade-in`}
        >
          {content}
          <div 
            className={`absolute w-0 h-0 border-4 ${arrowClasses[actualPosition]}`}
          />
        </div>
      )}
    </div>
  );
};

export const HelpTooltip = ({ content }: { content: string }) => {
  return (
    <Tooltip content={content}>
      <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help ml-1" />
    </Tooltip>
  );
};