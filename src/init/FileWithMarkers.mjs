import fs from 'node:fs';
import { Placeholder } from './Placeholder.mjs';

export class FileWithMarkers {
	/**
	 * @param {string} filepath
	 * @throws {Error} File does not exist
	 */
	constructor(filepath) {
		this.content = fs.readFileSync(filepath, 'utf-8');
	}

	/**
	 *
	 * @param {Record<string, Placeholder>} record
	 * @returns {void}
	 */
	replaceFromRecord(record) {
		for (const key in record) {
			const placeholder = record[key];
			this.content = this.content.replace(
				placeholder.regExp,
				placeholder.replacement
			);
		}
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
