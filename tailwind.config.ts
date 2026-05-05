import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#06162f",
        ink: "#0b2545",
        electric: "#16a8ff",
        cyanSoft: "#b8ecff"
      },
      boxShadow: {
        glow: "0 0 40px rgba(22, 168, 255, 0.28)",
        premium: "0 24px 80px rgba(2, 13, 31, 0.16)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      },
      borderRadius: {
        "2xl": "1rem"
      }
    }
  },
  plugins: []
};

export default config;
