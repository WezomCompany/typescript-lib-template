import {describe, expect, it} from 'vitest';
import {Placeholder} from '../Placeholder.mjs';
import {replacePlaceholders} from '../replacePlaceholders.mjs';

describe('replacePlaceholders', () => {
	it('should replace all placeholders', () => {
		const result = replacePlaceholders('Lorem {#X_Y_Z#} ipsum {#A_B_C#} dolor {#X_Y_Z#} sit {#A_B_C#} amet\n', {
			X_Y_Z: new Placeholder('X_Y_Z', '123'),
			A_B_C: new Placeholder('A_B_C', '456'),
		})
		expect(result).toBe('Lorem 123 ipsum 456 dolor 123 sit 456 amet\n');
	});
});
