import { useEffect, useCallback, useRef } from 'react';

export const useSmoothScrolling = () => {
  const handlersRef = useRef<(() => void)[]>([]);

  useEffect(() => {
    // Add smooth scrolling to all anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    
    const cleanup = () => document.removeEventListener('click', handleClick);
    handlersRef.current.push(cleanup);
    
    return cleanup;
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Cleanup all handlers on unmount
  useEffect(() => {
    return () => {
      handlersRef.current.forEach(cleanup => cleanup());
      handlersRef.current = [];
    };
  }, []);

  return { scrollToSection };
};