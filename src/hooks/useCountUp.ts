import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Animates a number from `from` to `target` once the element scrolls into
 * view. Reduced-motion users get the final value immediately — the number is
 * the information, the counting is only decoration.
 */
export function useCountUp<T extends HTMLElement>(target: number, duration = 1400, from = 0) {
  const ref = useRef<T | null>(null);
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : from));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reduced motion: the initial state already holds the final value.
    if (prefersReducedMotion()) return;

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 4);
        setValue(from + (target - from) * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration, from]);

  return { ref, value };
}
