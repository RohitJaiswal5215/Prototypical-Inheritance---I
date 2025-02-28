
// Constructor function for Person
function Person(name, age) {
    this.name = name
    this.age = age
  }
  
  // Adding introduce method to Person prototype
  Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
  }
  
  // Constructor function for Employee, inheriting from Person
  function Employee(name, age, jobTitle) {
    Person.call(this, name, age)// Call Person constructor
    this.jobTitle = jobTitle
  }
  
  // Inherit Person prototype
  Employee.prototype = Object.create(Person.prototype)
  Employee.prototype.constructor = Employee
  
  // Adding work method to Employee prototype
  Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`)
  }
  
  // Demonstration
  const person = new Person('Alice', 30)
  person.introduce() 
  
  const employee = new Employee('Bob', 25, 'Software Developer')
  employee.introduce()
  employee.work()