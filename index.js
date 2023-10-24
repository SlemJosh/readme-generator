// TODO: Include packages needed for this application
// Packages that need to be installed/imported
const inquirer = require('inquirer');  // inquirer allows user to interact with command-line interface.
const fs = require('fs'); // file system provides functions for that interacting

// Package that we provide
const generateMarkdown = require('./utils/generateMarkdown'); // custom module that helps us create and format the document to our liking.


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: function (input) {
            return input !== '' ? true : 'Title cannot be left empty.';
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description about your project. Try to answer some of the following questions. Why did you make it? For whom did you make it for? What does your project do?',
        validate: function (input) {
            return input !== '' ? true : 'Description cannot be left empty.';
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: function (input) {
            return input !== '' ? true : 'Installation steps cannot be empty. You may type N/A if not applicable';
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the steps for using the project?',
        validate: function (input) {
            return input !== '' ? true : 'Usage steps cannot be empty. You may type N/A if not applicable';
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does your project use?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'Other', 'None']
    },
    {
        type: 'input',
        name: 'customLicense',
        message: 'Please enter the license your project uses.',
        when: (answers) => answers.license === 'Other',
        validate: function (input) {
            return input !== '' ? true : 'Custom license cannot be empty. You may type N/A if not applicable';
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List your collaborators or any sources that helped you create this project.',
        validate: function (input) {
            return input !== '' ? true : 'Contributors/source list cannot be empty. You may type N/A if not applicable';
        }
    },
    {
        type: 'list',
        name: 'testsRequired',
        message: 'Is there a test needed for this project?',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'testingSteps',
        message: 'Please specify the testing steps:',
        when: (answers) => answers.testsRequired === 'Yes',
        validate: function (input) {
            return input !== '' ? true : 'Tests required cannot be empty. You may type N/A if not applicable';
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
        validate: function (input) {
            return input !== '' ? true : 'Username cannot be empty. You may type N/A if not applicable';
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: function (input) {
            return input !== '' ? true : 'Email cannot be empty. You may type N/A if not applicable';
        }
    }
];

// function testQuestions() {
//     inquirer
//         .prompt(questions)
//         .then((answers) => {
//             console.log('User Responses:');
//             console.log(answers);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// }

// Call the testing function
// testQuestions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filename = './README.md';

    fs.writeFile('README.md', data, function (err){
        err ? console.log(err) : console.log(filename + 'created!')
    });
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then (answers => writeToFile(generateMarkdown(answers)))
}
// Function call to initialize app
init();
