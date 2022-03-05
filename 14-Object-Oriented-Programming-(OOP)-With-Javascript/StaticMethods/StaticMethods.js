'use strict';

// Static method mean that method is available only in the constructor and don't inherits to prototype

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  static greet() {
    console.log(`Hello Lucas`);
  }
}

const lucas = new PersonCl('Lucas', 2000);
console.log(lucas.__proto__); // The method greet isn't available here

PersonCl.greet();
console.dir(PersonCl); // It's only available here
