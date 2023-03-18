/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode:"jit",
  darkMode: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      xs:"540px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  vartiants:{
    extend: {},
  },
  plugins: [],
};
