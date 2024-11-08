/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif Pro"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      backgroundImage: {
        "custom-image":
          "url('/src/assets/images/img mental health/contact_us/appointment.png')",
      },
    },
  },
  plugins: [],
};
