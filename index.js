// TODO: Include packages needed for this application
// Packages that need to be installed/imported
const inquirer = require('inquirer');  // inquirer allows user to interact with command-line interface.
const fs = require('fs'); // file system provides functions for that interacting

// Package that we provide
const generateMarkdown = require('./utils/generateMarkdown'); // custom module that helps us create and format the document to our liking.


// TODO: Create an array of questions for user input
const questions = [

// title
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},

// description
{
    type: 'input',
    name: 'description',
    message: 'Write a description about your project. Try to answer some of the following questions. Why did you make it? For Whom did you make it for? What does your project do?'
},


// installation
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
},

// usage
{
    type: 'input',
    name: 'usage',
    message: 'What are the steps for using the project?'
},

// license
{
    type: 'list',
    name: 'license',
    message: 'What type of license does your project use?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'Other', 'None']
},

// contributing
{
    type: 'input',
    name: 'contribution',
    message: 'List your collaborators or any sources that helped you create this project.'
},

// test
{
    type: 'input',
    name: 'tests',
    message: 'Is there a test needed for this project?'
},

// questions
{
    type: 'input',
    name: 'username',
    message: 'What is your github username?'
},

{
    type: 'input',
    name: 'email',
    message: 'What is your email?'
}
];
function testQuestions(){
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log('User Responses:');
        console.log(answers);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

testQuestions();
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
