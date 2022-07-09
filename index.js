// Packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
  {
    message: "What is your Github username?",
    type: "input",
    name: "github",
  },
  {
    message: "What is your email address?",
    type: "input",
    name: "email",
  },
  {
    message: "What is the title of your project?",
    type: "input",
    name: "title",
  },
  {
    message: "Please provide a description of your project.",
    type: "input",
    name: "description",
  },
  {
    message: "Please provide installation instructions for your project.",
    type: "input",
    name: "installation",
  },
  {
    message: "Please provide usage information for your project.",
    type: "input",
    name: "usage",
  },
  {
    message: "What are the contribution guidelines for your project?",
    type: "input",
    name: "contribution",
  },
  {
    message: "What license would you like to use?",
    type: "list",
    name: "license",
    choices: ["MIT", "Apache", "Mozilla", "Eclipse", "Unlicensed"],
  },
  {
    message: "Please enter the test instructions for your project?",
    type: "input",
    name: "test",
  },
];

/// function to prompt the questions
const promptQuestions = () => {
  return inquirer.prompt(questions);
};

// function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("README.md", fileName, (data) => {});
    resolve({
      ok: true,
      message: "File created successfully",
    });
    reject({
      ok: false,
      message: "Error with write to file function",
    });
  });
}

// function to initialize app
function init() {
  promptQuestions()
    .then((data) => {
      return generateMarkdown.generateMarkdown(data);
    })
    .then((generateContent) => {
      return writeToFile(generateContent);
    })
    .then((writeFileResponse) => {
      console.log(writeFileResponse);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
