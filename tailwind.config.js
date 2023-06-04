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
        moonstar: ['Moonstar', 'Decoder', 'sans-serif'],
        diabolica: ['Diabolica', 'Decoder', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

