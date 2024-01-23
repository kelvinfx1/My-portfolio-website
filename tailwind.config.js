/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      //0 => 480px
      'sm': '480px',
      // 480px => 768px *

      'md': '770px',
      // 770px => 1020px ...

      'lg': '1020px',
      // 1020px => 1200px

      'xl': '1200px',
      // 1200px => 1440px

      '2xl': '1300px',
      //1400px => ...

      '3xl': '1500px',
      //1400px => ...

      '4xl': '2500px',
      //1400px => ...
    },
   
    extend: {
      colors: {
        'mainBgColor':  '#5aff80',
        'secondaryBgColor': '#02ff55',
        'hoverColor': '#4ee972',
        'hambourger': '#4c4c4c',
        'borderColor': '#9ca3af'
  
      },
     
    },
  },
  plugins: [require("daisyui")],
}