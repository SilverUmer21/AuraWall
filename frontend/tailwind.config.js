/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7f0df2",
        "primary-light": "#9f4dff",
        "background-light": "#f7f5f8",
        "background-dark": "#191022",
        "surface-dark": "#2B2930",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        display: ["SpaceGrotesk"],
      },
    },
  },
  plugins: [],
};
