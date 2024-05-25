/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0010ff",

          "secondary": "#00c2c3",

          "accent": "#ba0000",

          "neutral": "#131c30",

          "base-100": "#f6fefa",

          "info": "#0086ff",

          "success": "#41f8a0",

          "warning": "#c85b00",

          "error": "#ffe4e6",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

