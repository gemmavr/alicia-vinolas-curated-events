import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./data/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F2EC",
        charcoal: "#2B2925",
        sage: "#687060",
        terracotta: "#B76A4D",
        stone: "#E8DED2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
        serif: ["var(--font-instrument)", "Instrument Serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
