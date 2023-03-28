/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundColor: {
        lightBg: "#F5F9FF",
        darkBg: "#212121",
        purbleBg: "#8158fc",
        whiteBg: "#fff",
        wrapper: "rgb(63 , 55 , 95 , 80%)",
      },
      colors: {
        darkText: "#fff",
        lightText: "#212121",
        purbleText: "#8158fc",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
