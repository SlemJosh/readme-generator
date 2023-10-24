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
    validate: function (input){
        return input !== '' ? true : 'Title cannot be left empty.';
    }
},

// description
{
    type: 'input',
    name: 'description',
    message: 'Write a description about your project. Try to answer some of the following questions. Why did you make it? For Whom did you make it for? What does your project do?'
    validate: function (input){
        return input !== '' ? true : 'Description cannot be left empty.';
    }
},


// installation
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
    validate: function (input) {
        return input !== '' ? true : 'Installation steps cannot be empty. You may type N/A if not applicable';
    }
},

// usage
{
    type: 'input',
    name: 'usage',
    message: 'What are the steps for using the project?'
    validate: function (input) {
        return input !== '' ? true : 'Usage steps cannot be empty. You may type N/A if not applicable';
    }
},

// license
{
    type: 'list',
    name: 'license',
    message: 'What type of license does your project use?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'Other', 'None']
},

// custom license
{
    type: 'input',
    name: 'customLicense'
    message: 'Please enter the license your project uses.', 
    when: (answers) => answers.license === 'Other',
    validate: function (input){
        return input !== '' ? true : 'Custom license canot be empty. You may type N/A if not applicable';
    }

},

// contributing
{
    type: 'input',
    name: 'contribution',
    message: 'List your collaborators or any sources that helped you create this project.'
    validate: function (input) {
        return input !== '' ? true : 'Usage steps cannot be empty. You may type N/A if not applicable';
    }
},

// test required
{
    type: 'input',
    name: 'testsRequired',
    message: 'Is there a test needed for this project?'
    choices: ['Yes', 'No'];

},

// testing steps
{
    type: 'input',
    name: 'testingSteps',
    message: 'Please specify the testing steps:',
    when: (answers) => answers.testsRequired === 'Yes',
    validate: function (input) {
        return input !== '' ? true : 'Tests required cannot be empty. You may type N/A if not applicable';
    }
},

// questions

// github username
{
    type: 'input',
    name: 'username',
    message: 'What is your github username?'
    validate: function (input) {
        return input !== '' ? true : 'Username cannot be empty. You may type N/A if not applicable';
    }
},
// email
{
    type: 'input',
    name: 'email',
    message: 'What is your email?'
    validate: function (input) {
        return input !== '' ? true : 'Email cannot be empty. You may type N/A if not applicable';
    }
}
];

// Test function to check answers and validation of questions and answers.
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
