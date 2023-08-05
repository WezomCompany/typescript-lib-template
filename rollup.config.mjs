import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const files = glob
	.sync('src/*.ts')
	.map((file) => [
		path.relative(
			'src',
			file.slice(0, file.length - path.extname(file).length)
		),
		fileURLToPath(new URL(file, import.meta.url)),
	]);

export default {
	input: Object.fromEntries(files),
	output: [
		{
			dir: 'dist',
			format: 'cjs',
		},
	],
	plugins: [typescript(), terser()],
	external: ['negotiator', '@formatjs/intl-localematcher'],
};
