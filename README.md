
# Team Profile Maker

Team employee profile maker.



## Team Profile Maker Program Description:

This is a command-line application that runs with Node.js that dynamically generates a team profile webpage file based on user input.


## Installation

- Recommended: 
    - Computer with a command line terminal
    - Visual Studio Code (VSCode) version 1.74.1 or later
    - Node.js version 18.12.1 or later
    - Tailwindcss

- Directions:

        1. Download the repository and run `npm install`
        2. Run 'npm i -y'.
        3. Run 'node index.js'.
        4. Choose the employee role to add to the team profile page.
        5. Locate the generated team profile in public.html.


## Usage

- This Node CLI will prompt you to generate a webpage for your software engineering team. 
- The application will prompt you for information about the team manager and then information about the team members. 
- You can input any number of team members, including a mix of engineers and interns. 
- Validation is implemented to ensure that information provided is in the proper expected format.

________
- CUSTOMIZATIONS:
    - The user may modify the prompt questions from the index.js file. 
    - The user may modify the styling template from the generateHTML.js file. 


### Profile Output

The program generates an `public.html` page in the `www/` directory with the following employee format:

  * Name
  * Role
  * ID
  * Role-specific property (office number, link to GitHub profile, or university)


### Classes

The application utilizes object-oriented programming by using constructors, the prototype chain, and the `ES6` pattern of `class`. 

- Parent Class: `Employee`. 
- Sub-Classes: `Manager`, `Engineer`, and `Intern`.
    - Inherits methods and properties from parent class `Employee`.
    
Parent class `Employee` properties and methods: 

  * name
  * id
  * email
  * role
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

Extended Class `Manager`:

  * officeNumber
  * getRole() // Overridden to return 'Manager'

Extended Class `Engineer`:

  * github  // GitHub username
  * getGithub()
  * getRole() // Overridden to return 'Engineer'

Extended Class `Intern`:

  * school 
  * getSchool()
  * getRole() // Overridden to return 'Intern'


### Test-Driven Development (TDD)

- The development of this application focuses on writing tests and ensuring application features are passed to ensure the code is understandable and sustainable. 

- Classes were also developed to be as simple and pure as possible so that they are easier to test. 

- The suite of `Jest` tests for the above classes in the `tests/` directory currently passes. 




## Visual Tutorial
![team](https://user-images.githubusercontent.com/114820394/211603084-ec3e62d1-60ba-4d3b-98ba-336e7a645c16.gif)



![screenshot](https://i.imgur.com/BZ3ofQu.png)


## 🔗 Live Site Link
[![Live Site](https://img.shields.io/badge/livesite-click-orange)](https://liquidmonks.github.io/team-profile-generator/www/public.html)

## Tech Stack


- JavaScript
- Tailwindcss
- Node.js 
    - NPM (Inquirer)
- ES6+ Syntax




**Server:** Visual Studio Code


## Authors

- [@liquidmonks](https://www.github.com/liquidmonks)


![Logo](https://i.imgur.com/MrXyBQy.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)

