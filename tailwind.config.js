module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      grey: "#ABABB9",
      white: "#fff",
      purple: "#8236fd",
      darkPurple: "0e0741",
    },
    extend: {},
  },
  plugins: [],
};
