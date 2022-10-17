/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      borderWidth : {
        'border-5' :' 5px',
        
      }
    },
  },
  plugins: [],
}
