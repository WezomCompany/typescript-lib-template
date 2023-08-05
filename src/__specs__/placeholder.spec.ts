import { describe, expect, it } from 'vitest';
import { placeholder } from '../placeholder';

describe('placeholder', () => {
	it("should return the author's message", () => {
		const result = placeholder();
		expect(result).toBe('RENAME_THIS_FILE_AND_IMPLEMENT_SOMETHING_USEFUL');
	});
});
