type LogoProps = {
  size?: number;
  variant?: "navbar" | "footer";
  withWordmark?: boolean;
  className?: string;
};

export default function Logo({
  size = 38,
  variant = "navbar",
  withWordmark = true,
  className,
}: LogoProps) {
  const wordmarkColor = variant === "footer" ? "#fff" : "var(--ink, #111a10)";
  const accentColor = "var(--green, #49a739)";

  return (
    <span className={`logo ${className ?? ""}`} aria-label="ECOPRORENOVE">
      <svg
        className="logo__mark"
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Rounded brand frame */}
        <rect x="2" y="2" width="44" height="44" rx="12" fill="#1f4a18" />

        {/* Subtle inner highlight stroke */}
        <rect
          x="3" y="3"
          width="42" height="42"
          rx="11"
          stroke="rgba(168, 226, 150, 0.18)"
          strokeWidth="1"
          fill="none"
        />

        {/* Lower chevron — main brand green */}
        <path
          d="M10 33 L24 21 L38 33"
          stroke="#49a739"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Upper chevron — accent light green (smaller, sits inside) */}
        <path
          d="M14 24 L24 15 L34 24"
          stroke="#a8e296"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {withWordmark && (
        <span className="logo__text" style={{ color: wordmarkColor }}>
          <span className="logo__text-strong">ECOPRO</span>
          <span className="logo__text-accent" style={{ color: accentColor }}>RENOVE</span>
        </span>
      )}
    </span>
  );
}
