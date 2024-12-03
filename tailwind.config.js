/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   'primary': '#4E0223',
      //   'secondary': '#72163E',
      //   'tertiary': '#B96087',
      //   'quaternary': '#DB96B4'
      // },
      fontFamily: {
        poppins: "Poppins",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["winter", "sunset", "cyberpunk"],
  },
}

