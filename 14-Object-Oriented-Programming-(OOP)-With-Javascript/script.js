'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName; // We are setting the key firstName(could be anything) with the value firstName
  this.birthYear = birthYear;
};
const lucas = new Person('Lucas', 2000);
console.log(lucas);

//====== What is happining in this function(because the new operator) ==========

// 1. New empty object is created
// 2. Function is called, this = is the new created object
// 3. The new object is linked to prototype
// 4. Function is automatically returned
