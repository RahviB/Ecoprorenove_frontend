import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          borderRadius: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <svg
          width="132"
          height="132"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 4 L56 22 Q57 23 57 25 L57 56 Q57 58 55 58 L9 58 Q7 58 7 56 L7 25 Q7 23 8 22 Z"
            stroke="#0d1410"
            strokeWidth="3.6"
            strokeLinejoin="round"
            fill="none"
          />
          <line x1="22" y1="28" x2="22" y2="50" stroke="#0d1410" strokeWidth="3.4" strokeLinecap="square" />
          <line x1="21.5" y1="28" x2="44" y2="28" stroke="#0d1410" strokeWidth="3.4" strokeLinecap="square" />
          <line x1="22.5" y1="39" x2="38" y2="39" stroke="#49a739" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="44" cy="39" r="2.6" fill="#49a739" />
          <line x1="21.5" y1="50" x2="46" y2="50" stroke="#0d1410" strokeWidth="3.4" strokeLinecap="square" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
