/** @type {import('tailwindcss').Config} */
const { colors } = require('./color-palette.js');

console.log(colors)

module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors,
    },
    plugins: [],

};