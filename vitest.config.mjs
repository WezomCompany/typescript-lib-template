import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		passWithNoTests: true,
		clearMocks: true,
		coverage: {
			enabled: false,
			all: true,
			provider: 'istanbul',
			include: ['src/**'],
			reporter: ['json-summary', 'html'],
		},
	},
});
