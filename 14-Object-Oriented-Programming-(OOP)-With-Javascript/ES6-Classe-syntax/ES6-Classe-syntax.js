'use strict';

// OLDER SYNTAX COMPARE

function Person(firstName, birthYear) {
  this.name = firstName;
  this.firstName = birthYear;
}

const person1 = new Person('Amanda', 2000);
console.log(person1);
console.log(person1.__proto__);

Person.prototype.calcAge = function () {
  // Always creates the function in this way.
  return 2037 - this.birthYear;
};

console.log('===============NEW SYNTAX BELOW===============');

// ================NEW SYNTAX=================
/* Class expression

const PersonCL = class{}

*/
// Class declaration

class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2037 - this.birthYear; // In ES6 Classes we can create the methods directly here, they aren't attached to the objects themselves, but to the prototype.
  }
}

const lucas = new PersonCL('lucas', 2000);
console.log(lucas.calcAge());
