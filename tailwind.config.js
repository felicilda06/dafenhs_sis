module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        'calc-1':'60vh',
      },
      fontFamily:{
        poppins:'Poppins',
      },
      fontSize:{
        'calc-1':'17px',
        'calc-2':'15px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
