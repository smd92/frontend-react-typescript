const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        "company-name": "--color-company-name",
      },
      backgroundColor: {
        "background-color": "--color-background",
      },
      fontFamily: {
        "concert-one": ["Concert One", "sans-serif"],
      },
    },
  },
  plugins: [],
});
