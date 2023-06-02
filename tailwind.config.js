/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        moonstar: ['Moonstar', 'Decoder', 'sans-serif'],
        diabolica: ['Diabolica', 'Decoder', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

