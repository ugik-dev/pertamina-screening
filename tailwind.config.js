/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        nerko: ["var(--font-nerko)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
