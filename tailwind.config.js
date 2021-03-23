const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        // DEFAULT: "10px 10px 0px #52606e,- 10px - 10px 0px #ffffff",
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
