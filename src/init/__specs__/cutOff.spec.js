import { describe, expect, it } from 'vitest';
import { cutOff } from '../cutOff';

describe('cutOff', () => {
	it('should cut off content from the beginning to the marker', () => {
		const input = `# Input file

Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Accusantium alias amet assumenda cupiditate deleniti dolorem

[comment]: <> (CUT_OFF_HERE)

# Output file

enim error hic minima minus modi nobis numquam placeat praesentium,
quod reiciendis saepe similique temporibus!
`;
		const result = cutOff(input);
		expect(result).toBe(`# Output file

enim error hic minima minus modi nobis numquam placeat praesentium,
quod reiciendis saepe similique temporibus!
`);
	});

	it('should not truncate the contents if the marker is missing', () => {
		const input = `# Input file

Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Accusantium alias amet assumenda cupiditate deleniti dolorem

# Output file

enim error hic minima minus modi nobis numquam placeat praesentium,
quod reiciendis saepe similique temporibus!
`;
		const result = cutOff(input);
		expect(result).toBe(`# Input file

Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Accusantium alias amet assumenda cupiditate deleniti dolorem

# Output file

enim error hic minima minus modi nobis numquam placeat praesentium,
quod reiciendis saepe similique temporibus!
`);
	});
});
