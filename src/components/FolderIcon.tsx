interface Props {
  color: string;
  className?: string;
}

export function FolderIcon({ color, className }: Props) {
  return (
    <svg viewBox="0 0 48 40" className={className} aria-hidden="true">
      <path
        d="M3 9a4 4 0 0 1 4-4h9.5l4 4.5H41a4 4 0 0 1 4 4V33a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9Z"
        fill={color}
      />
      <path d="M3 15.5h42V18H3z" fill="#ffffff" opacity="0.22" />
      <path
        d="M3 9a4 4 0 0 1 4-4h9.5l4 4.5H7a4 4 0 0 0-4 4V9Z"
        fill="#ffffff"
        opacity="0.15"
      />
    </svg>
  );
}
