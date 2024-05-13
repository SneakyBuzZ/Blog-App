/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster Two'],
        unica: ['Unica One'],
        DM: ['DM Sans']
      }
    },
  },
  plugins: [],
}