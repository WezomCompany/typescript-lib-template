import { Placeholder } from './Placeholder.mjs';

/**
 * @param {string} content
 * @param {Record<string, Placeholder>} record
 * @returns {string}
 */
export function replacePlaceholders(content, record) {
	for (const key in record) {
		const placeholder = record[key];
		content = content.replace(
			placeholder.regExp,
			placeholder.replacement
		);
	}
	return content;
}
