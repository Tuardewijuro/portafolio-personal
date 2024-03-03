module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {},
      backgroundImage: (theme) => ({
        "gradient-background":
          "linear-gradient(45deg, #0b2f11 10%, #082008 20%, #030c03 50%, #082008 80%, #0b2f11 90%)",
      }),
      transitionProperty: {
        transform: "transform",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
