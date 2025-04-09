/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4B91",
        secondary: "#6C757D",
        success: "#28A745",
        info: "#17A2B8",
        warning: "#FFC107",
        danger: "#DC3545",
        light: "#F8F9FA",
        dark: "#343A40",
        gray: {
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      zIndex: {
        1000: "1000",
        1001: "1001",
      },
    },
  },
  plugins: [],
};
