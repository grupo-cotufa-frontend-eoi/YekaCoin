const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        lg: "5px 5px 0px #a5c3de, -5px -5px 0px #d7fdff",
        md: "5px 5px 0px #e0d0b7, -5px -5px 0px #ffffe9",
      },
      colors: {
        primary: "#FFECD0",
        secondary: "#FFE2B6",
        lightBlue: "#BEE0FF",
        darkBlue: "#94CBFF",
        orange: "#DA7500",
        marine: "#2192FB",
        gray: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
