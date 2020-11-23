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
	libName: ''
};

const defaultInputValidate = (input) => {
	if (input.length > 0) {
		return true;
	}
	return 'Must have value';
};

const readFile = (file) => fs.readFileSync(path.join(__dirname, file)).toString();

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
		console.log(answers);
		const packageJson = readFile('./package.json');
		const packageLockJson = readFile('./package-lock.json');
		const readmeMD = readFile('./README.md');
		packageJson.replace(/lib-name/)
	})
	.catch((error) => {
		console.log(error);
	});
