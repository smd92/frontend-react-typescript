const { text } = require("stream/consumers");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "conert-one": ["Concert One", "sans-serif"],
      }
    },
  },
  plugins: [],
});
