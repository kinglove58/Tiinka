/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            ".blog-item ul a": {
              color: "#1a202c", // Default link color
              textDecoration: "none",
              transition: "color 0.3s ease",
            },
            ".blog-item ul a:hover": {
              color: "#1616a1", // Hover color
              textDecoration: "none",
            },
          },
        },
      },
      backgroundImage: {
        "custom-image":
          "url(/images/img_mental_health/contact_us/appointment.webp)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
