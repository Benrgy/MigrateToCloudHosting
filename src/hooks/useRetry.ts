import { useState, useEffect } from 'react';

interface RetryOptions {
  maxAttempts?: number;
  delay?: number;
  backoff?: number;
  onRetry?: (attempt: number, error: Error) => void;
}

export const useRetry = <T,>(
  asyncFunction: () => Promise<T>,
  options: RetryOptions = {}
) => {
  const {
    maxAttempts = 3,
    delay = 1000,
    backoff = 1.5,
    onRetry
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const execute = async () => {
    setLoading(true);
    setError(null);
    let currentAttempt = 0;

    while (currentAttempt < maxAttempts) {
      try {
        const result = await asyncFunction();
        setData(result);
        setError(null);
        setAttempt(currentAttempt + 1);
        setLoading(false);
        return result;
      } catch (err) {
        currentAttempt++;
        const error = err as Error;
        
        if (currentAttempt >= maxAttempts) {
          setError(error);
          setLoading(false);
          throw error;
        }

        if (onRetry) {
          onRetry(currentAttempt, error);
        }

        setAttempt(currentAttempt);
        
        // Wait before retrying with exponential backoff
        const waitTime = delay * Math.pow(backoff, currentAttempt - 1);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  };

  const retry = () => {
    setAttempt(0);
    return execute();
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
    setAttempt(0);
  };

  return {
    data,
    error,
    loading,
    attempt,
    execute,
    retry,
    reset
  };
};