module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#40484F",
        secondary: "#F85D6C",
        tertiary: "#F1B824",
        darkBlue: "#0D1F2F",
        darkerBlue: "#122435",
        textDark: "#3F4042",
        textGray: "#4E525A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
