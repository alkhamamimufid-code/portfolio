import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/**
 * Hero -> next section transition. The hero stays pinned while the next
 * section slides up over it like a sheet; as it does, the hero recedes a
 * little (scale + dim) so the handover feels layered instead of abrupt.
 * Children: [hero, next section]. Visuals live in .hero-stack (visuals.css).
 */
export function HeroStack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = ref.current;
    if (!stack) return;
    const hero = stack.firstElementChild as HTMLElement | null;
    const next = stack.children[1] as HTMLElement | undefined;
    if (!hero || !next) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const measure = () => stack.style.setProperty("--hero-h", `${hero.offsetHeight}px`);

    const update = () => {
      raf = 0;
      if (reduced) return;
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, 1 - next.getBoundingClientRect().top / vh));
      stack.style.setProperty("--p", p.toFixed(4));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    measure();
    update();
    const ro = new ResizeObserver(() => {
      measure();
      onScroll();
    });
    ro.observe(hero);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="hero-stack">
      {children}
    </div>
  );
}
