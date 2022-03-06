'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // Method call is passing the this keyword to the Person function and calling it
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); // Link both this prototypes

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Lucas', 2000, 'Computer Science');
console.log(mike);
mike.introduce();
