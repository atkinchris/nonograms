module.exports = {
  root: true,
  extends: [
    // Next.js recommended linting rules and plugins
    'next/core-web-vitals',
    // TypeScript ESLint strict rules, with type checking
    'plugin:@typescript-eslint/strict-type-checked',
    // Prettier rules and plugins. Must be included after other extends, to avoid conflict.
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Only allow process.env in specific, centralised locations
    // The collects together all environment variable usage
    'no-process-env': 'error',

    // Console should not be used directly, to ensure our logging is done in a structured way
    'no-console': 'error',

    // Enforce import ordering and spacing
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
}
