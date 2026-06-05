import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F2EA",
        clay: "#C9785B",
        sage: "#8FA89B",
        petrol: "#173B3F",
        rose: "#D8AAA0",
        stone: "#D6C7B8",
        charcoal: "#2F2B28",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(23,59,63,0.08), 0 1px 4px rgba(23,59,63,0.04)",
        "card-hover": "0 8px 40px rgba(23,59,63,0.14), 0 2px 8px rgba(23,59,63,0.06)",
        float: "0 8px 32px rgba(23,59,63,0.20)",
      },
      borderRadius: {
        card: "22px",
      },
    },
  },
  plugins: [],
};

export default config;
