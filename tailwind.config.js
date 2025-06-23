/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
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
  