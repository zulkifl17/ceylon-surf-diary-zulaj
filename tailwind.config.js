/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#F7F7F5',
        'primary-text': '#121212',
      },
      fontFamily: {
        tangerine: ['Tangerine', 'cursive'],
      },
    },
  },
  plugins: [],
};
