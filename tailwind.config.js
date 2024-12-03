/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4C3A51',
        'secondary': '#774360',
        'tertiary': '#B25068',
        'quaternary': '#E7AB79'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

