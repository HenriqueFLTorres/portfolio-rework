/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E4E4E4",
        secondary: "#828282",
        terciary: "#181818",
      },
      fontFamily: {
        OpenSans: ['"Open Sans"', "sans serif"],
      },
      animation: {
        bounceAndLight:
          "bounce 3s ease-in-out infinite, light 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
