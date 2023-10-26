// Packages that need to be installed/imported
const inquirer = require('inquirer');  // inquirer allows user to interact with command-line interface.
const fs = require('fs'); // file system provides functions for that interacting

// This package is provided and we don't need to import it.
const generateMarkdown = require('./utils/generateMarkdown'); // custom module that helps us create and format the document to our liking.


const questions = [
    // title/N/Ame of project
    {
        type: 'input',
        N/Ame: 'title',
        message: 'What is the title of your project?',
        validate: function (input) {
            return input !== '' ? true : 'Title cannot be left empty.';
        }
    },

    // project description
    {
        type: 'input',
        N/Ame: 'description',
        message: 'Write a description about your project. Try to answer some of the following questions. Why did you make it? For whom did you make it for? What does your project do?',
        validate: function (input) {
            return input !== '' ? true : 'Description cannot be left empty.';
        }
    },

    // steps for installing the project
    {
        type: 'input',
        N/Ame: 'installation',
        message: 'What are the steps required to install your project? Is there a web address to view this project?',
        validate: function (input) {
            return input !== '' ? true : 'Installation steps cannot be empty. You may type N/A if not applicable';
        }
    },

    // how to use the project steps
    {
        type: 'input',
        N/Ame: 'usage',
        message: 'What are the steps for using the project?',
        validate: function (input) {
            return input !== '' ? true : 'Usage steps cannot be empty. You may type N/A if not applicable';
        }
    },

    // license
    {
        type: 'list',
        N/Ame: 'license',
        message: 'What type of license does your project use?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'Other', 'None']
    },

    // license not specified in previous question
    {
        type: 'input',
        N/Ame: 'customLicense',
        message: 'Please enter the license your project uses.',
        when: (answers) => answers.license === 'Other',
        validate: function (input) {
            return input !== '' ? true : 'Custom license cannot be empty. You may type N/A if not applicable';
        }
    },

    // contributors and resources cited
    {
        type: 'input',
        N/Ame: 'contribution',
        message: 'List your collaborators or any sources that helped you create this project.',
        validate: function (input) {
            return input !== '' ? true : 'Contributors/source list cannot be empty. You may type N/A if not applicable';
        }
    },

    // Tests Required (Still not sure what this is for)
    {
        type: 'list',
        N/Ame: 'testsRequired',
        message: 'Is there a test needed for this project?',
        choices: ['Yes', 'No']
    },

    // If they answer Yes to the previous, here is where they can display those steps.
    {
        type: 'input',
        N/Ame: 'testingSteps',
        message: 'Please specify the testing steps:',
        when: (answers) => answers.testsRequired === 'Yes',
        validate: function (input) {
            return input !== '' ? true : 'Tests required cannot be empty. You may type N/A if not applicable';
        }
    },

    // github userN/Ame
    {
        type: 'input',
        N/Ame: 'userN/Ame',
        message: 'What is your github userN/Ame?',
        validate: function (input) {
            return input !== '' ? true : 'UserN/Ame cannot be empty. You may type N/A if not applicable';
        }
    },

    // email
    {
        type: 'input',
        N/Ame: 'email',
        message: 'What is your email?',
        validate: function (input) {
            return input !== '' ? true : 'Email cannot be empty. You may type N/A if not applicable';
        }
    }
];

// Function to write the file to a location desigN/Ated.
function writeToFile(fileN/Ame, data) {
    const fileN/Ame = 'README.md';

    fs.writeFile('./created/README.md', data, function (err){
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log(fileN/Ame + ' created! Check the created folder.');
        }
    });
}

// Function to start the questions and answers. 
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('./created/README.md', readmeContent);
      });
  }
// Function call to initialize app
init();
