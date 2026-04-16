// Håndtegnet bølget understregning i gul accent under nøgleoverskrifter

interface RoughUnderlineProps {
  width?: number | string;
  className?: string;
}

export default function RoughUnderline({
  width = "100%",
  className = "",
}: RoughUnderlineProps) {
  return (
    <svg
      viewBox="0 0 200 8"
      preserveAspectRatio="none"
      style={{ width, height: 8, display: "block" }}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0,5 Q20,1 45,4.5 Q65,7.5 90,4 Q115,0.5 140,4.5 Q165,8 185,4.5 Q195,3 200,4"
        stroke="#F5C030"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
