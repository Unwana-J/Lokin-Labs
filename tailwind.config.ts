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
          DEFAULT: "#FFFFFF",
          surface: "#F8F9FA",
          subtle: "#F4F4F6",
          line: "rgba(0, 0, 0, 0.08)",
        },
        obsidian: {
          deep: "#090A0E",
          dark: "#12141A",
          surface: "#181B22",
          subtle: "rgba(255, 255, 255, 0.05)",
        },
        terra: {
          crimson: "#9B283A",
          bright: "#BA3248",
        },
        gold: {
          warm: "#E5A024",
        },
        ink: {
          dark: "#09090B",
          muted: "#52525B",
          soft: "#A1A1AA",
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
