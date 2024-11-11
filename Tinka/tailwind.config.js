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
          "url(/images/img_mental_health/contact_us/appointment.png)",
      },
    },
  },
  plugins: [],
};
