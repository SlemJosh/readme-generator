// Packages that need to be installed/imported
const inquirer = require('inquirer');  // inquirer allows user to interact with command-line interface.
const fs = require('fs'); // file system provides functions for that interacting

// This package is provided and we don't need to import it.
const generateMarkdown = require('./utils/generateMarkdown'); // custom module that helps us create and format the document to our liking.


const questions = [
    // title/name of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: function (input) {
            return input !== '' ? true : 'Title cannot be left empty.';
        }
    },

    // project description
    {
        type: 'input',
        name: 'description',
        message: 'Write a description about your project. Try to answer some of the following questions. Why did you make it? For whom did you make it for? What does your project do?',
        validate: function (input) {
            return input !== '' ? true : 'Description cannot be left empty.';
        }
    },

    // steps for installing the project
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Is there a web address to view this project?',
        validate: function (input) {
            return input !== '' ? true : 'Installation steps cannot be empty. You may type N/A if not applicable';
        }
    },

    // how to use the project steps
    {
        type: 'input',
        name: 'usage',
        message: 'What are the steps for using the project?',
        validate: function (input) {
            return input !== '' ? true : 'Usage steps cannot be empty. You may type N/A if not applicable';
        }
    },

    // Screenshots ? Since we add them in most of ours, this way we can ask if they have some, and also the pathing to display them.
    {
        type: 'confirm',
        name: 'hasScreenshots',
        message: 'Do you have screenshots to include in the installation section?',
        default: false,
    },

    // If they answer yes to the following, we give them another question and answer where they can choose the pathing to the image.
    {
        type: 'input',
        name: 'screenshotPaths',
        message: 'Enter the file paths to your screenshot(s). Seperate the pathing with a comment for each additional screenshot',
        when: (answers) => answers.hasScreenshots,
        validate: function (input) {
            if (input.trim() === '') {
                return 'Screenshot paths cannot be empty. Type N/A if not applicable';
            }
    
            // Split the comma-separated paths into an array
            const paths = input.split(',').map(path => path.trim());
    
            // Check if all file paths exist
            const invalidPaths = paths.filter(path => !fs.existsSync(path));
            
            if (invalidPaths.length > 0) {
                return `The following paths do not exist: ${invalidPaths.join(', ')}`;
            }
    
            return true;
        },
    },

    // license
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does your project use?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'Other', 'None']
    },

    // license not specified in previous question
    {
        type: 'input',
        name: 'customLicense',
        message: 'Please enter the license your project uses.',
        when: (answers) => answers.license === 'Other',
        validate: function (input) {
            return input !== '' ? true : 'Custom license cannot be empty. You may type N/A if not applicable';
        }
    },

    // contributors and resources cited
    {
        type: 'input',
        name: 'contribution',
        message: 'List your collaborators or any sources that helped you create this project.',
        validate: function (input) {
            return input !== '' ? true : 'Contributors/source list cannot be empty. You may type N/A if not applicable';
        }
    },

    // Tests Required (Still not sure what this is for)
    {
        type: 'list',
        name: 'testsRequired',
        message: 'Is there a test needed for this project?',
        choices: ['Yes', 'No']
    },

    // If they answer Yes to the previous, here is where they can display those steps.
    {
        type: 'input',
        name: 'testingSteps',
        message: 'Please specify the testing steps:',
        when: (answers) => answers.testsRequired === 'Yes',
        validate: function (input) {
            return input !== '' ? true : 'Tests required cannot be empty. You may type N/A if not applicable';
        }
    },

    // github username
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
        validate: function (input) {
            return input !== '' ? true : 'Username cannot be empty. You may type N/A if not applicable';
        }
    },

    // email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: function (input) {
            return input !== '' ? true : 'Email cannot be empty. You may type N/A if not applicable';
        }
    }
];

// Function to write the file to a location designated.
function writeToFile(fileName, data) {
    const filename = 'README.md';

    fs.writeFile('./created/README.md', data, function (err){
        err ? console.log(err) : console.log(filename + ' created! Check the created folder.')
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
