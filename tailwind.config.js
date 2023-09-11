/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray:'hsl(0, 0%, 55%)',
        darkerGray:'hsl(0, 0%, 41%)',
      },
      screens:{
        '2lg': '1084px',
        '0.5xl': '1370px',
      }
     

    },
  },
  plugins: [],
}

