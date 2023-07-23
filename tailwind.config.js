/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#483EFF",
        "theme-sky-blue": "#BEE2FD",
        "theme-light-sky-blue": "#EFF6FF",
        "theme-denim": "#022959",
        "theme-very-light-grey": "#F8F9FF",
        "theme-white": "#FFFFFF",
        "theme-light-grey": "#D6D9E6",
        "theme-grey": "#9699AA",
        "theme-purple": "#483EFF",
        "theme-light-blue": "#ABBCFF",
        "theme-red": "#EE374A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "mobile-bg-image": "url(/assets/images/bg-sidebar-mobile.svg)",
        "desktop-bg-image": "url(path_to_image)",
      },
      // This font declaration is unnecessary in the theme configuration since we have already applied the custom
      // font to the entire body of the application. As a result, there is no need to define the "ubuntu" font
      // family explicitly here, as it's automatically applied to all elements. The font stack used includes
      // "var(--font-ubuntu)" as the primary font, followed by a fallback of "sans-serif".
      // fontFamily: {
      //   ubuntu: ["var(--font-ubuntu)", "sans-serif"],
      // },
    },
  },

  plugins: [],
};
