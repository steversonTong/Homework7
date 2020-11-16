const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Title of your application?",
        name: "title"
    },

    {
        type: "input",
        message: "Brief explaination of the application",
        name: "explain"
    },
    
    {
        type: "input",
        message: "What is this application for?",
        name: "what"
    },

    {
        type: "input",
        message: "Installation instruction",
        name: "install"
    },

    {
        type: "input",
        message: "Contribution guidelines",
        name: "guidelines"
    },

    {
        type: "input",
        message: "Test instructions",
        name: "test"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Your file was successfully generated!");
    });
}

function formatREADME(info) {
    const format=`
    # ${info.title} 
    ## This app is: 
    ${info.explain} 

    ## How to use this application: 
    ${info.use}

    ## This application is use for:
    ${info.what}

    ## Installation instructions:
    ${info.install}

    ## Contribution guidelines:
    ${info.guidelines}

    ## Test instructions:
    ${info.test}
    `;

    writeToFile('DEV_README.md', readMeText)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(response) {
        formatREADME(response);
    });
}

// function call to initialize program
init();
