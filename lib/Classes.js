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

// const newEmployee = new Employee("Joe", 1, "joe@gmail.com");
// console.log(newEmployee.getEmail());
// console.log(newEmployee.getId());
// console.log(newEmployee.getName());
// console.log(newEmployee.getRole());
