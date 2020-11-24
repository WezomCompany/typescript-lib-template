const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const defaults = {
	gitHubOwner: '',
	licenseHolder: (answers) => answers.gitHubOwner,
	licenseHolderEmail: '',
	licenseHolderUrl: '',
	libAuthor: (answers) => answers.licenseHolder,
	libAuthorEmail: (answers) => answers.licenseHolderEmail,
	libName: '',
	npmPackageName: (answers) => answers.libName
};

const defaultInputValidate = (input) => {
	if (input.length > 0) {
		return true;
	}
	return 'Must have value';
};

const readFile = (file) => fs.readFileSync(path.join(__dirname, file)).toString();
const writeFile = (file, content) =>
	fs.writeFileSync(path.join(__dirname, file), content);

try {
	const _c = readFile('.git/config');
	_c.replace(/url = (.*)\.git/, (match, group) => {
		const parts = group.split('/');
		defaults.libName = parts.pop();
		defaults.gitHubOwner = parts.pop().split(':').pop();
		return '';
	});
} catch (err) {
	console.log('No git repo detected. Defaults cannot be filled');
}

inquirer
	.prompt([
		{
			type: 'input',
			name: 'libName',
			message: 'libName *',
			default: defaults.libName,
			validate: defaultInputValidate
		},
		{
			type: 'input',
			name: 'npmPackageName',
			message: 'npmPackageName *',
			default: defaults.npmPackageName,
			validate: defaultInputValidate
		},
		{
			type: 'input',
			name: 'gitHubOwner',
			message: 'gitHubOwner *',
			default: defaults.gitHubOwner,
			validate: defaultInputValidate
		},
		{
			type: 'input',
			name: 'licenseHolder',
			message: 'licenseHolder *',
			default: defaults.licenseHolder,
			validate: defaultInputValidate
		},
		{
			type: 'input',
			name: 'licenseHolderEmail',
			message: 'licenseHolderEmail *',
			default: defaults.licenseHolderEmail,
			validate: defaultInputValidate
		},
		{
			type: 'input',
			name: 'licenseHolderUrl',
			message: 'licenseHolderUrl (optional)',
			default: defaults.licenseHolderUrl
		},
		{
			type: 'input',
			name: 'libAuthor',
			message: 'libAuthor *',
			default: defaults.libAuthor,
			validate: defaultInputValidate
		},
		{
			type: 'input',
			name: 'libAuthorEmail',
			message: 'libAuthorEmail *',
			default: defaults.libAuthorEmail,
			validate: defaultInputValidate
		}
	])
	.then((answers) => {
		writeFile(
			'./package.json',
			readFile('./package.json')
				.replace(/npm-package-name/g, answers.npmPackageName)
				.replace(/lib-name/g, answers.libName)
				.replace(/"version": ".+"/, '"version": "0.0.1-prealpha"')
				.replace(/git-hub-owner/g, answers.gitHubOwner)
				.replace(/lib-author/g, answers.libAuthor)
				.replace(/lib-author-email/g, answers.libAuthorEmail)
		);

		writeFile(
			'./package-lock.json',
			readFile('./package-lock.json')
				.replace(/npm-package-name/g, answers.npmPackageName)
				.replace(/"version": ".+"/, '"version": "0.0.1-prealpha"')
		);

		writeFile(
			'./LICENSE',
			readFile('./LICENSE').replace(
				/license-holder/g,
				[
					answers.licenseHolder,
					` <${answers.licenseHolderEmail}>`,
					answers.licenseHolderUrl ? `, ${answers.licenseHolderUrl}` : ''
				].join('')
			)
		);

		writeFile(
			'./README.md',
			readFile('./README.md')
				.split('[comment]: <> (CUT OFF HERE)')
				.pop()
				.replace(/lib-name/g, answers.libName)
				.replace(/npm-package-name/g, answers.npmPackageName)
				.replace(/git-hub-owner/g, answers.gitHubOwner)
		);
	})
	.catch((error) => {
		console.log(error);
	});
