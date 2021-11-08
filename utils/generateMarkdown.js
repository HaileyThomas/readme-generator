const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

### Screenshot

![Screenshot](${data.screenshot})

### Links

* [DeployedLink](${data.link}) - link to deployed website
* [GitHub](${data.githubUrl}) - link to GitHub project

## Credits

${data.credits}

## License

## Contribution

${data.contribution}

## Tests

${data.test}

## Questions

${data.questions}

### Contact

* [Email](mailto:${data.email}) - Email ${data.name} : ${data.email}
* [GitHub](https://github.com/${data.github}) - GitHub username : ${data.github}

`;
}

module.exports = generateMarkdown;

/* module.exports = data => {
  console.log(data);
  console.log(data.name);

  return `
  hi
  `
}*/
