/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero':
          "linear-gradient(to bottom, rgba(17, 24, 39, 0.8), rgba(34, 34, 34, 0.6)), url('../public/images/hero.jpg')",
      }
    },
  },
  plugins: [],
}
