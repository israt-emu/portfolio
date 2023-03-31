const {fontFamily} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        title: "var(--title-color)",
        small_text: "var(--small-text-color)",
        small_bg: "var(--small-bg-color)",
        hover_color: "var(--hover-color)",
        dark_blue: "#230b3d",
        dark_blue2: "#2C3599",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
