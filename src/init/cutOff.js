/**
 * @param {string} content
 * @return {string}
 */
export function cutOff(content) {
	const marker = '[comment]: <> (CUT_OFF_HERE)';
	if (content.includes(marker)) {
		const [, tail = ''] = content.split(marker);
		return tail.trimStart();
	}
	return content;
}
