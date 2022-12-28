// Global variables
const inquirer = require("inquirer");

// Manager questions
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
  {
    type: "input",
    name: "managerID",
    message: "Please Enter Employee ID.",
    when: (answers) => answers.manager === "y", // <--- this is the important part
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Please Enter Email Address.",
    when: (answers) => answers.manager === "y", // <--- this is the important part
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please Enter Your Office Number",
    when: (answers) => answers.manager === "y", // <--- this is the important part
  },

  // Choices for the user to select team members
  {
    type: "list",
    name: "role",
    message: "Select a role:",
    choices: ["Engineer", "Intern"],
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});
