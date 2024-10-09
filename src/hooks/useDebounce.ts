import { useRef } from 'react';

export function useDebounce<T extends (...args: unknown[]) => void>(fn: T, delay: number) {
  const timeoutRef = useRef<number | null>(null);
  const debouncedFn = (...args: Parameters<T>): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };
  return debouncedFn;
}