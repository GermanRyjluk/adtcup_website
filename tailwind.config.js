/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B4D98",
        secondary: "#FEB635",
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "infinite-scroll": "scrollX 20s linear infinite",
      },
    },
  },
  plugins: [],
};
