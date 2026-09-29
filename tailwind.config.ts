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
          subtle: "#F2F5F8",
          line: "rgba(17, 22, 31, 0.08)",
        },
        obsidian: {
          deep: "#10141D",
          dark: "#141A24",
          surface: "#1A2230",
          subtle: "rgba(255, 255, 255, 0.06)",
        },
        terra: {
          crimson: "#9B283A",
          bright: "#BA3248",
          light: "#FBF0F2",
          subtle: "#FDF7F8",
        },
        brand: {
          blue: "#3E6B89",
          blueLight: "#EBF3F8",
          blueSubtle: "#F4F8FA",
          olive: "#2E3D27",
          "olive-bright": "#3A4F32",
          "olive-light": "#EBF0E8",
          "olive-subtle": "#F5F7F4",
        },
        gold: {
          warm: "#E5A024",
        },
        ink: {
          dark: "#10141D",
          muted: "#4A5568",
          soft: "#8A94A6",
        },
      },
      fontFamily: {
        sans: [
          "'Cabinet Grotesk'",
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
