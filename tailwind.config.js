module.exports = {
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
      gridTemplateColumns: {
        'stories': 'repeat(3, minmax(7.5rem, 10rem))'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
