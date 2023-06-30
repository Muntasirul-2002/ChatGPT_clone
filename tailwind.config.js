/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html"],
  theme: {
    extend: {
      colors: {
        chatblack: { 50: "#343541" },
        leftcolor: { 50: "#8E8EA0" },
      },
    },
  },
  plugins: [],
};
