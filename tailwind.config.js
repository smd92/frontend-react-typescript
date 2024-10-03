const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        "color-primary-theme1": "#3D52A0",
        "color-logo-theme1": "#3D52A0",
        "color-primary-theme2": "#182628",
        "color-logo-theme2": "#65CCB8",
        "color-primary-theme3": "#17252A",
        "color-logo-theme3": "#3AAFA9",
        "color-primary-theme4": "#F7F9FB",
        "color-logo-theme4": "#5085A5",
      },
      backgroundColor: {
        //theme1
        "color-theme1": "#EDE8F5",
        "color-card-theme1": "#FEFFFF",
        "color-button-primary-theme1": "#ADBBDA",
        "color-button-primary-focus-theme1": "#3D52A0",
        "color-button-secondary-theme1": "#17252A",
        //theme2
        "color-theme2": "#F2F2F2",
        "color-card-theme2": "#FEFFFF",
        "color-button-primary-theme2": "#65CCB8",
        "color-button-primary-focus-theme2": "#57BA98",
        "color-button-secondary-theme2": "#3B945E",
        //theme3
        "color-theme3": "#DEF2F1",
        "color-card-theme3": "#FEFFFF",
        "color-button-primary-theme3": "#3AAFA9",
        "color-button-primary-focus-theme3": "#3AAFA9",
        "color-button-secondary-theme3": "#17252A",
        //theme4
        "color-theme4": "#F7F9FB",
        "color-card-theme4": "#FEFFFF",
        "color-button-primary-theme4": "#5085A5",
        "color-button-primary-focus-theme4": "#5085A5",
        "color-button-secondary-theme4": "#31708E",
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
      pattern: /text-color-logo-(theme1)/,
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
    },
  ],
  plugins: [],
});
