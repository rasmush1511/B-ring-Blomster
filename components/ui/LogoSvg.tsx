// Logo bygget som SVG-komponent — blomst-ikon + ordmærke i Fraunces
// Matcher DNA fra Båring Blomsters logo: gul blomst, grøn typografi

interface LogoSvgProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

function FlowerIcon({ size = 28 }: { size?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const petalCount = 8;
  const petalLength = size * 0.38;
  const petalWidth = size * 0.14;
  const centerR = size * 0.22;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {Array.from({ length: petalCount }).map((_, i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy - petalLength * 0.5}
          rx={petalWidth}
          ry={petalLength * 0.6}
          fill="#F5C030"
          transform={`rotate(${(360 / petalCount) * i}, ${cx}, ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={centerR} fill="#E07820" />
      <circle cx={cx} cy={cy} r={centerR * 0.65} fill="#C4631A" />
    </svg>
  );
}

export default function LogoSvg({
  variant = "light",
  size = "md",
  showTagline = false,
}: LogoSvgProps) {
  const textColor = variant === "light" ? "#ffffff" : "var(--color-secondary)";
  const taglineColor = variant === "light" ? "rgba(255,255,255,0.7)" : "var(--color-muted)";

  const fontSizes = { sm: 16, md: 20, lg: 26 };
  const iconSizes = { sm: 22, md: 28, lg: 36 };
  const fontSize = fontSizes[size];
  const iconSize = iconSizes[size];

  return (
    <span
      className="inline-flex flex-col gap-0.5"
      style={{ fontFamily: "var(--font-serif)" }}
    >
      <span className="inline-flex items-center gap-2">
        <FlowerIcon size={iconSize} />
        <span
          style={{
            fontSize,
            color: textColor,
            letterSpacing: "-0.02em",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          Båring Blomster
        </span>
      </span>
      {showTagline && (
        <span
          style={{
            fontSize: fontSize * 0.6,
            color: taglineColor,
            letterSpacing: "0.02em",
            paddingLeft: iconSize + 8,
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
          }}
        >
          Vi' på toppen
        </span>
      )}
    </span>
  );
}
