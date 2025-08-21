/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // includes app, pages, components folders
  ],
  theme: {
    extend: {
      colors: {
        lightgray : '#f3f4f6',
        logoblack :'#2A2828',
        requiredgreen : '#2FAB8C',
        hovergreen : '#36D0AA',
        lightyellow: '#FEEA81'// add your desired color here
      },
      
    },
  },
  plugins: [],
};
