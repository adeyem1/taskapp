/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}

