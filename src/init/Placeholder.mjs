export class Placeholder {
	/**
	 * @param {string} marker
	 * @param {string} replacement
	 */
	constructor(
		marker,
		replacement
	) {
		this.regExp = new RegExp(`{#${marker}#}`, 'g');
		this.replacement = replacement;
	}

	/**
	 * @param {string} replacement
	 * @returns {void}
	 */
	change(replacement) {
		this.replacement = replacement;
	}
}
