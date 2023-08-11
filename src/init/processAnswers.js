import { cutOff } from './cutOff';
import { readFile, writeFile } from './fs-helpers';
import { PLACEHOLDERS } from './placeholders';
import { removeInitScript } from './removeInitScript';
import { replacePlaceholders } from './replacePlaceholders';

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
		packageJson: readFile('packageon'),
		readme: readFile('README.md'),
	};

	files.license = replacePlaceholders(files.license, PLACEHOLDERS);
	files.packageJson = replacePlaceholders(files.packageJson, PLACEHOLDERS);
	files.packageJson = removeInitScript(files.packageJson);
	files.readme = replacePlaceholders(files.readme, PLACEHOLDERS);
	files.readme = cutOff(files.readme);

	writeFile('LICENSE', files.license);
	writeFile('packageon', files.packageJson);
	writeFile('README.md', files.readme);
}
