module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '5vw': '5vw',
      },
      minHeight: {
        'nav': '64px',
      },
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'blue': '#134AE9',
      'midnight': '#1B263A',
      'sky-dark': '#C2DEF8',
      'sky-light': '#DCEFF9',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
