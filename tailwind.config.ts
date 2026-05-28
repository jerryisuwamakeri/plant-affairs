import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F5F0",
        forest: {
          50: "#f0f5f2",
          100: "#d8eadf",
          200: "#afd3be",
          300: "#7ab598",
          400: "#4d956f",
          500: "#2D5A40",
          600: "#234830",
          700: "#1E3D2A",
          800: "#183222",
          900: "#12291b",
        },
        sage: "#8BAF9A",
        bark: "#8B7355",
        warm: {
          50: "#faf8f5",
          100: "#f2ede6",
          200: "#e8e0d4",
          300: "#d9cdc0",
          400: "#c4b49e",
          500: "#a8967c",
        },
        gold: "#C49A3C",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
