process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: [
    'next',
    '@antfu',
  ],
  rules: {
    'n/prefer-global/process': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'ts-ignore': 'allow-with-description',
  },
}
