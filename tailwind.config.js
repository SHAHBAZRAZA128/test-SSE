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
      screens:{
        'mobile': { 'min': '300px', 'max': '650px' },
        'tablet': { 'min': '651px', 'max': '850px' },
        'laptop': { 'min': '851px', 'max': '1326px' },        
        'desktop': { 'min': '1327px', 'max': '3000px' },
        
        
        
      }
    },
  },
  plugins: [],
}

