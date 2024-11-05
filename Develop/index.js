// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'provide a description of the project:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'how do you install?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how do you use this application',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'what resources helped you contribute to this project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'what is the test acceptance criteria?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'choose a license:',
        choices: ['MIT', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log(`README file created: ${fileName}`);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    })
    .catch((error) => {
        console.error('Error', error);
    });
}

// Function call to initialize app
init();
