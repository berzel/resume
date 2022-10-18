const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        radio: ['Radio Canada', ...defaultTheme.fontFamily.serif]
      },
    },
  },
  plugins: [],
}
