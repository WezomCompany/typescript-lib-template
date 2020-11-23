module.exports = {
	cacheDirectory: '<rootDir>/.cache/jest',
	coverageReporters: ['json-summary', 'lcov'],
	displayName: 'tsc',
	testEnvironment: 'node',
	moduleFileExtensions: ['js', 'ts', 'node'],
	transform: {
		'\\.ts': ['ts-jest']
	}
};
