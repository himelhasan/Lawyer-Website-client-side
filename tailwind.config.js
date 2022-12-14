/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fefcbf", // For lighter primary color
          DEFAULT: "#b7791f", // Normal primary color
          dark: "#744210", // Used for hover, active, etc.
          blue: "#070736", // #070736
          golden: "#D2AE6D",
        },
      },
    },
  },
  plugins: [require("kutty")],
};
