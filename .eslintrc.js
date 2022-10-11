module.exports = {
  root: true,
  extends: [
    'airbnb',
    'eslint:recommended',
    '@react-native-community',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'global-require': 0,
        'no-console': 0,
        'no-explicit-any': 0,
        'no-param-reassign': 'off',
        'import/extensions': 0,
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': 0,
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-unresolved': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true, printWidth: 120, trailingComma: 'all' }],
        'import/order': [
          'error',
          {
            pathGroups: [
              {
                pattern: 'constants/**',
                group: 'object',
              },
              {
                pattern: 'assets/**',
                group: 'object',
              },
            ],
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
            'newlines-between': 'always',
            warnOnUnassignedImports: true,
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
