import { useCountUp } from "../hooks/useCountUp";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function CountUp({ value, prefix, suffix, duration }: CountUpProps) {
  const { ref, value: current } = useCountUp<HTMLSpanElement>(value, duration);
  return (
    <span ref={ref} className="tabular">
      {prefix}
      {Math.round(current)}
      {suffix}
    </span>
  );
}

const formatClock = (seconds: number) => {
  const s = Math.round(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

/** Counts *down* between two durations, rendered as m:ss. */
export function ClockCount({ from, to }: { from: number; to: number }) {
  const { ref, value } = useCountUp<HTMLSpanElement>(to, 1600, from);
  return (
    <span ref={ref} className="tabular">
      {formatClock(value)}
    </span>
  );
}
