import type { CSSProperties } from "react";
import { CountUp } from "./CountUp";
import { Icon } from "./Icons";
import { useCountUp } from "../hooks/useCountUp";
import { useReveal } from "../hooks/useReveal";
import { onSpotlightMove } from "../hooks/useSpotlight";
import { rowsMetric, satisfactionMetric } from "../content/story";

/** 15M+ rows: an animated bar showing the ~150K native cap next to the
 *  15M+ actually delivered — the gap is the point, so it's drawn, not just
 *  stated. */
export function RowsMotion() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const capPct = Math.max(1, (rowsMetric.cap / rowsMetric.delivered) * 100);

  return (
    <div
      ref={ref}
      className={`tile tile--motion spotlight glass-dark${visible ? " is-in" : ""}`}
      onPointerMove={onSpotlightMove}
    >
      <Icon name={rowsMetric.icon} className="tile__icon" />
      <span className="tile__value">
        <CountUp value={rowsMetric.value} suffix={rowsMetric.suffix} />
      </span>
      <span className="tile__label">{rowsMetric.label}</span>
      <div className="rows-gauge" role="img" aria-label="15 million rows delivered versus a 150 thousand row native cap">
        <span className="rows-gauge__fill" style={{ "--cap": `${capPct}%` } as CSSProperties} />
        <span className="rows-gauge__cap" style={{ "--cap": `${capPct}%` } as CSSProperties} />
      </div>
      <span className="tile__detail-static">~150K native cap &rarr; 15M+ delivered</span>
    </div>
  );
}

/** 45% satisfaction gain: a ring that fills as the number counts up — same
 *  scroll-triggered count, just drawn as a gauge instead of plain digits. */
export function SatisfactionMotion() {
  const { ref, value } = useCountUp<HTMLDivElement>(satisfactionMetric.value, 1400);

  return (
    <div className="tile tile--motion spotlight glass-dark" onPointerMove={onSpotlightMove}>
      <div ref={ref} className="ring" style={{ "--pct": value } as CSSProperties}>
        <span className="ring__value">{Math.round(value)}%</span>
      </div>
      <span className="tile__label">{satisfactionMetric.label}</span>
      <span className="tile__detail-static">{satisfactionMetric.detail}</span>
    </div>
  );
}
