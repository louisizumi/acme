module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'blue': '#134AE9',
        'midnight': '#1B263A',
        'accent': '#85F1F0',
        'light': '#EDF4F6',
        'gradient-dark': '#DCEFF9',
        'gradient-mid': '#CFEEF5',
        'gradient-light': '#C2DEF8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
