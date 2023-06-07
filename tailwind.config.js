/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/js/*.js",
    "./views/**.ejs",
    "./views/*.ejs"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

