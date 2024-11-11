/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Inter", "serif"],
        sans: ["Inter Light", "sans-serif"],
      },
      backgroundImage: {
        "custom-image":
          "url('/src/assets/images/img mental health/contact_us/appointment.png')",
        "aboutUs-image":
          "url('/src/assets/images/img mental health/aboutUs/about.png')",
      },
    },
  },
  plugins: [],
};
