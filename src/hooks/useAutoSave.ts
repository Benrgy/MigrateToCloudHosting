import { useState, useEffect } from 'react';

interface AutoSaveData {
  [key: string]: any;
}

export const useAutoSave = (key: string, data: AutoSaveData, delay: number = 2000) => {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.values(data).some(value => value !== '')) {
        localStorage.setItem(key, JSON.stringify(data));
        setLastSaved(new Date());
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [data, key, delay]);

  const clearSaved = () => {
    localStorage.removeItem(key);
    setLastSaved(null);
  };

  const loadSaved = (): AutoSaveData | null => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  };

  return {
    lastSaved,
    clearSaved,
    loadSaved
  };
};