/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "0rem",
      margin: "0",
      center: true,
    },
    extend: {
      animation: {
        datang: "1s slideDatang",
        pergi: " 1.2s slidePergi",
      },
      keyframes: {
        slideDatang: {
          "0%": {
            right: "-380px",
            top: "-32px",
          },
          "100%": {
            right: "0px",
            top: "-32px",
          },
        },
        slidePergi: {
          "0%": {
            right: "0px",
            top: "-32px",
          },
          "100%": {
            right: "-680px",
            top: "-32px",
          },
        },
      },
      fontFamily: {
        amek: "Anek Telugu",
      },
    },
  },
  plugins: [],
};
