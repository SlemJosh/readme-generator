// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
} else if (license === 'APACHE 2.0') {
    return '![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
} else if (license === 'GPL 3.0') {
    return '![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)';
} else {
    return ''; // Return an empty string if no valid license is provided
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
} else if (license === 'APACHE 2.0') {
    return '[APACHE 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)';
} else if (license === 'GPL 3.0') {
    return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
} else {
    return ''; // Return an empty string if no valid license is provided
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more details.`;
} else {
    return ''; // Return an empty string if no valid license is provided
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.testsRequired === 'Yes' ? data.testingSteps : 'Tests are not required for this project.'}

## Questions

If you have any questions, please contact me:

- GitHub: [${data.username}](https://github.com/${data.username})
- Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
