module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53',
    },
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react/react-in-jsx-scope': ['off'],
  },
}
