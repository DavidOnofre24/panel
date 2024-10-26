module.exports = {
  content: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-animated')
  ],
}
