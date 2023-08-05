import fromCWD from 'from-cwd';
import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { Placeholder } from '../Placeholder.mjs';
import { FileWithMarkers } from '../TextFiles/FileWithMarkers.mjs';

describe('FileWithMarkers', () => {
	it('should read file content, replace multiple placeholders and write new file', () => {
		const input = fromCWD(
			'src/init/__specs__/fixtures/file-with-markers-input.md'
		);
		const output = fromCWD(
			'src/init/__specs__/fixtures/file-with-markers-output.md'
		);
		if (fs.existsSync(output)) {
			fs.unlinkSync(output);
		}

		// ---

		const file = new FileWithMarkers(input);
		file.replaceFromRecord({
			X_Y_Z: new Placeholder('X_Y_Z', '123'),
			A_B_C: new Placeholder('A_B_C', '456'),
		});
		file.writeToDisk(output);

		// ---

		const result = fs.readFileSync(output, 'utf-8');
		expect(result).toBe('Lorem 123 ipsum 456 dolor 123 sit 456 amet\n');
	});
});
