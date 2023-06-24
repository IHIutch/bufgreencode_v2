module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.{js,ts,jsx,tsx}'],
      defaultExtractor: (content) => content.match(/[\w-/:[\]]+(?<!:)/g) || [],
    },
    '@csstools/postcss-sass': {},
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
  },
}
