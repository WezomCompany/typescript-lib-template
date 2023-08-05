import inquirer from 'inquirer';
import { PLACEHOLDERS } from './placeholders.mjs';
import { processAnswers } from './processAnswers.mjs';

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
	.then(processAnswers)
	.then(() => console.log('Files updated!'));
