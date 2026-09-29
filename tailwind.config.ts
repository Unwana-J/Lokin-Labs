import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FAF7F0",
          surface: "#EFE9DB",
          line: "rgba(20, 26, 15, 0.08)",
        },
        olive: {
          deep: "#141B0E",
          dark: "#1E2714",
          rich: "#323F23",
          subtle: "rgba(50, 63, 35, 0.05)",
        },
        terra: {
          crimson: "#9B283A",
          bright: "#D33D54",
        },
        chartreuse: {
          DEFAULT: "#C4E456",
        },
        gold: {
          ochre: "#D99B26",
        },
        ink: {
          dark: "#11150D",
          muted: "#535C48",
          soft: "#858E79",
        },
      },
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "'IBM Plex Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
