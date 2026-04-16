// Subtile botaniske SVG-dekorationer i sektionsbaggrunde
// Bladsilhuetter og stængler — bruges ved lav opacitet

interface BotanicalDecorProps {
  variant?: "leaves-right" | "leaves-left" | "stem-right" | "full";
  className?: string;
  opacity?: number;
}

export default function BotanicalDecor({
  variant = "leaves-right",
  className = "",
  opacity = 0.1,
}: BotanicalDecorProps) {
  const color = "var(--color-secondary)";

  if (variant === "leaves-right") {
    return (
      <svg
        className={`absolute pointer-events-none select-none ${className}`}
        viewBox="0 0 220 320"
        fill="none"
        aria-hidden="true"
        style={{ opacity, color }}
      >
        {/* Stor blad */}
        <path
          d="M180,10 C180,10 220,80 200,160 C180,240 120,280 80,300 C80,300 140,200 160,120 C180,40 180,10 180,10 Z"
          fill="currentColor"
        />
        {/* Midterste blad */}
        <path
          d="M140,60 C140,60 175,120 160,180 C145,240 100,270 70,280 C70,280 120,200 135,140 C150,80 140,60 140,60 Z"
          fill="currentColor"
          opacity="0.6"
        />
        {/* Lille blad */}
        <path
          d="M190,5 C195,25 185,50 165,65 C175,40 185,15 190,5 Z"
          fill="currentColor"
          opacity="0.5"
        />
        {/* Stængel */}
        <path
          d="M175,320 C175,280 170,200 150,120 C165,195 175,275 175,320"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
      </svg>
    );
  }

  if (variant === "leaves-left") {
    return (
      <svg
        className={`absolute pointer-events-none select-none ${className}`}
        viewBox="0 0 220 320"
        fill="none"
        aria-hidden="true"
        style={{ opacity, color, transform: "scaleX(-1)" }}
      >
        <path
          d="M180,10 C180,10 220,80 200,160 C180,240 120,280 80,300 C80,300 140,200 160,120 C180,40 180,10 180,10 Z"
          fill="currentColor"
        />
        <path
          d="M140,60 C140,60 175,120 160,180 C145,240 100,270 70,280 C70,280 120,200 135,140 C150,80 140,60 140,60 Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M175,320 C175,280 170,200 150,120 C165,195 175,275 175,320"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
      </svg>
    );
  }

  if (variant === "stem-right") {
    return (
      <svg
        className={`absolute pointer-events-none select-none ${className}`}
        viewBox="0 0 80 300"
        fill="none"
        aria-hidden="true"
        style={{ opacity, color }}
      >
        {/* Stængel */}
        <path
          d="M40,300 C38,240 35,180 40,120 C45,60 50,20 48,0"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Lille blad til venstre */}
        <path
          d="M39,180 C20,160 10,130 15,110 C25,130 35,160 39,180 Z"
          fill="currentColor"
        />
        {/* Lille blad til højre */}
        <path
          d="M41,120 C60,100 70,70 65,50 C55,70 45,100 41,120 Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // full — kombination af blade og stængler
  return (
    <svg
      className={`absolute pointer-events-none select-none ${className}`}
      viewBox="0 0 400 300"
      fill="none"
      aria-hidden="true"
      style={{ opacity, color }}
    >
      <path
        d="M360,10 C360,10 400,80 380,150 C360,220 310,260 280,275 C280,275 330,195 350,120 C370,45 360,10 360,10 Z"
        fill="currentColor"
      />
      <path
        d="M10,280 C30,240 60,180 55,120 C50,60 40,20 45,5 C55,45 65,100 60,160 C55,220 30,260 10,280 Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M200,300 C198,240 195,160 200,100"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M199,200 C180,180 170,150 178,135 C188,155 196,180 199,200 Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}
