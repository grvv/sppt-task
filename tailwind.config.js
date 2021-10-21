module.exports = {
  purge: {
    enabled: true,
    mode: "all",
    content: [
      "./index.html",
      "./src/**/*.{ts,tsx}",
      "./node_modules/react-date-range/dist/**/*.{js,ts}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
};
