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

	files.license = replacePlaceholders(files.license, PLACEHOLDERS);
	files.packageJson = replacePlaceholders(files.packageJson, PLACEHOLDERS);
	files.packageJson = removeInitScript(files.packageJson);
	files.readme = replacePlaceholders(files.readme, PLACEHOLDERS);
	files.readme = cutOff(files.readme);

	writeFile('LICENSE', files.license);
	writeFile('package.json', files.packageJson);
	writeFile('README.md', files.readme);
}
