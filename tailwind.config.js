/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}',],
  // tailwind.config.js
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['Inter', 'sans-serif'],
       // Tu fuente personalizada
      },
      fontSize: {
        '18': '18px', // Definir el tamaño de fuente
      },
      lineHeight: {
        '32': '32px', // Define el espacio entre líneas
      },
    },
  },
  plugins: [],
};



