const COLORS: Record<string, string> = {
  "ADGM Academy": "#7C3AED",
  ADNOC: "#059669",
  Coursera: "#0071E3",
  "McKinsey Forward Program": "#051C2C",
  Oracle: "#C74634",
  "Tricentis Academy": "#EA4335",
  Udemy: "#A435F0",
  University: "#B8863F",
  Volunteering: "#0EA5E9",
};

const FALLBACK_PALETTE = ["#4285F4", "#EA4335", "#059669", "#7C3AED", "#C74634", "#0EA5E9"];

export function colorFor(category: string) {
  if (COLORS[category]) return COLORS[category];
  let hash = 0;
  for (const ch of category) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return FALLBACK_PALETTE[hash % FALLBACK_PALETTE.length];
}

export function initialsFor(category: string) {
  const words = category.split(" ").filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

interface Props {
  category: string;
  className?: string;
}

export function CategoryBadge({ category, className }: Props) {
  return (
    <span className={className} style={{ background: colorFor(category) }}>
      {initialsFor(category)}
    </span>
  );
}
