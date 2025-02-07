/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      width: {
        "custom-sm": "731px",
        "custom-md": "1260px",
        "custom-lg": "1890px",
      },
    },
  },
};
