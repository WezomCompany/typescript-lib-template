import { describe, expect, it } from 'vitest';
import { removeInitScript } from '../removeInitScript';

describe('removeInitScript', () => {
	it('should remove init script line', () => {
		const input = `{
  "name": "xxx",
  "types": "lib/index.d.ts",
  "files": [
    "lib"
  ],
  "scripts": {
    "init": "node src/init/index.js",
    "build": "rollup --config rollup.config.js"
  }
}`;

		const result = removeInitScript(input);
		expect(result).toBe(`{
  "name": "xxx",
  "types": "lib/index.d.ts",
  "files": [
    "lib"
  ],
  "scripts": {
    "build": "rollup --config rollup.config.js"
  }
}`);
	});
});
