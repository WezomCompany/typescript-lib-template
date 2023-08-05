import { execSync } from 'child_process';
import fromCWD from 'from-cwd';
import inquirer from 'inquirer';
import { FileWithMarkers } from './FileWithMarkers.mjs';
import { Placeholder } from './Placeholder.mjs';

const gitUserName = execSync('git config user.name').toString().trim();
const gitUserEmail = execSync('git config user.email').toString().trim();
const currentYear = new Date().getFullYear().toString();
const initialVersion = '0.0.0-alpha.0';
const url =
	'https://github.com/' +
	execSync('git config --get remote.origin.url')
		.toString()
		.trim()
		.replace(/(^git@github.com:|\.git$)/g, '');
const dirname = fromCWD().split('/').pop();

const PLACEHOLDERS = {
	PACKAGE_NAME: new Placeholder('PACKAGE_NAME', dirname),
	PACKAGE_DESCRIPTION: new Placeholder('PACKAGE_DESCRIPTION', ''),
	PACKAGE_VERSION: new Placeholder('PACKAGE_VERSION', initialVersion),
	PACKAGE_AUTHOR_NAME: new Placeholder('PACKAGE_AUTHOR_NAME', gitUserName),
	PACKAGE_AUTHOR_EMAIL: new Placeholder('PACKAGE_AUTHOR_EMAIL', gitUserEmail),
	REPO_URL: new Placeholder('REPO_URL', url),
	LICENSE_CREATION_YEAR: new Placeholder(
		'LICENSE_CREATION_YEAR',
		currentYear
	),
	LICENSE_HOLDER: new Placeholder('LICENSE_HOLDER', gitUserName),
};

inquirer
	.prompt([
		{
			type: 'input',
			name: 'PACKAGE_NAME',
			message: 'Package name',
			default: PLACEHOLDERS.PACKAGE_NAME.replacement,
		},
		{
			type: 'input',
			name: 'PACKAGE_DESCRIPTION',
			message: 'Package description',
			default: PLACEHOLDERS.PACKAGE_DESCRIPTION.replacement,
		},
		{
			type: 'input',
			name: 'PACKAGE_VERSION',
			message: 'Package version',
			default: PLACEHOLDERS.PACKAGE_VERSION.replacement,
		},
		{
			type: 'input',
			name: 'PACKAGE_AUTHOR_NAME',
			message: 'Package author name',
			default: PLACEHOLDERS.PACKAGE_AUTHOR_NAME.replacement,
		},
		{
			type: 'input',
			name: 'PACKAGE_AUTHOR_EMAIL',
			message: 'Package author email',
			default: PLACEHOLDERS.PACKAGE_AUTHOR_EMAIL.replacement,
		},
		{
			type: 'input',
			name: 'REPO_URL',
			message: 'Repository URL',
			default: PLACEHOLDERS.REPO_URL.replacement,
		},
		{
			type: 'input',
			name: 'LICENSE_HOLDER',
			message: 'License holder',
			default: PLACEHOLDERS.LICENSE_HOLDER.replacement,
		},
	])
	.then(replaceFromRecord);

function replaceFromRecord(answers) {
	Object.entries(answers).forEach(([key, value]) => {
		PLACEHOLDERS[key].replacement = value;
	});

	[fromCWD('LICENSE'), fromCWD('package.json'), fromCWD('README.md')].forEach(
		(filepath) => {
			const file = new FileWithMarkers(filepath);
			file.replaceFromRecord(PLACEHOLDERS);
			file.writeToDisk(filepath);
		}
	);
	console.log('Files updated!');
}
