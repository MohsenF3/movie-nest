import { useEffect } from "react";

export default function useAutoplay(
  enabled: boolean,
  callback: () => void,
  interval: number,
) {
  useEffect(() => {
    if (!enabled) return;
    const timer = setInterval(callback, interval);
    return () => clearInterval(timer);
  }, [enabled, callback, interval]);
}
