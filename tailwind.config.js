/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'grey-fade' : 'rgba(217, 217, 217, 0.70);'
      }
    }
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }],
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
}