import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { projects } from "../content/profile";
import { Reveal } from "./Reveal";

const ACCENTS = ["#2dd4bf", "#60a5fa", "#22d3ee", "#5eead4", "#7dd3fc", "#34d399"];
const N = projects.length;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

// Hold each project steady through most of its scroll range and only change
// over in a narrow band, so you rarely see a half-faded state.
const settle = (s: number) => {
  const i = Math.floor(s);
  const f = s - i;
  const t = clamp((f - 0.3) / 0.4, 0, 1);
  return i + t * t * (3 - 2 * t);
};

/**
 * Each project is a full-screen chapter inside one tall scroll track. A sticky
 * stage stays on screen while scroll position cross-fades, slides and blurs
 * from one project to the next; a dot navigator on the right shows (and jumps
 * to) where you are. Reduced-motion visitors get a plain stacked list instead.
 */
export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [flat] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    if (flat) return;
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let last = -1;
    let inRange = false;
    let rawPos = 0;
    let idleTimer = 0;

    // When scrolling stops, glide to the nearest project so you never rest
    // between two of them.
    const snap = () => {
      if (!inRange) return;
      const total = Math.max(1, track.offsetHeight - window.innerHeight);
      const trackTop = track.getBoundingClientRect().top + window.scrollY;
      const target = trackTop + (Math.round(rawPos) / (N - 1)) * total;
      if (Math.abs(window.scrollY - target) > 2) window.scrollTo({ top: target, behavior: "smooth" });
    };

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const rect = track.getBoundingClientRect();
      const total = Math.max(1, track.offsetHeight - vh);
      const p = clamp(-rect.top / total, 0, 1);
      const raw = p * (N - 1);
      const s = settle(raw);

      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = i - s;
        const a = Math.abs(d);
        const vis = clamp(1 - a * 2.2, 0, 1);
        el.style.opacity = vis.toFixed(3);
        el.style.transform = `translate3d(0, ${(d * 14).toFixed(2)}vh, 0) scale(${(1 - a * 0.05).toFixed(3)})`;
        el.style.filter = a < 0.02 ? "none" : `blur(${(a * 6).toFixed(1)}px)`;
        el.style.pointerEvents = vis > 0.6 ? "auto" : "none";
        el.style.visibility = vis <= 0 ? "hidden" : "visible";
      });

      const idx = Math.round(s);
      inRange = rect.top <= 1 && rect.bottom >= vh - 1;
      rawPos = raw;
      if (idx !== last) {
        last = idx;
        setActive(idx);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(snap, 110);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(idleTimer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [flat]);

  const jump = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const total = track.offsetHeight - window.innerHeight;
    const top = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (i / (N - 1)) * total, behavior: "smooth" });
  }, []);

  const accent = ACCENTS[active % ACCENTS.length];

  return (
    <section
      className={`section section--dark pj${flat ? " pj--flat" : ""}`}
      id="projects"
      style={{ "--pj-accent": accent } as CSSProperties}
    >
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Projects</span>
            <h2 className="section__title">Selected work</h2>
            <p className="section__lede">
              Pulled from performance reviews and shipped dashboards — the ones with a number
              attached. Keep scrolling to move through them.
            </p>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="pj__track"
        style={{ "--n": N } as CSSProperties}
      >
        <div className="pj__stage">
          {!flat && (
            <nav className="pj__dots" aria-label="Projects">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  className={`pj__dot${active === i ? " is-active" : ""}`}
                  aria-label={`${i + 1}. ${p.title}`}
                  aria-current={active === i}
                  onClick={() => jump(i)}
                />
              ))}
            </nav>
          )}

          {projects.map((p, i) => (
            <article
              key={p.title}
              className="pj__slide"
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              style={{ "--c": ACCENTS[i % ACCENTS.length] } as CSSProperties}
            >
              <div className="pj__meta">
                <span className="pj__count">
                  {String(i + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
                </span>
                <span>
                  {p.period} · {p.company}
                </span>
              </div>
              <h3 className="pj__title">{p.title}</h3>
              <span className="pj__impact">{p.impact}</span>
              <p className="pj__desc">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
