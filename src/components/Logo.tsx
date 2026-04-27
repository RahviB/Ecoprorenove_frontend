type LogoProps = {
  size?: number;
  variant?: "navbar" | "footer";
  withWordmark?: boolean;
  className?: string;
};

export default function Logo({
  size = 42,
  variant = "navbar",
  withWordmark = true,
  className,
}: LogoProps) {
  const dark = variant === "footer" ? "#ffffff" : "#0d1410";
  const green = "#49a739";

  return (
    <span className={`logo ${className ?? ""}`} aria-label="ECOPRORENOVE">
      <svg
        className="logo__mark"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* House silhouette: pentagon with rounded corners */}
        <path
          d="M32 4 L56 22 Q57 23 57 25 L57 56 Q57 58 55 58 L9 58 Q7 58 7 56 L7 25 Q7 23 8 22 Z"
          stroke={dark}
          strokeWidth="3.6"
          strokeLinejoin="round"
          fill="none"
        />

        {/* E spine — vertical bar (left) */}
        <line
          x1="22" y1="28" x2="22" y2="50"
          stroke={dark}
          strokeWidth="3.4"
          strokeLinecap="square"
        />

        {/* E top bar — black */}
        <line
          x1="21.5" y1="28" x2="44" y2="28"
          stroke={dark}
          strokeWidth="3.4"
          strokeLinecap="square"
        />

        {/* E middle bar — green */}
        <line
          x1="22.5" y1="39" x2="38" y2="39"
          stroke={green}
          strokeWidth="3.4"
          strokeLinecap="round"
        />

        {/* Green dot at the end of middle bar */}
        <circle cx="44" cy="39" r="2.6" fill={green} />

        {/* E bottom bar — black */}
        <line
          x1="21.5" y1="50" x2="46" y2="50"
          stroke={dark}
          strokeWidth="3.4"
          strokeLinecap="square"
        />
      </svg>

      {withWordmark && (
        <span className="logo__text" style={{ color: dark }}>
          ECOPRORENOVE
        </span>
      )}
    </span>
  );
}
