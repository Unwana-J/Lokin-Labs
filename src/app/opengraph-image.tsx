import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Lokin Labs — Software Built With Obsession";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#090A0E",
          color: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top Studio Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            paddingBottom: "28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#9B283A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                fontWeight: 900,
                fontSize: "22px",
                color: "#FFFFFF",
              }}
            >
              L
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}
            >
              Lokin Labs
            </span>
          </div>

          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#A1A1AA",
              fontFamily: "monospace",
            }}
          >
            INDEPENDENT DIGITAL PRODUCT LAB · ABUJA &amp; GLOBAL
          </span>
        </div>

        {/* Center Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              fontSize: "74px",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Software built with obsession.</span>
            <span style={{ color: "#BA3248" }}>Impossible to put down.</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#A1A1AA",
              maxWidth: "880px",
              lineHeight: 1.4,
            }}
          >
            Creators of Fey (Vocal Articulation Platform), Creed, Roost AI,
            Vantage, Qore SD-PIS &amp; Lokin Study.
          </div>
        </div>

        {/* Bottom Telemetry Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "28px",
            fontSize: "14px",
            fontFamily: "monospace",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#D4D4D8",
          }}
        >
          <span>FLAGSHIP: FEY.LOKINLABS.COM.NG</span>
          <span style={{ color: "#34D399" }}>
            ● 6 ENGINEERED SYSTEMS · LIVE IN PRODUCTION
          </span>
          <span>LOKINLABS.COM.NG</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
