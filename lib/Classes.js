// Purpose: To create classes for the Employee, Engineer, Intern, and Manager
class Manager {
  // Constructor for Manager class that takes in name, id, email, and office number when the class initializes
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // Methods for Manager class that return the name, id, email, and role of the manager
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
