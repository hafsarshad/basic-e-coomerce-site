/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      ".src/app/**/*.{js,ts,jsx,tsx}",
      ".src/app/pages/**/*.{js,ts,jsx,tsx}",
      ".src/components/**/*.{js,ts,jsx,tsx}",
    ],
   theme: {
    extend: {
     colors: {
       lightgray: '#F3F3F4',
      },
      fontFamily: {
        instrument: ['"Instrument Sans"', 'sans-serif'],
      },
    },
  },
    plugins: [],
  }
  