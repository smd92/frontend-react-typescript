const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        "color-theme1": "17252A",
      },
      backgroundColor: {
        "color-theme1": "#DEF2F1",
        "color-card-theme1": "#FEFFFF",
        "color-button-theme1": "#3AAFA9",
      },
      borderColor: {
        "color-theme1": "#2B7A78",
      },
      fontFamily: {
        "concert-one": ["Concert One", "sans-serif"],
      },
    },
  },
  safeList: [
    {
      pattern: /text-color-(theme1)/,
    },
    {
      pattern: /bg-color-(theme1)/,
    },
    {
      pattern: /bg-color-card-(theme1)/,
    },
    {
      pattern: /bg-color-button-(theme1)/,
    },
    {
      pattern: /border-color-(theme1)/,
    }
  ],
  plugins: [],
});
