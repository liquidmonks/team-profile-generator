// This file is used to generate the HTML file that will be used to display the data

// Import the classes
const { Engineer, Intern, Manager } = require("./lib/classes");
const generateHTML = (data) => {
  //console.log(data);

  // If the user is a manager, then the manager HTML will be generated
  if (data.manager == "y") {
    switch (data.role) {
      case "Engineer":
        const newEngineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
        break;
      case "Intern":
        break;
      default:
        break;
    }
  }
  // If the user is not a manager, then do nothing
  else {
  }
};

// Export the generateHTML function
module.exports = { generateHTML };
