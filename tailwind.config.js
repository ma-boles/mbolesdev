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
  plugins: [
    function({ addUtilities, theme }) {
      addUtilities({
        '.safari-text-outline-white': {
          color: theme('colors.white'),
          '-webkit-text-stroke': `1px ${theme('colors.white')}`,
        },
        '.safari-text-outline-purple-400': {
          color: theme('colors.purple.400'),
          '-webkit-text-stroke': `1px ${theme('colors.purple.400')}`,
        },
        '.safari-text-outline-purple-500': {
          color: theme('colors.purple.500'),
          '-webkit-text-stroke': `1px ${theme('colors.purple.500')}`,
        },
        '.safari-text-outline-purple-700': {
          color: theme('colors.purple.700'),
          '-webkit-text-stroke': `1px ${theme('colors.purple.700')}`,
        },
        '.safari-text-outline-gray-300': {
          color: theme('colors.gray.300'),
          '-webkit-text-stroke': `1px ${theme('colors.gray.300')}`,
        },
        '.safari-text-outline-gray-400': {
          color: theme('colors.gray.400'),
          '-webkit-text-stroke': `1px ${theme('colors.gray.400')}`,
        },
        '.safari-text-outline-gray-600': {
          color: theme('colors.gray.600'),
          '-webkit-text-stroke': `1px ${theme('colors.gray.600')}`,
        },
        '.safari-text-outline-gray-700': {
          color: theme('colors.gray.700'),
          '-webkit-text-stroke': `1px ${theme('colors.gray.700')}`,
        },
        '.safari-text-outline-green-600': {
          color: theme('colors.green.600'),
          '-webkit-text-stroke': `1px ${theme('colors.green.600')}`,
        },
      }, ['responsive']);
    },
  ],
};
