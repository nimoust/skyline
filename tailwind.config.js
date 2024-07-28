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
        customYellow : "#FEDF22",
        HideColor : "#858585",
        Blue2:"#0A46F6",
        Blue3:"rgba(10, 70, 246, 0.5)",
        bgGray:"#E5E8EF",
        bgButton:"F8F8F8",
        border:"#7E8288 ",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      height: {
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
      },
      
    },
    
  },
  plugins: [],
}

