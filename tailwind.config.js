/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // includes app, pages, components folders
  ],
  theme: {
    extend: {
      colors: {
        lightgray: '#f3f4f6', // add your desired color here
      },
      
    },
  },
  plugins: [],
};
