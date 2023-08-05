import { Placeholder } from '../Placeholder.mjs';
import { TextFile } from './TextFile.mjs';

export class FileWithMarkers extends TextFile {
	/**
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
}
