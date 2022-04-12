module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '1/4': '25%',
        '1/5': '20%',
        '1/6': '16.666667%',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
