import { cutOff } from './cutOff.mjs';
import { readFile, writeFile } from './fs-helpers.mjs';
import { PLACEHOLDERS } from './placeholders.mjs';
import { removeInitScript } from './removeInitScript.mjs';
import { replacePlaceholders } from './replacePlaceholders.mjs';

/**
 * @param {Object} answers
 * @return {void}
 */
export function processAnswers(answers) {
	Object.entries(answers).forEach(([key, value]) => {
		PLACEHOLDERS[key].replacement = value;
	});

	const files = {
		license: readFile('LICENSE'),
		packageJson: readFile('package.json'),
		readme: readFile('README.md'),
	};

	replacePlaceholders(files.license, PLACEHOLDERS);
	replacePlaceholders(files.packageJson, PLACEHOLDERS);
	replacePlaceholders(files.readme, PLACEHOLDERS);
	removeInitScript(files.packageJson);
	cutOff(files.readme);

	writeFile('LICENSE', files.license);
	writeFile('package.json', files.packageJson);
	writeFile('README.md', files.readme);
}
