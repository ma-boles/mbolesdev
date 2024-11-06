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
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'extrabold': '800',
        'bold': '700',
        'semibold': '600',
        'medium': '500',
        'regular': '400'
      },
      screens: {
        'lg-mobile': '414px', // Large mobile
      },
    },
  },
  plugins: [],
};
