/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: {
          BG: '#181A20', // Color para el fondo
          BGC: '#2B3139', // color por defecto
          // dark: '#1E40AF', // color oscuro
        },
      },
    },
  },
  plugins: [],
}