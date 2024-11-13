/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["serif"],
        sans: ["sans-serif"],
      },
      backgroundImage: {
        "custom-image":
          "url(/images/img_mental_health/contact_us/appointment.webp)",
      },
    },
  },
  plugins: [],
};
