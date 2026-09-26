import { useEffect } from "react";

// One distinct entrance per section. The CSS for each variant lives in
// visuals.css ([data-fx="..."]) and is driven by --t (0..1) set here as the
// section scrolls into view; once fully in, the effect is removed entirely so
// it can't clip modals or sticky children later.
const VARIANTS: Record<string, string> = {
  about: "open-h",
  build: "iris",
  experience: "diagonal",
  "case-studies": "zoom-in",
  education: "fade",
  projects: "flip-up",
  certificates: "diamond",
  skills: "open-v",
  leadership: "rise",
  testimonials: "zoom-out",
  contact: "from-bottom",
};

export function SectionFx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Object.entries(VARIANTS)
      .map(([id, fx]) => ({ el: document.getElementById(id), fx }))
      .filter((i): i is { el: HTMLElement; fx: string } => !!i.el);
    items.forEach(({ el, fx }) => el.setAttribute("data-fx", fx));

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const { el } of items) {
        const top = el.getBoundingClientRect().top;
        const t = Math.min(1, Math.max(0, (vh * 0.95 - top) / (vh * 0.6)));
        if (t >= 0.999) {
          el.setAttribute("data-fx-done", "");
        } else {
          el.removeAttribute("data-fx-done");
          el.style.setProperty("--t", t.toFixed(4));
        }
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      items.forEach(({ el }) => {
        el.removeAttribute("data-fx");
        el.removeAttribute("data-fx-done");
        el.style.removeProperty("--t");
      });
    };
  }, []);

  return null;
}
