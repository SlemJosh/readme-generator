// Function to display badge for license if available.
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

// Function to display link for license if available.
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

// Function to format the display for the license section.
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more details.`;
} else {
    return ''; // Return an empty string if no valid license is provided
}
}

// Function to display the readme in a format we decide.   The Table of contents will list the information we get during the questions sections, 
// and it will also act as links to navigate directly to that section of the README
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
- Email: [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;
