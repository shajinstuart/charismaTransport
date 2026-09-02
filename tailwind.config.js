/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071A2B",
          900: "#05131F",
          800: "#0C2740",
          700: "#12324F",
          600: "#1A4263",
        },
        gold: {
          DEFAULT: "#D4A72C",
          600: "#B89224",
          light: "#E8C56A",
        },
        teal: {
          DEFAULT: "#00A6A6",
          dark: "#008B8B",
        },
        cream: {
          DEFAULT: "#FAF6EF",
          dark: "#F3EDE3",
        },
        linen: "#EFE8DC",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 40px rgba(7, 26, 43, 0.08)",
        lift: "0 20px 50px rgba(7, 26, 43, 0.14)",
      },
    },
  },
  plugins: [],
};
