/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800000',
        'pacman-bg': '#FFFF00', // PAC-MAN yellow
        'pacman-text': '#0000FF', // PAC-MAN blue
        'pacman-yellow': '#FFFF00',
        'pacman-blue': '#0000FF',
          
      }
    },
  },
  plugins: [],
}

