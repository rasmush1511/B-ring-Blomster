type DividerVariant = "simple" | "double" | "flower";

interface SectionDividerProps {
  variant?: DividerVariant;
  className?: string;
}

function FlowerMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" style={{ flexShrink: 0 }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="7" cy="3.2" rx="1.4" ry="2.4"
          fill="#F5C030"
          transform={`rotate(${45 * i}, 7, 7)`}
        />
      ))}
      <circle cx="7" cy="7" r="2.4" fill="#E07820" />
      <circle cx="7" cy="7" r="1.5" fill="#C4631A" />
    </svg>
  );
}

export default function SectionDivider({
  variant = "flower",
  className = "",
}: SectionDividerProps) {
  if (variant === "double") {
    return (
      <div className={`flex flex-col gap-1 py-4 ${className}`} aria-hidden="true">
        <div className="h-px bg-[var(--color-secondary)]/15 w-full" />
        <div className="h-px bg-[var(--color-secondary)]/8 w-full" />
      </div>
    );
  }

  if (variant === "flower") {
    return (
      <div className={`flex items-center gap-4 py-4 ${className}`} aria-hidden="true">
        <div className="flex-1 h-px bg-[var(--color-secondary)]/15" />
        <FlowerMini />
        <div className="flex-1 h-px bg-[var(--color-secondary)]/15" />
      </div>
    );
  }

  return (
    <div className={`py-4 ${className}`} aria-hidden="true">
      <div className="h-px bg-[var(--color-secondary)]/15 w-full" />
    </div>
  );
}
