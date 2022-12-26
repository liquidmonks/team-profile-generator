// Global variables
const inquirer = require("inquirer");

// Function to initialize app
const questions = [
  {
    type: "input",
    name: "manager",
    message: "Are you a new Manager?",
    choices: ["Yes", "No"],
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});
