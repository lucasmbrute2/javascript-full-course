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
  _movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property with the _ convention
    this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Tanks for opening an account, ${owner}`); // You can create anything insides constructor
  }

  // Always use methods to interacts with the object (API)
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  } // This method should not be able outside the Class

  requestLoan(val) {
    if (this._approveLoan()) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Lucas', 'BR', 1111);
acc1.deposit(250);
acc1.withdraw(100);
acc1.requestLoan(1000);
acc1._approveLoan(100); // This should not be able here

console.log(acc1);
