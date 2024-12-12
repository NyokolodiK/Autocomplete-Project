import { useCallback, useRef } from "react";

type FuncWithParams<T extends unknown[]> = (...args: T) => Promise<void>;

const useDebounce = <T extends unknown[]>(
  func: FuncWithParams<T>,
  delay: number
): ((...args: T) => void) => {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedFunc = useCallback(
    async (...args: T) => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(async () => {
        await func(...args);
      }, delay);
    },
    [func, delay]
  );

  return debouncedFunc;
};

export default useDebounce;
