// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005B96",      // Dark blue
        secondary: "#f5f8fb",    // Light grey-blue
      },
    },
  },
  plugins: [],
};
