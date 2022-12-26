// Purpose: To create classes for the Employee, Engineer, Intern, and Employee
class Employee {
  // Constructor for Employee class that takes in name, id, email, and office number when the class initializes
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // Methods for Employee class that return the name, id, email, and role of the manager
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// Console logs to test the Employee class

// const newEmployee = new Employee("Joe", 1, "joe@gmail.com");
// console.log(newEmployee.getEmail());
// console.log(newEmployee.getId());
// console.log(newEmployee.getName());
// console.log(newEmployee.getRole());

/********************************************************/

// Engineer class that extends the Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// Console logs to test the Manager class

//const newManager = new Manager("Joe", 1, "joe@gmail.com", 8005555555);
//console.log(newManager.getRole());
//console.log(newManager.getOfficeNumber());

/********************************************************/

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

const newEng = new Engineer("Joe", 1, "joe@gmail.com", "JOE");
console.log(newEng.getRole());
console.log(newEng.getGithub());

/********************************************************/

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}
