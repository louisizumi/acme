module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'blue': '#134AE9',
      'midnight': '#1B263A',
      'sky-dark': '#C2DEF8',
      'sky-light': '#DCEFF9',
    },
    minHeight: {
      'nav': '64px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
