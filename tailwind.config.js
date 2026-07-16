/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fde8e9',
          DEFAULT: '#f3656d',
          dark: '#d64c54',
        },
        secondary: {
          light: '#fff4f4',
          DEFAULT: '#fff0f1',
          dark: '#ffdfdf',
        },
        dark: '#2c3e50',
        gray: {
          light: '#f5f5f5',
          DEFAULT: '#e0e0e0',
          dark: '#888888',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
