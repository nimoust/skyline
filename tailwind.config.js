/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#5F9AF4',
        customGreen: '#01B58B',
        customOrange: '#FFBE46',
        custombgOrange : '#FFF9EB',
        textColor : '#477EFF',
        bgGround : '#F8F9FC',
        perColor : '#F7B32B',
        customred : '#EB0F26',
        blue : '#0E1C36',
        blue2 : '#EBF1FF',
        blue3 : '#192D45',
        blue4 : '#477EFF',
        green : '#01B58B',
        orange : "#F98927",
        bgColor : "#F8F9FC",
        customGray:"#898E97",
        customYellow : "#FEDF22"
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      
      
    },
    
  },
  plugins: [],
}

