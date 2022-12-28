// This file is used to generate the HTML file that will be used to display the data

// Import the classes
const { Engineer, Intern, Manager } = require("./lib/classes");
const path = require("path");
const fs = require("fs");

const htmlPath = path.join(__dirname, "./dist/public.html");
console.log(htmlPath);

const generateHTML = (data) => {
  //console.log(data);

  // If the user is a manager, then the manager HTML will be generated
  if (data.manager == "y") {
    const newManager = new Manager(data.managerName, data.managerID, data.managerEmail, data.officeNumber);

    switch (data.role) {
      case "Engineer":
        const newEngineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
        //console.log(newEngineer);

        // Create the HTML markup
        let markupEngineer = `
        ${newManager.name}
        ${newEngineer.name}

        `;
        break;
      case "Intern":
        const newIntern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
        //console.log(newIntern);
        // Create the HTML markup
        let markupIntern = `
         ${newManager.name}
         ${newIntern.name}
 
         `;
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
