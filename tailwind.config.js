/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E4E4E4',
        secondary: '#828282',
        terciary: '#181818'
      },
      fontFamily: {
        default: [
          '-apple-system',
          'system-ui',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Fira Sans',
          'Ubuntu',
          'Oxygen',
          'Oxygen Sans',
          'Cantarell',
          'Droid Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Lucida Grande',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      },
      animation: {
        bounceAndLight:
          'bounce 3s ease-in-out infinite, light 2s ease-in-out infinite alternate'
      }
    }
  },
  plugins: []
};
