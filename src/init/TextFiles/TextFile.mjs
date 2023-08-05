import fs from 'node:fs';

export class TextFile {
	/**
	 * @param {string} filepath
	 * @throws {Error} File does not exist
	 */
	constructor(filepath) {
		this.content = fs.readFileSync(filepath, 'utf-8');
	}

	/**
	 * @param {string} filepath
	 * @returns {void}
	 * @throws {Error} Path does not exist
	 */
	writeToDisk(filepath) {
		fs.writeFileSync(filepath, this.content, 'utf-8');
	}
}
