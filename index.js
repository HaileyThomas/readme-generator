// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create a function to initialize app
function init() {
    console.log(`
    ╭══• ೋ•✧๑♡๑✧•ೋ •══╮
     README GENERATOR 
    ╰══• ೋ•✧๑♡๑✧•ೋ •══╯
    `);

    return inquirer.prompt([
        {
            type: "confirm",
            name: "start",
            message: "Would you like to create a README file?"
        }
    ])
        .then((answer => {
            if (answer.start === true) {
                console.log("Let's get started!");
            } else {
                console.log("Have a nice day!");
                process.exit();
            }
        }))
}

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username? (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter a GitHub username!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter a title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description for your project. (Required)",
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log("Please enter a description!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Enter installation instructions for your project.",
        },
        {
            type: "input",
            name: "screenshot",
            message: "Enter URL for screenshot. (Required)",
            validate: screenshotInput => {
                if (screenshotInput) {
                    return true;
                } else {
                    console.log("Please enter a screenshot!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "githubUrl",
            message: "Enter GitHub Repository URL. (Required)",
            validate: githubUrlInput => {
                if (githubUrlInput) {
                    return true;
                } else {
                    console.log("Please enter a repo!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "link",
            message: "Enter a link to your deployed page/app.",
        },
        {
            type: "input",
            name: "usage",
            message: "Enter usage information for your project.",
        },
        {
            type: "input",
            name: "credits",
            message: "List and link to all credits, collaborators, tutorials, etc."
        },
        {
            type: "list",
            name: "license",
            message: "Select a license.",
            choices: [
                {
                    name: "Simple & Permissive (MIT)",
                    value: 0
                },
                {
                    name: "Community Contribution (Apache)",
                    value: 1
                },
                {
                    name: "Sharing Improvements (GNU GPLv3)",
                    value: 2
                },
            ],
            validate(answer) {
                if (answer.length < 1) {
                    return 'You must choose at least one license option.';
                }

                return true;
            },
        },
        {
            type: "confirm",
            name: "confirmContribution",
            message: "Would you like to include the Contributor Covenant?",
            default: true
        },
        {
            type: "input",
            name: "contribution",
            message: "Please enter any additional guidelines for contributors."
        },
        {
            type: "input",
            name: "test",
            message: "Enter testing instructions."
        },
        {
            type: "input",
            name: "questions",
            message: "Enter questions/additional information."
        }
    ])
        .then(userData => {
            return userData;
        })
}



// TODO: Create a function to write README file
/*function writeToFile() {
    fs.writeFile('./dist/README.md', generateMarkdown, err => {
        if (err) throw err;
        console.log('File Created!');
    });
};*/



// Function call to initialize app
init()
    .then(questions)
    .then(userData => {
        const markdown = generateMarkdown(userData);
        fs.writeFile('./dist/README.md', markdown, err => {
            if (err) throw err;
            console.log('File Created!');
        });
        //return generateMarkdown(userData);
    })
    //.then(writeToFile)
