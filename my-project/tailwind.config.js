/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['media', 'class'], // Utilisation de 'media' et 'class' pour gérer le mode sombre
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
