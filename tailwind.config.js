/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#ed8319ff',
        'orange-secondary': '#f89c41ff',
        'yellow': '#fccc4c ',
      }
    },
  },
  plugins: [],
}