module.exports = {
	root: true,
	extends: ['@stripped-ui/eslint-config'],
	plugins: ['jest'],
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	env: {
		'jest/globals': true,
		browser: true,
		es2021: true,
		node: true
	},
	overrides: [
		{
			files: ['*.ts'],
			extends: ['@stripped-ui/eslint-config-ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2019
			}
		}
	]
};
