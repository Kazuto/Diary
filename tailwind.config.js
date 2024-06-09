/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF9900",
          50: "#FFD08A",
          100: "#FFCA7A",
          200: "#FFBE5C",
          300: "#FFB13D",
          400: "#FFA51F",
          500: "#FF9900",
          600: "#E68A00",
          700: "#CC7A00",
          800: "#B36B00",
          900: "#995C00",
          950: "#8C5400",
        },
        secondary: {
          DEFAULT: "#142534",
          50: "#4178A8",
          100: "#3C6E9B",
          200: "#325C81",
          300: "#284A68",
          400: "#1E374E",
          500: "#142534",
          600: "#11202D",
          700: "#0E1B25",
          800: "#0C151E",
          900: "#091017",
          950: "#070D13",
        },
      },
    },
  },
  plugins: [],
};
