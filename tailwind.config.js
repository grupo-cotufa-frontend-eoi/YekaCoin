const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.amber, // Primary-50
        secondary: colors.orange, // Secondary-400
        blue: colors.cyan, // LightBlue-300 o 400/500 para el darkBlue
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
