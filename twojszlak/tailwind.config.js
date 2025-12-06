/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f172a",
        card: "#111827",
        text: "#e5e7eb",
        muted: "#94a3b8",
        accent: "#22d3ee",
        border: "#1f2937",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Bebas Neue", "sans-serif"],
      },
      boxShadow: {
        sm: "0 4px 10px rgba(0, 0, 0, 0.05)",
        md: "0 6px 16px rgba(0, 0, 0, 0.08)",
        lg: "0 8px 24px rgba(0, 0, 0, 0.06)",
        glow: "0 12px 32px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
