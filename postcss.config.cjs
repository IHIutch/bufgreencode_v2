const handlePurge = (ctx) => {
  // return ctx.file.basename !== 'main.scss'
  //   ? {
  //       '@fullhuman/postcss-purgecss': {
  //         content: ['./app/**/*.{js,ts,jsx,tsx}'],
  //         defaultExtractor: (content) =>
  //           content.match(/[\w-/:[\]]+(?<!:)/g) || [],
  //       },
  //     }
  //   : {}
  return {
    // '@fullhuman/postcss-purgecss': {
    //   content: ['./src/**/*.{js,ts,jsx,tsx}'],
    //   defaultExtractor: (content) => content.match(/[\w-/:[\]]+(?<!:)/g) || [],
    // },
  }
}

module.exports = (ctx) => {
  console.log({ ctx })
  return {
    // map: ctx.options.map,
    parser: 'postcss-scss',
    plugins: {
      ...handlePurge(ctx),
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
}
