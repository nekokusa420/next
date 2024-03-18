/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{tsx,js}", "./components/**/*.{tsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
