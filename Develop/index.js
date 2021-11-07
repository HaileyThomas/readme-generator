// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    // use inquirer package and start prompts
    return inquirer.prompt([
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
            message: "Enter a description for your project.",
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
            type: "confirm",
            name: "confirmCredits",
            message: "Would you like to include credits to collaborators, third-party assets, tutorials, etc?",
            default: true
        },
        {
            type: "input",
            name: "credits",
            message: "List and link to all credits, collaborators, tutorials, etc.",
            when: ({ confirmCredits }) => {
                if (confirmCredits) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "licenses",
            message: "Select a license.",
            choices: ["Simple & Permissive (MIT)", "Community Contribution", "Sharing Improvements (GNU GPLv3)"]
        },
        {
            type: "confirm",
            name: "confirmContribution",
            message: "Would you like to include the Contributor Covenant?",
            default: true
        },
        {
            type: "confirm",
            name: "confirmTest",
            message: "Would you like to include testing instructions?",
            default: false
        },
        {
            type: "input",
            name: "test",
            message: "Enter testing instructions.",
            when: ({ confirmTest }) => {
                if (confirmTest) {
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
            type: "confirm",
            name: "confirmQuestions",
            message: "Would you like to include any questions or additional info?",
            default: false
        },
        {
            type: "input",
            name: "questions",
            message: "Enter questions/additional information.",
            when: ({ confirmQuestions }) => {
                if (confirmQuestions) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
}
// fun questions function
questions();


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
