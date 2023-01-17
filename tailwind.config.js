const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#120D18',
        'dark-light': '#33263E',
        'vivid-pink': '#E42575',
        white: '#F8F7F8',
      },
      fontFamily: {
        Megrim: ['Megrim', 'cursive'],
        NotoSansJP: ['Noto Sans JP', 'cursive'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-blurred-light-white': {
          textShadow: '0px 0px 3px white',
        },
        '.text-blurred-light-pink': {
          textShadow: '0px 0px 3px #F04A5E',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
