module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  root: true,
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  env: {
    'jest/globals': true,
    browser: true,
  },
  settings: {
    jest: {
      version: 27,
    },
  },
};
