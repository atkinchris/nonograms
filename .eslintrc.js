module.exports = {
  root: true,
  extends: [
    // Next.js recommended linting rules and plugins
    'plugin:@next/next/recommended',
    // TypeScript ESLint recommended rules
    'plugin:@typescript-eslint/recommended',
    // Recommendations from React
    'plugin:react/recommended',
    // Airbnb's React ruleset, adapted for TypeScript
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    // Prettier rules and plugins. Must be included after other extends, to avoid conflict.
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    // Only allow process.env in specific, centralised locations
    // The collects together all environment variable usage
    'no-process-env': 'error',

    // Console should not be used directly, to ensure our logging is done in a structured way
    'no-console': 'error',

    // TypeScript is providing compile time prop checking
    'react/prop-types': 'off',

    'react/require-default-props': 'off',

    // Enforce import ordering and spacing
    'import/order': ['error', { 'newlines-between': 'always' }],

    // disallows irregular whitespace that can't easily be seen
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: false,
        skipTemplates: false,
        skipRegExps: false,
        skipComments: false,
      },
    ],

    // Recommended rules that have been historically violated
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/promise-function-async': 'off',

    // Additional rules for stricter async/await
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    'no-void': ['error', { allowAsStatement: true }],

    // Require all named React components to be arrow functions
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],

    // Allow input labels to be associated with their inputs
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  },
}
