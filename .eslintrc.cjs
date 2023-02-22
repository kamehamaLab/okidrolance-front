module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'eol-last': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'warn',
    'import/extensions': ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // TODO: 利用しているinterfaceのimportでもno-unused-vars出るのでアップデート来るまでoff
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'react/prop-types': 'off',
  },
};
