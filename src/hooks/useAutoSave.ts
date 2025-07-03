import { useState, useEffect, useCallback, useRef } from 'react';

interface AutoSaveData {
  [key: string]: any;
}

export const useAutoSave = (key: string, data: AutoSaveData, delay: number = 2000) => {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const dataRef = useRef<string>('');

  useEffect(() => {
    const currentDataString = JSON.stringify(data);
    
    // Only save if data has actually changed
    if (currentDataString === dataRef.current) {
      return;
    }
    
    dataRef.current = currentDataString;

    // Clear previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set new timer with debouncing
    timerRef.current = setTimeout(() => {
      if (Object.values(data).some(value => value !== '' && value !== null && value !== undefined)) {
        try {
          localStorage.setItem(key, JSON.stringify(data));
          setLastSaved(new Date());
        } catch (error) {
          // Silent fail in production for localStorage
        }
      }
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [data, key, delay]);

  const clearSaved = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setLastSaved(null);
    } catch (error) {
      // Silent fail in production for localStorage
    }
  }, [key]);

  const loadSaved = useCallback((): AutoSaveData | null => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      // Silent fail in production for localStorage
      return null;
    }
  }, [key]);

  return {
    lastSaved,
    clearSaved,
    loadSaved
  };
};