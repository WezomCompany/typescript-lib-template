import fromCWD from 'from-cwd';
import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { CutOffFile } from '../TextFiles/CutOffFile.mjs';

describe('CutOffFile', () => {
	it('should read file content, replace multiple placeholders and write new file', () => {
		const input = fromCWD(
			'src/init/__specs__/fixtures/cut-off-file-input.md'
		);
		const output = fromCWD(
			'src/init/__specs__/fixtures/cut-off-file-output.md'
		);
		if (fs.existsSync(output)) {
			fs.unlinkSync(output);
		}

		// ---

		const file = new CutOffFile(input);
		file.cutOff();
		file.writeToDisk(output);

		// ---

		const result = fs.readFileSync(output, 'utf-8');
		expect(result).toBe(`# Output file

enim error hic minima minus modi nobis numquam placeat praesentium,
quod reiciendis saepe similique temporibus!
`);
	});
});
