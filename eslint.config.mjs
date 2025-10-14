import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:prettier/recommended',
      // 'plugin:import/recommended',
    ],
    ignorePatterns: ['build /**/*'],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', 'unused-imports', 'simple-import-sort'],
    overrides: [
      {
        files: ['*.ts', '*.tsx', 'src/iconify-bundle /*'],
        rules: {
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          '@typescript-eslint/no-var-requires': 'off',
        },
      },
    ],
    rules: {
      '@next/next/no-img-element': 'off',
      'max-lines': ['error', { max: 1000, skipBlankLines: false, skipComments: false }],
      'prefer-arrow-callback': ['warn', { allowNamedFunctions: false }],
      'no-duplicate-imports': 'error',
      'no-console': 'warn',
      'no-empty': 'off',
      'no-debugger': 'warn',
      eqeqeq: 'error',
      'prettier/prettier': 'error',
      'array-callback-return': 'warn',
      'no-unused-vars': 'off',
      'no-empty-function': 'off',
      'no-unsafe-optional-chaining': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^next'], // 1. React and Next first
            ['^@?\\w'], // 2. Packages (node_modules)
            ['^@/', '^~/'], // 3. Internal alias like @/, ~/
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // 4. Parent imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // 5. Sibling imports
            ['^.+\\.s?css$'], // 6. Style imports
            ['^'], // 7. Anything else (fallback)
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'off',
      'react/display-name': 'off',
      'react/no-array-index-key': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-unstable-nested-components': [
        'off',
        {
          allowAsProps: false,
        },
      ],
      'react/jsx-key': [
        'warn',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      'react/jsx-no-useless-fragment': [
        'off',
        {
          allowExpressions: true,
        },
      ],
      // 'lines-around-comment': [
      //   'error',
      //   {
      //     beforeBlockComment: true,
      //     beforeLineComment: true,
      //     allowBlockStart: true,
      //     allowObjectStart: true,
      //     allowArrayStart: true,
      //   },
      // ],

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'any',
          prev: 'export',
          next: 'export',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['function', 'multiline-const', 'multiline-block-like'],
        },
        {
          blankLine: 'always',
          prev: ['function', 'multiline-const', 'multiline-block-like'],
          next: '*',
        },
      ],

      'newline-before-return': 'error',
      'import/newline-after-import': [
        'error',
        {
          count: 1,
        },
      ],
    },
  }),
  { ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'] },
]

export default eslintConfig
