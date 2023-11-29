/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Light-Cyan': 'hsl(193, 38%, 86%)',
        'Dark-Blue': 'hsl(218, 23%, 16%)',
        'Neon-Green': 'hsl(150, 100%, 66%)',
        'Grayish-Blue': 'hsl(217, 19%, 38%)',
        'Gray-blue-dark': 'hsl(217, 19%, 24%)'

      },
      fontFamily: {
        'manrope': ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    }
  },
  plugins: [],
}
      