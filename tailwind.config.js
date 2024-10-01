const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        "color-primary-theme1": "#3D52A0",
        "color-primary-theme2": "#17252A",
      },
      backgroundColor: {
        // theme1
        "color-theme1": "#EDE8F5",
        "color-card-theme1": "#FEFFFF",
        "color-button-primary-theme1": "#ADBBDA",
        "color-button-primary-focus-theme1": "#3D52A0",
        "color-button-secondary-theme1": "#17252A",
        //theme2
        "color-theme2": "#DEF2F1",
        "color-card-theme2": "#FEFFFF",
        "color-button-primary-theme2": "#3AAFA9",
        "color-button-primary-focus-theme2": "#3AAFA9",
        "color-button-secondary-theme2": "#17252A",
      },
      borderColor: {
        "color-theme2": "#2B7A78",
      },
      fontFamily: {
        "concert-one": ["Concert One", "sans-serif"],
      },
    },
  },
  safeList: [
    {
      pattern: /text-color-primary-(theme1)/,
    },
    {
      pattern: /bg-color-(theme1)/,
    },
    {
      pattern: /bg-color-card-(theme1)/,
    },
    {
      pattern: /bg-color-button-primary-(theme1)/,
    },
    {
      pattern: /bg-color-button-primary-focus-(theme1)/,
    },
    {
      pattern: /border-color-(theme1)/,
    }
  ],
  plugins: [],
});
