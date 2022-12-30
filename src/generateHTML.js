// This file is used to generate the HTML file that will be used to display the data

// Import the classes
const { Engineer, Intern, Manager } = require("../lib/classes");
const path = require("path");
const fs = require("fs");

const htmlPath = path.join(__dirname, "../dist/public.html");
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
        <div class="bg-gray-200 rounded-md shadow-md h-80 w-60">
        <div class="w-full h-20 bg-blue-700 rounded-md">
            <h2 class="text-lg font-bold text-white text-start">
                ${newManager.name}
            </h2>
            <h2 class="mb-10 text-lg font-bold text-white text-start">
                <i class="fas fa-coffee"></i>
                ${newManager.getRole()}
            </h2>
            <p class="w-full p-4 bg-white">ID:${newManager.id}</p>
            <p class="w-full p-4 bg-white">Email:<a href="mailto:${newManager.email}">${newManager.email}</a></p>
            <p class="w-full p-4 bg-white">Office Number:${newManager.officeNumber}</p>
        </div>
    </div>

        <div class="bg-gray-200 rounded-md shadow-md h-80 w-60">
            <div class="w-full h-20 bg-blue-700 rounded-md">
                <h2 class="text-lg font-bold text-white text-start">
                    ${newEngineer.name}
                </h2>
                <h2 class="mb-10 text-lg font-bold text-white text-start">
                    <i class="fas fa-glasses"></i>
                    ${newEngineer.getRole()}
                </h2>
                <p class="w-full p-4 bg-white">ID:${newEngineer.id}</p>
                <p class="w-full p-4 bg-white">Email:<a href="mailto:${newEngineer.email}">${newEngineer.email}</a></p>
                <p class="w-full p-4 bg-white">GitHub:<a target="_blank" href="https://github.com/${newEngineer.getGithub()}">${newEngineer.getGithub()}</a></p>
            </div>
        </div>
        `;

        // Write the HTML markup to the public.html file
        fs.appendFile(htmlPath, markupEngineer, (err) => {
          if (!err) {
            console.log("Data posted to HTML file");
          } else {
            console.log(err);
          }
        });

        break;
      case "Intern":
        const newIntern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
        //console.log(newIntern);
        // Create the HTML markup
        let markupIntern = `
        <div class="bg-gray-200 rounded-md shadow-md h-80 w-60">
        <div class="w-full h-20 bg-blue-700 rounded-md">
            <h2 class="text-lg font-bold text-white text-start">
                ${newManager.name}
            </h2>
            <h2 class="mb-10 text-lg font-bold text-white text-start">
                <i class="fas fa-coffee"></i>
                ${newManager.getRole()}
            </h2>
            <p class="w-full p-4 bg-white">Email:<a href="mailto:${newManager.email}">${newManager.email}</a></p>
            <p class="w-full p-4 bg-white">Office Number:${newManager.officeNumber}</p>
        </div>
    </div>

        <div class="bg-gray-200 rounded-md shadow-md h-80 w-60">
            <div class="w-full h-20 bg-blue-700 rounded-md">
                <h2 class="text-lg font-bold text-white text-start">
                    ${newIntern.name}
                </h2>
                <h2 class="mb-10 text-lg font-bold text-white text-start">
                    <i class="fas fa-glasses"></i>
                    ${newIntern.getRole()}
                </h2>
                <p class="w-full p-4 bg-white">ID:${newIntern.id}</p>
                <p class="w-full p-4 bg-white">Email:<a href="mailto:${newIntern.email}">${newIntern.email}</a></p>
                <p class="w-full p-4 bg-white">School:${newIntern.getSchool()}</a></p>
            </div>
        </div>
         `;

        // Write the HTML markup to the public.html file
        fs.appendFile(htmlPath, markupIntern, (err) => {
          if (!err) {
            console.log("Data posted to HTML file");
          } else {
            console.log(err);
          }
        });

        break;
      default:
        break;
    }
  }
  // If the user is not a manager, then do nothing
  else {
    switch (data.role) {
      case "Engineer":
        const newEngineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
        //console.log(newEngineer);

        // Create the HTML markup
        let markupEngineer = `
        <div class="bg-gray-200 rounded-md shadow-md h-80 w-60">
            <div class="w-full h-20 bg-blue-700 rounded-md">
                <h2 class="text-lg font-bold text-white text-start">
                    ${newEngineer.name}
                </h2>
                <h2 class="mb-10 text-lg font-bold text-white text-start">
                    <i class="fas fa-glasses"></i>
                    ${newEngineer.getRole()}
                </h2>
                <p class="w-full p-4 bg-white">ID:${newEngineer.id}</p>
                <p class="w-full p-4 bg-white">Email:<a href="mailto:${newEngineer.email}">${newEngineer.email}</a></p>
                <p class="w-full p-4 bg-white">GitHub:<a target="_blank" href="https://github.com/${newEngineer.getGithub()}">${newEngineer.getGithub()}</a></p>
            </div>
        </div>
        `;

        // Write the HTML markup to the public.html file
        fs.appendFile(htmlPath, markupEngineer, (err) => {
          if (!err) {
            console.log("Data posted to HTML file");
          } else {
            console.log(err);
          }
        });

        break;
      case "Intern":
        const newIntern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
        //console.log(newIntern);
        // Create the HTML markup
        let markupIntern = `
 <div class="bg-gray-200 rounded-md shadow-md h-80 w-60">
            <div class="w-full h-20 bg-blue-700 rounded-md">
                <h2 class="text-lg font-bold text-white text-start">
                    ${newIntern.name}
                </h2>
                <h2 class="mb-10 text-lg font-bold text-white text-start">
                    <i class="fas fa-glasses"></i>
                    ${newIntern.getRole()}
                </h2>
                <p class="w-full p-4 bg-white">ID:${newIntern.id}</p>
                <p class="w-full p-4 bg-white">Email:<a href="mailto:${newIntern.email}">${newIntern.email}</a></p>
                <p class="w-full p-4 bg-white">School:${newIntern.getSchool()}</a></p>
            </div>
        </div>
         `;

        // Write the HTML markup to the public.html file
        fs.appendFile(htmlPath, markupIntern, (err) => {
          if (!err) {
            console.log("Data posted to HTML file");
          } else {
            console.log(err);
          }
        });

        break;
      default:
        break;
    }
  }
};

// Export the generateHTML function
module.exports = { generateHTML };
