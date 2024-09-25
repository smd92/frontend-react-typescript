const { text } = require("stream/consumers");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        card: "rgba(var(--card))",
        text: "rgba(var(--text))",
        button: "rgba(var(--button))",
        buttonHover: "rgba(var(--button-hover))",
      },
    },
  },
  plugins: [],
};
