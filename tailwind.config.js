/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        selected: '0 4px 14px 0 rgba(0, 0, 0, 0.5)'
      },
      colors: {
        uhigreen: '#D5F8C8;',
        uhipurple: '#d3c8f8',
        'uhigreen-secondary': '#BCE974'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
