const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 0) {
    return ("![MIT](https://img.shields.io/endpoint?label=license&message=MIT&url=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fmit)");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 0) {
    return ("https://choosealicense.com/licenses/mit");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === 0) {
    return `
MIT License

Copyright (c) [${new Date().getFullYear()}] [${data.name}]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`
  }
}

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
${renderLicenseBadge(data)}

[License](${renderLicenseLink(data)}) - link to license

${renderLicenseSection(data)}

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
