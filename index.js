// Global variables
const inquirer = require("inquirer");

// Function to initialize app
const questions = [
  {
    type: "input",
    name: "manager",
    message: "Are you a new Manager?",
    choices: ["y", "n"],
  },
  {
    type: "input",
    name: "managerName",
    message: "What is your name?",
    when: (answers) => answers.manager === "y", // <--- this is the important part
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});
