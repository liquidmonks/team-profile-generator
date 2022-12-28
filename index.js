// Global variables
const inquirer = require("inquirer");

// Manager questions
const questions = [
  {
    type: "input",
    name: "manager",
    message: "Are you a new manager?",
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
    message: "Please enter employee ID.",
    when: (answers) => answers.manager === "y", // <--- this is the important part
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Please enter email address.",
    when: (answers) => answers.manager === "y", // <--- this is the important part
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter your office number",
    when: (answers) => answers.manager === "y", // <--- this is the important part
  },

  // Choices of role for the user to select for a team member
  {
    type: "list",
    name: "role",
    message: "Select a role:",
    choices: ["Engineer", "Intern"],
  },

  // Engineer questions
  {
    type: "input",
    name: "engineerName",
    message: "What is your Engineer's name?",
    when: (answers) => answers.role === "Engineer", // <--- this is the important part
  },
  {
    type: "input",
    name: "engineerID",
    message: "What is your Engineer's ID?",
    when: (answers) => answers.role === "Engineer", // <--- this is the important part
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is your Engineer's email address?",
    when: (answers) => answers.role === "Engineer", // <--- this is the important part
  },

  {
    type: "input",
    name: "engineerGithub",
    message: "What is your Engineer's Github handle?",
    when: (answers) => answers.role === "Engineer", // <--- this is the important part
  },

  // Intern questions

  {
    type: "input",
    name: "internName",
    message: "What is your Intern's name?",
    when: (answers) => answers.role === "Intern", // <--- this is the important part
  },
  {
    type: "input",
    name: "internName",
    message: "What is your Intern's ID?",
    when: (answers) => answers.role === "Intern", // <--- this is the important part
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});
