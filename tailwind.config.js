/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FCFBF8",
        dark: "#2d2d2d",
        orange: "#FF6969",
        html: "#e34c26",
        css: "#2965f1",
        javascript: "#f0db4f",
        react: "#61dafb",
        node: "#3c873a",
        mongo: "#0cd45b",
        tailwind: "#4dc0b5",
        facebook: "#1877F2",
        linkedin: "#0077B5",
        instagram: "#833AB4"
      },
      fontFamily: {
        fullName: 'fullName',
      }
    },
  },
  plugins: [],
}