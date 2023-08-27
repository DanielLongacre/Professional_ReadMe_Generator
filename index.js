// TODO: Include packages needed for this application
const fs = require('fs'); //Node module for files
const inquirer = require('inquirer'); //NPM command line interface package
const path = require('path'); //Creates the directory path of where to put the newly created file
const generateMarkdown = require('./utils/generateMarkdown'); //Gets the README template 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Input the name of your project: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the purpose and functionality of this project: '
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for this project',
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'none'],
    },
    {
        type: 'input',
        name: 'require',
        message: 'List any project depenencies: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'State the languages or technologies assocated with this project'
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Input your GitHub username: '
    },
    {
        type: 'input',
        name: 'name',
        message: 'Input your full name: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Input a valid email: '
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List any contributors (Use GitHub usernames): ',
        default: ''
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Path join is a node method used to combine path segments together
    // Prcoess.cwd is a method used to get the current working directory of the node.js process
    // Using writeFileSync in order to do this process synchronously 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating README.md file...');
        writeToFile('./test/README.md', generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
