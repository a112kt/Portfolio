import { ImageResponse } from "next/og";

export const alt = "Ashrakat Raafat Elabd — Frontend & Mobile Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "92px 100px",
          background: "#04070e",
          backgroundImage:
            "radial-gradient(1200px 700px at -10% -20%, rgba(34,211,238,0.30), transparent 55%), radial-gradient(1100px 700px at 110% 120%, rgba(59,130,246,0.38), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #22d3ee, #3b82f6)",
              color: "#04070e",
              fontSize: "34px",
              fontWeight: 800,
            }}
          >
            A
          </div>
          <div
            style={{
              color: "#22d3ee",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
            }}
          >
            Ashrakat Raafat Elabd
          </div>
        </div>

        <div
          style={{
            marginTop: "36px",
            color: "#eef4ff",
            fontSize: "80px",
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
          }}
        >
          Frontend &amp; Mobile
        </div>
        <div
          style={{
            color: "#22d3ee",
            fontSize: "80px",
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
          }}
        >
          App Developer
        </div>

        <div
          style={{
            marginTop: "40px",
            color: "#a9bcd8",
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          React.js&ensp;&middot;&ensp;Next.js&ensp;&middot;&ensp;React Native&ensp;&middot;&ensp;TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}