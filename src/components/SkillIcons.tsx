import type { FC } from "react";

interface IconProps {
  className?: string;
}

export function PowerBIIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="10" width="4.5" height="11" rx="1" fill="#F2C811" />
      <rect x="9.75" y="6" width="4.5" height="15" rx="1" fill="#F2C811" opacity="0.85" />
      <rect x="16.5" y="2" width="4.5" height="19" rx="1" fill="#F2C811" opacity="0.65" />
    </svg>
  );
}

export function FabricIcon({ className }: IconProps) {
  return <img src="/logos/fabric.png" alt="Microsoft Fabric" className={className} />;
}

export function DAXIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#8E5CF7" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="11"
        fill="#ffffff"
      >
        fx
      </text>
    </svg>
  );
}

export function SQLIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="8" ry="3" fill="#3B7CB8" />
      <path
        d="M4 5.5V18.5C4 20.16 7.58 21.5 12 21.5C16.42 21.5 20 20.16 20 18.5V5.5"
        stroke="#3B7CB8"
        strokeWidth="1.8"
      />
      <path
        d="M4 12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12"
        stroke="#3B7CB8"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function PythonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M11.9 2c-4.2 0-3.9 1.8-3.9 1.8v2h4v.6H6.2S3 5.9 3 10.1s2.8 4 2.8 4h1.7v-2.3s-.1-2.8 2.7-2.8h4s2.6 0 2.6-2.5V4.4S17.2 2 11.9 2ZM9.5 3.3c.5 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8Z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22c4.2 0 3.9-1.8 3.9-1.8v-2h-4v-.6h5.8S21 18.1 21 13.9s-2.8-4-2.8-4h-1.7v2.3s.1 2.8-2.7 2.8h-4s-2.6 0-2.6 2.5v3.9S6.8 22 12.1 22Zm2.4-1.3c-.5 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function PowerAutomateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M13.2 2 4 13.5h6.2L10.6 22 20 10h-6.4Z" fill="#0066FF" />
    </svg>
  );
}

export function PowerAppsIcon({ className }: IconProps) {
  return <img src="/logos/powerapps.png" alt="Power Apps" className={className} />;
}

export function AIIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}

export const skillIcons: Record<string, FC<IconProps>> = {
  powerbi: PowerBIIcon,
  fabric: FabricIcon,
  dax: DAXIcon,
  sql: SQLIcon,
  python: PythonIcon,
  powerautomate: PowerAutomateIcon,
  powerapps: PowerAppsIcon,
  ai: AIIcon,
};
