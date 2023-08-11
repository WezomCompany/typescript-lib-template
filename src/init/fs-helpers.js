import fromCWD from 'from-cwd';
import fs from 'fs';

/**
 * @param {string} filename
 * @return {string}
 */
export function readFile(filename) {
	return fs.readFileSync(fromCWD(filename), 'utf8');
}

/**
 * @param {string} filename
 * @param {string} content
 * @return {void}
 */
export function writeFile(filename, content) {
	fs.writeFileSync(fromCWD(filename), content);
}
