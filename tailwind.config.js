module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '5vw': '5vw',
        '10vw': '10vw',
        '5vh': '5vh',
        '10vh': '10vh',
      },
      margin: {
        '5vh': '5vh',
      },
      minWidth: {
        '64px': '64px',
      },
      minHeight: {
        'nav': '64px',
        '50vw': '50vw',
      },
    },
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'blue': '#134AE9',
      'midnight': '#1B263A',
      'accent': '#85F1F0',
      'gradient-dark': '#DCEFF9',
      'gradient-mid': '#CFEEF5',
      'gradient-light': '#C2DEF8',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
