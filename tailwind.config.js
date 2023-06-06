const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        moonstar: ['Moonstar', 'sans-serif'],
        diabolica: ['Diabolica', 'sans-serif'],
        decoder: ['Decoder', 'sans-serif'],
        slant: ['Slant', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

