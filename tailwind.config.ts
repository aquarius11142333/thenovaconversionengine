import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        graphite: "#111827",
        cyan: "#22D3EE",
        violet: "#A78BFA",
        ink: "#F8FAFC",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "nova-gradient":
          "radial-gradient(circle at 20% -10%, rgba(34,211,238,0.18), transparent 45%), radial-gradient(circle at 90% 10%, rgba(167,139,250,0.16), transparent 40%), linear-gradient(180deg, #0F172A 0%, #111827 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,0.15), 0 20px 60px -20px rgba(34,211,238,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
