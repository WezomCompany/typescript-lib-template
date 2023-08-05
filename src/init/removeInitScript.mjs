/**
 * @param {string} content
 * @return {string}
 */
export function removeInitScript(content) {
	const marker = /\r?\n\s+"init":.*/;
	return content.replace(marker, '');
}
