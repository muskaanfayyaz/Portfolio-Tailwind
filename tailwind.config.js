/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#970747',
        secondary: '#ffffff', // or use 'white' directly
      },
      backgroundImage: {
        'gradient-primary-to-white': 'linear-gradient(45deg, #970747, #ffffff)',
      },
    },
  },
  plugins: [],
}

