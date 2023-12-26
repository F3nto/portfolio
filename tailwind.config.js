/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        body : "Rubik",
        sign : "Great Vibes"
      },
      colors : {
        primary : "#00d5ff",
        secondary100 : "#cce3de",
      }
    },
  },
  plugins: [],
}

