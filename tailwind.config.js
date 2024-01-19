/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        DMSans: "'DM Sans', sans-serif;"
      },

      colors: {
        cyanColor: "hsl(186, 34%, 60%)",
        softRed: "hsl(10, 79%, 65%)",
        darkBrown: "hsl(25, 47%, 15%)",
        mediumBrown: "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        paleOrange: "hsl(33, 100%, 98%)"
      }
    },
  },
  plugins: [],
}

