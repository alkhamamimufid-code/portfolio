import type { PointerEvent } from "react";

/**
 * Tracks the pointer position over an element as CSS custom properties
 * (--spot-x/--spot-y, in px relative to the element), which the `.spotlight`
 * class in App.css reads to position a cursor-following highlight.
 */
export function onSpotlightMove(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
}
