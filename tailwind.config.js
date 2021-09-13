const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  prefix: "",
  purge: {
    enabled: false,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      grey: colors.trueGray,
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      cyanBlue: colors.cyan,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
