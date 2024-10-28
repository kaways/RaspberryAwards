module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:react/recommended',
    'prettier/react',
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'default-case': 'off',
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'react/self-closing-comp': ['warn', { component: true, html: true }],
    'react/display-name': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-script-url': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
