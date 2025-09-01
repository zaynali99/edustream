import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#111827",
        ink: "#0B1220",
        accent1: "#6366F1",
        accent2: "#8B5CF6",
        gold: "#E6B400"
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,.08)",
        cardxl: "0 20px 50px rgba(0,0,0,.12)"
      },
      borderRadius: {
        xl: "20px",
        "2xl": "24px"
      },
      backgroundImage: {
        "hero-grad": "linear-gradient(135deg,#6366F1, #8B5CF6)"
      }
    }
  },
  plugins: []
};
export default config;
