import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      md2: "828px",
      // => @media (min-width: 828px) { ... }

      md3: "924px",
      // => @media (min-width: 924px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1580px",
      // => @media (min-width: 1580px) { ... }

      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        oswald: ["Oswald Variable", ...defaultTheme.fontFamily.sans],
        "big-shoulders": [
          "Big Shoulders Inline Display Variable",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        "primary-pink": "#B94E96",
        "primary-yellow": "#FABC43",
        "primary-black": "#131A1D ",
      },
    },
  },
  plugins: [],
};
