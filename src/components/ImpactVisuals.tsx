import { ClockCount, CountUp } from "./CountUp";
import { Icon } from "./Icons";
import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface BarRowProps {
  tag: string;
  width: number;
  tone: "before" | "after";
  value: ReactNode;
}

export function BarRow({ tag, width, tone, value }: BarRowProps) {
  return (
    <div className="ba__row">
      <span className="ba__tag">{tag}</span>
      <div className="ba__track">
        <div className={`ba__bar ba__bar--${tone}`} style={{ "--w": `${width}%` } as CSSProperties} />
      </div>
      <span className="ba__val">{value}</span>
    </div>
  );
}

// The three before/after panels — moved into ByTheNumbers.tsx (there's no
// longer a separate "Before → after" section; these are what "by the
// numbers" now shows instead of static tiles for these three metrics).

export function SpeedPanel() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <article ref={ref} className={`ba glass-dark${visible ? " is-in" : ""}`}>
      <header className="ba__head">
        <Icon name="speed" className="ba__icon" />
        <h3>Reconciliation dashboard load time</h3>
      </header>
      <BarRow tag="Before" width={100} tone="before" value={<ClockCount from={240} to={240} />} />
      <BarRow tag="After" width={3.4} tone="after" value={<ClockCount from={240} to={8} />} />
      <p className="ba__delta">
        <strong>
          <CountUp value={30} suffix="×" />
        </strong>{" "}
        faster — 30M+ row semantic model rebuilt
      </p>
    </article>
  );
}

export function EfficiencyPanel() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <article ref={ref} className={`ba glass-dark${visible ? " is-in" : ""}`}>
      <header className="ba__head">
        <Icon name="clock" className="ba__icon" />
        <h3>Visa &amp; license processing time</h3>
      </header>
      <BarRow tag="Before" width={100} tone="before" value="100%" />
      <BarRow tag="After" width={22} tone="after" value="22%" />
      <p className="ba__delta">
        <strong>
          <CountUp value={78} suffix="%" />
        </strong>{" "}
        of processing time saved
      </p>
    </article>
  );
}

export function ReconciliationPanel() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <article ref={ref} className={`ba ba--cycle glass-dark${visible ? " is-in" : ""}`}>
      <header className="ba__head">
        <Icon name="refresh" className="ba__icon" />
        <h3>Enterprise reconciliation cycle</h3>
      </header>

      <div className="cycle">
        <div className="cycle__label">
          <span className="ba__tag">Before</span>
          <span className="cycle__people" aria-label="Team of five">
            {Array.from({ length: 5 }, (_, i) => (
              <Icon key={i} name="user" />
            ))}
          </span>
          <span className="cycle__note">Month-long manual cycle</span>
        </div>
        <div className="cycle__track cycle__track--before" aria-hidden="true">
          <span className="cycle__fill" />
          <span className="cycle__mark" />
        </div>
      </div>

      <div className="cycle">
        <div className="cycle__label">
          <span className="ba__tag">After</span>
          <span className="cycle__people" aria-label="One user">
            <Icon name="user" />
          </span>
          <span className="cycle__note">Hourly-refreshing report</span>
        </div>
        <div className="cycle__track cycle__track--after" aria-hidden="true">
          {Array.from({ length: 30 }, (_, i) => (
            <span key={i} className="cycle__tick" style={{ "--i": i } as CSSProperties} />
          ))}
        </div>
      </div>

      <p className="ba__delta">
        <strong>5 → 1</strong> people · <strong>monthly → hourly</strong>
      </p>
    </article>
  );
}
