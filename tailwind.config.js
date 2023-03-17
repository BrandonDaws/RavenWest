/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Drkblue: '#020085',
        teal: '#0400D1',
        Drkpurp: '#4C00B6',
        Mdpurp: '#7033C5',
        Lgtpurp: '#CF5FCE',
        white: '#ffffff'
            }
    },
  },
  plugins: [],
}
