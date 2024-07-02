/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFCF2B",
          200: "#FF8935",
        },
        secondary: {
          100 : "#dadada",
          200 : "#0A101E",
          300 : "#1c2231"
        },
      },
    },
    clippath:{
      clippath: polygon(0% 0%, 100% 0%, 100% 75%, 68% 75%, 54% 100%, 37% 75%, 0% 75%)

    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
