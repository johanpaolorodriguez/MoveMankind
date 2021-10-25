module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
        "-40": "-40",
      },
      fontFamily: {
        primary: ["Montserrat"],
        secondary: ["Open Sans"],
      },
      colors: {
        document: "#FAFBFF",
        primary: "#232535",
        secondary: "#585C7D",
        accent1: "#00D0FF",
        accent2: "#00FFAF",
        accent3: "#D0FF00",
        accent4: "#D3D3D3",
      },
      height: {
        "screen-1/3": "33vh",
        "screen-1/2": "50vh",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      opacity: ["disabled"],
      pointerEvents: ["disabled"],
    },
  },
  plugins: [],
};
