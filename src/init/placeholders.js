import { execSync } from 'child_process';
import fromCWD from 'from-cwd';
import { Placeholder } from './Placeholder.js';

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

export const PLACEHOLDERS = {
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
