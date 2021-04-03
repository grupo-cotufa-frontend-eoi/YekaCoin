const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tablet: "900px",
        height: "1600px",
      },
      boxShadow: {
        lg: "5px 5px 0px #a5c3de, -5px -5px 0px #d7fdff",
        md: "5px 5px 0px #e0d0b7, -5px -5px 0px #ffffe9",
        bubble: "-5px -5px 0px #2d665f, 5px 5px 0px #b3ffff",
      },
      colors: {
        primary: "#FFECD0",
        secondary: "#FFE2B6",
        lightBlue: "#BEE0FF",
        darkBlue: "#94CBFF",
        orange: "#DA7500",
        marine: "#2192FB",
        turquoise: "#70FFEE",
        indigo: colors.indigo,
        yellow: colors.amber,
        grey: colors.coolGray,
      },
      gridTemplateColumns: {
        16: "90% 10%",
        18: "80% 20%",
        20: "95% 5%",
      },
      maxHeight: {
        99: "29rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
