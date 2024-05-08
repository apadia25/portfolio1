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
  },
  plugins: [],
}
