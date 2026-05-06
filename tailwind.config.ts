import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0C0A07",
          soft: "#1A1510",
          surface: "#252018",
        },
        gold: {
          DEFAULT: "#E8A020",
          light: "#F5C455",
          dim: "#A36E10",
        },
        blue: {
          brand: "#1A4DC4",
        },
        terra: {
          DEFAULT: "#C84B2A",
        },
        stone: {
          DEFAULT: "#E8E4DC",
          muted: "#8A8070",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-space)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
        "scroll-indicator": "scrollBounce 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
