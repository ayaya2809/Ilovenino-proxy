/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./../*.{html,js}",
            "./../anime/*.{html,js}",
            "./../anime/list/*.{html,js}",
            "./../waifu/*.{html,js}",
],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

