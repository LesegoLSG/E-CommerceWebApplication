/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Black": "#111212",
        "primaryBG":"#f3f2f7",
        "Purple":"#871ff0",
        "Green":"#5fd957",
        "SkyBlue":"#57A3D9"
      },
      fontFamily:{
        "primary":['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

