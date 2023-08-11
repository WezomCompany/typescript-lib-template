import { describe, expect, it } from 'vitest';
import { Placeholder } from '../Placeholder';

describe('Placeholder', () => {
	it('should change replacement value', () => {
		const placeholder = new Placeholder('X_Y_Z', 'ABC');
		placeholder.change('123');
		expect(placeholder.replacement).toBe('123');
	});
});
