/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#153043",
        "secondary" : "#9AD0C2",
        "tertiary" : "#B0DBE2", 
      }
    },
    // screens: {
    //   'lg': {'max': '2023px'},
    //   // => @media (max-width: 1023px) { ... }

    //   'md': {'max': '767px'},
    //   // => @media (max-width: 767px) { ... }tablet

    //   'sm': {'max': '1000px'},
    //   // => @media (max-width: 639px) { ... }
    // }
    
  },
  plugins: [],
}
