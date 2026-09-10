import type { AnchorHTMLAttributes, ReactNode } from "react";
import { onSpotlightMove } from "../hooks/useSpotlight";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

// A frosted-glass pill: real backdrop blur plus an SVG feDisplacementMap
// filter for a subtle liquid ripple (Safari renders the distortion; other
// browsers fall back to the plain blur, which still looks like glass).
// The filter itself is defined once, globally, by LiquidGlassFilterDefs.
export function LiquidGlassButton({ className, children, ...props }: Props) {
  return (
    <a
      {...props}
      className={`liquid-glass-btn spotlight${className ? ` ${className}` : ""}`}
      onPointerMove={onSpotlightMove}
    >
      <span className="liquid-glass-btn__sheen" aria-hidden="true" />
      <span className="liquid-glass-btn__label">{children}</span>
    </a>
  );
}

export function LiquidGlassFilterDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <filter
        id="liquid-glass-distortion"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012 0.03"
          numOctaves="2"
          seed="4"
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation="2" result="blurredNoise" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="blurredNoise"
          scale="18"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}
