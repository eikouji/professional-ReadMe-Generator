const generateReadme = require(".Readme");
const gitHubApi = require("./github");
const inquirer = require("inquirer");
const fs = require("fs");
const writeFileAsync =  util.promisify(fs.writeFile);

inquirer;
const promptUser = () => {
    const promptUser = () => {
        return inquirer
        .prompt([
            {
                type: "input",
                message:
                "Hello! Let's make a ReadMe. Please enter your GitHub Username",
                name: "username",
            },
            {
                type: "input",
                message: "What is the name of your project?",
                name: "projectName",
            },
            {
                type: "Sounds great! Please offer a brief description of your project. What does it do? What is the goal? What tools were/are used?",
                name: "description",
            },
            {
                type: "list",
                message: "Do you want a license on this project?",
                name: "license",
                choices: ["MIT", "Gpl-3.0", "Unlicense", "Apache-2.0", "None", "Maybe later"],
            },
            {
                type: "input",
                message: "What are your rules on usage of this project?",
                name: "usage",
            },
            {
                type: "input",
                message: "Do you want to add instructions on how to install and use your project?",
                name: "projectInstall"
            },
            {
                type: "input",
                message: "How can users contribute to this project?",
                name: "contributions",
            },
            {
                type: "input",
                message: "How can users test this project?",
                name: "projectTests",
            },
        ])
        .then(function (answers) {
            return answers;
        });

    };

  


}