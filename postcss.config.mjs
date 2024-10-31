import autoprefixer from 'autoprefixer';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    //tailwindcss: {},
    //autoprefixer: {},
    require('tailwind')('./tailwind.config.js'),
    require('autoprefixer')
  ],
};

export default config;
