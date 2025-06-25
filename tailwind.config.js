/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAD549",
        secondary: "#FAD549"
      },
      animation: {
        "spin-reverse": "spin 1s linear reverse infinite",
      },
    },
  },
  plugins: [],
}