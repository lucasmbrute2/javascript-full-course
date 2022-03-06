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
console.log(lucas.__proto__ === PersonCL.prototype);

PersonCL.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
}; // In the new syntax you are able to do this too.

lucas.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

//======================================================================================

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
  // 1- Plubic fields (instances so they arent' on protoype)
  locale = navigator.language;

  // 2- Private fields (instances so they arent' on protoype)
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property with the _ convention
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Tanks for opening an account, ${owner}`); // You can create anything insides constructor
  }

  // Public methods
  // Always use methods to interacts with the object (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan()) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }

  // 4- Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Lucas', 'BR', 1111);
acc1.deposit(250);
acc1.withdraw(100);
acc1.requestLoan(1000);

console.log(acc1);
