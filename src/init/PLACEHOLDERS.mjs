import fromCWD from 'from-cwd';
import { FileWithMarkers } from './FileWithMarkers';
import { Placeholder } from './Placeholder';

export const PLACEHOLDERS = {
	LICENSE_CREATION_YEAR: new Placeholder('LICENSE_CREATION_YEAR', ''),
	LICENSE_HOLDER: new Placeholder('LICENSE_HOLDER', ''),
	REPO_URL: new Placeholder('REPO_URL', ''),
	PACKAGE_DESCRIPTION: new Placeholder('PACKAGE_DESCRIPTION', ''),
	PACKAGE_NAME: new Placeholder('PACKAGE_NAME', ''),
	PACKAGE_VERSION: new Placeholder('PACKAGE_VERSION', ''),
	PACKAGE_AUTHOR_NAME: new Placeholder('PACKAGE_AUTHOR_NAME', ''),
	PACKAGE_AUTHOR_EMAIL: new Placeholder('PACKAGE_AUTHOR_EMAIL', ''),
};

const FILES = [
	fromCWD('LICENSE'),
	fromCWD('package.json'),
	fromCWD('README.md'),
];

console.log('init', FILES);

// FILES.forEach((filepath) => {
// 	const file = new FileWithMarkers(filepath);
// 	file.replaceFromRecord(PLACEHOLDERS);
// 	file.writeToDisk(filepath);
// });