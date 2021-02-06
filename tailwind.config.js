module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-green': '#60777C',
      },
      height: {
        'h-banner': '85vh',
        '97': '26rem'
      },
    },
    minWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    inset: {
      '(-105)': '105%',
      '95': '95%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
