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
            
        ])
    }
}