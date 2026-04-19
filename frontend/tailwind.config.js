/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          obsidian: "#020617",
          dark: "#0f172a",
          slate: "#1e293b",
          accent: "#f97316",
          soft: "#fed7aa",
        },
      },
      boxShadow: {
        glow: "0 20px 60px rgba(249, 115, 22, 0.22)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(249, 115, 22, 0.35), transparent 35%), radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.22), transparent 30%)",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
