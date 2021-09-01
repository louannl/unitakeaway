const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
    },
    extend: {
      fontFamily: {
        Courgette: ['Courgette', 'cursive'],
      },
      colors: {
        'uni-green': '#00A058',
        'uni-black': '#272727',
        'uni-red': '#DA4244',
        'uni-red-dark': '#BB2528',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
      fontWeight: ['hover', 'focus', 'active'],
      textColor: ['active'],
    },
  },
  plugins: [],
};
