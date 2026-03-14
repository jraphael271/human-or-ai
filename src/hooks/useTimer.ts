import { useEffect, useState, useRef, useCallback } from "react";

interface UseTimerOptions {
  duration: number;
  onComplete: () => void;
  active: boolean;
}

export function useTimer({ duration, onComplete, active }: UseTimerOptions) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const reset = useCallback(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!active) return;
    setTimeLeft(duration);
  }, [active, duration]);

  useEffect(() => {
    if (!active || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 0.1;
        if (next <= 0) {
          clearInterval(interval);
          setTimeout(() => onCompleteRef.current(), 0);
          return 0;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [active, timeLeft <= 0]);

  return { timeLeft, progress: (timeLeft / duration) * 100, reset };
}
