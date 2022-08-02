module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: 'postcss-scss',
  plugins: {
    '@csstools/postcss-sass': {},
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
  },
})
