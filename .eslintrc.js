module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json', './**/tsconfig.json'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json', 'apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
      },
    },
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.turbo/',
    '**/*.d.ts',
    '**/*.js',
    '!.eslintrc.js',
    '.next/',
  ],
};
