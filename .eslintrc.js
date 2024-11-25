const path = require('path')

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:storybook/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		useJSXTextNode: true,
		project: [path.resolve(__dirname, 'tsconfig.eslint.json')],
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
	},
	root: true,
	plugins: ['@typescript-eslint', 'react', 'prettier', 'import', 'react-hooks', 'unused-imports'],
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
			node: {
				paths: ['./'],
			},
		},
	},
	rules: {
		'prettier/prettier': 'warn',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*', '**/*.config.js'],
				peerDependencies: true,
			},
		],
		'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
		'no-await-in-loop': 'warn',
		// Base
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false,
			},
		],
		'no-console': 'error',
		'no-plusplus': 0,
		'no-param-reassign': 'off',
		'padding-line-between-statements': 'off',
		'class-methods-use-this': 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],
		'arrow-body-style': 1,
		'@typescript-eslint/no-var-requires': 'off',

		// Imports
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/prefer-default-export': 'off',
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external', 'internal'],
					['parent', 'sibling', 'index', 'object', 'type'],
				],
				pathGroups: [
					{
						pattern: 'react',
						group: 'builtin',
						position: 'before',
					},
					{
						pattern: './*.module.css',
						group: 'type',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes: ['react', './RadioButton.module.css'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				'newlines-between': 'always',
			},
		],
		'sort-imports': [
			'error',
			{
				ignoreDeclarationSort: true,
				ignoreCase: true,
			},
		],
		// React
		'react/no-unknown-property': [2, { ignore: ['fill'] }],
		'react/jsx-sort-props': [
			'warn',
			{
				callbacksLast: true,
				shorthandFirst: true,
				multiline: 'last',
			},
		],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.jsx', 'tsx'],
			},
		],
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: false,
				assignment: false,
			},
		],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
				unnamedComponents: 'function-expression',
			},
		],
		'react/prop-types': 'off',
		'react/require-default-props': 'off',
		'react/jsx-pascal-case': 'off',
		'react/react-in-jsx-scope': 'off',
		// React hooks
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': ['warn'],
	},
	overrides: [
		// typescript
		{
			files: ['*.{ts,tsx}'],
			extends: [
				'airbnb-typescript',
				'plugin:prettier/recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:import/typescript',
			],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 0,
				'no-shadow': 'off',
				'@typescript-eslint/no-shadow': ['error'],
				'unused-imports/no-unused-imports': 'error',
				'unused-imports/no-unused-vars': [
					'warn',
					{
						vars: 'all',
						varsIgnorePattern: '^_',
						args: 'after-used',
						argsIgnorePattern: '^_',
					},
				],
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						vars: 'all',
						args: 'after-used',
						ignoreRestSiblings: true,
						caughtErrors: 'none',
						argsIgnorePattern: '^(_|doc$|req$|res$|next$|props$|params$|opts$|e$)',
					},
				],
				'@typescript-eslint/no-empty-interface': 'off',
				'@typescript-eslint/switch-exhaustiveness-check': 'error',
			},
		},
	],
}
