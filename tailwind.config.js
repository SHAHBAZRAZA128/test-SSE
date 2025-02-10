/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        latoo : [ "Lato", "serif"] ,
      },
      backgroundImage: {
        'redOrange-gradient': "linear-gradient(#D80032 , #FF8254)",
        'brownYellow-gradient': "linear-gradient(#EA9010 , #F2FF60)",
      },
    },
  },
  plugins: [],
}

