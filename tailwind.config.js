/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        richblack: "#02010a",
        oxforblue: "#04052E",
        navyblue: "#22007C"
      },
      backgroundImage: {
        'dust2': "url('https://preview.redd.it/ifyau5sbxta61.png?auto=webp&s=93a5e67dfc34de3bf252a50288975889790df042')"
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}
