/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: 
      { 'graffiti-banner': "url('/public/images/graffiti.jpg')",
        'tellafriend-banner': "url('/public/images/grafittime.jpg')",
  
    },
      

      
    },
  },
  plugins: [],
}
