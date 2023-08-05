import { TextFile } from './TextFile.mjs';

export class CutOffFile extends TextFile {
	/**
	 * @returns {void}
	 */
	cutOff() {
		const [, content = ''] = this.content.split(
			'[comment]: <> (CUT_OFF_HERE)'
		);
		this.content = content.trimStart();
	}
}
