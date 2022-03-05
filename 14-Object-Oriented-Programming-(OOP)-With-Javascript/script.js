'use strict';

const Person = function (firstName, birthYear) {
  // Instace properties

  this.firstName = firstName; // We are setting the key firstName(could be anything) with the value firstName
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
const lucas = new Person('Lucas', 2000);
console.log(lucas);

//====== What is happining in this function(because the new operator) ==========

// 1. New empty object is created
// 2. Function is called, this = is the new created object
// 3. The new object is linked to prototype
// 4. Function is automatically returned

const matilda = new Person('Matilda', 2017);
const bruna = new Person('Bruna', 2003);
console.log(matilda, bruna);

console.log(lucas instanceof Person);

// =========Prototypes============

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  // Adding a prototype
  console.log(2037 - this.birthYear);
};

lucas.calcAge();
bruna.calcAge();

console.log(lucas.__proto__); // The prototype of the object linked object
console.log(lucas.__proto__ === Person.prototype); // The prototype of the object linked object

console.log(Person.prototype.isPrototypeOf(lucas)); // The prototype is linked in the object, no in the Person

// Setting properties

Person.prototype.species = 'Homo Sapiens';
console.log(bruna); // Its not its own property, so we don't receive the property
console.log(bruna.species); // In this case we receive the species property

console.log(bruna.hasOwnProperty('firstName')); // TRUE
console.log(bruna.hasOwnProperty('species')); // FALSE

// Built-in proto
console.log(lucas.__proto__.__proto__);
console.log(Array.prototype);

const arr = [3, 4, 5, 6, 7, 8]; // new Array()
console.dir(Person.prototype.constructor); //  The constructor points to objects itself (Person)
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  console.log(this);
  return [...this.map(el => el * 2)];
};
console.log(arr.unique()); // We can create a new function to all the arrays
