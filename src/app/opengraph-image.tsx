import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "ECOPRORENOVE — Rénovation énergétique tertiaire, résidentielle & agricole";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0f1714 0%, #1a2b1d 55%, #2a5f20 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, Segoe UI, Helvetica, Arial",
          position: "relative",
        }}
      >
        {/* top bar — eyebrow + brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#49a739",
                boxShadow: "0 0 0 6px rgba(73,167,57,.25)",
              }}
            />
            <span
              style={{
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(207,231,194,.85)",
              }}
            >
              ECOPRORENOVE
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,.55)",
            }}
          >
            Métropole · La Réunion
          </span>
        </div>

        {/* main wordmark + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: 1000,
              display: "flex",
            }}
          >
            Rénovation énergétique{" "}
            <span style={{ color: "#a8e296", display: "flex" }}>·</span>
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 500,
              lineHeight: 1.25,
              color: "rgba(207,231,194,.92)",
              maxWidth: 980,
              display: "flex",
            }}
          >
            Tertiaire · Résidentiel · Agricole — dossier CEE sécurisé, pose
            RGE.
          </div>
        </div>

        {/* footer pill row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          {[
            "Prime CEE",
            "MaPrimeRénov'",
            "Pose RGE",
            "Interlocuteur unique",
          ].map((t) => (
            <span
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,.07)",
                border: "1px solid rgba(207,231,194,.22)",
                color: "rgba(255,255,255,.86)",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
