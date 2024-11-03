/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
      fontWeight: {
        'extrabold': '800', 
        'semibold': '600',
      },
      screens: {
        'lg-mobile': '414px', // Large mobile
      },
    },
  },
  plugins: [],
};
