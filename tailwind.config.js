module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat"],
        secondary: ["Open Sans"],
      },
      colors: {
        primary: "#232535",
        secondary: "#585C7D",
        accent1: "#FF9AA2",
        accent2: "#FFDAC1",
        accent3: "#E2F0CB",
        accent4: "#C7CEEA",
      },
      height: {
        "screen-1/3": "33vh",
        "screen-1/2": "50vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
