module.exports = {
  purge: {
    enabled: true,
    mode: "all",
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    options: {
      whitelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
};
