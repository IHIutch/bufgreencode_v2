process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: [
    'next',
    '@antfu',
  ],
  rules: {
    'n/prefer-global/process': ['error', 'always'],
  },
}
