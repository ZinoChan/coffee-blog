const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { 
        main: ['Syncopate', ...defaultTheme.fontFamily.sans],
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
        playfair: ['Playfair Display', ...defaultTheme.fontFamily.serif],
    },

    colors: {
        rafia: "#ECD7BB",
        'white-rock': "#EBE2D1",
        main: "#F9F4EC",
        secondary: "#F8E177",
        chicago: "#565352" 
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
