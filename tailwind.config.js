/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: 
      { 'graffiti-banner': "url('/public/imagenes/graffiti.jpg')" },
      colors: {
        'oscuro': '#1F1F1F'
      },
    },
  },
  plugins: [],
}
