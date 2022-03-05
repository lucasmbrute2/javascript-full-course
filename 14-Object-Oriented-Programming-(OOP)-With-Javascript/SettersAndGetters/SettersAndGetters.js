'use strict';

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// GETTER
console.log(account.latest);

// SETTER
account.latest = 30;
console.log(account.movements);

// Classes alery have GETTERS AND SETTERS

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2037 - this.birthYear; // In ES6 Classes we can create the methods directly here, they aren't attached to the objects themselves, but to the prototype.
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a propert that already exists

  // We are always making a validation if has a space in the name. Setter and Getters tranforms the methods in properties
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    // Whe change the property name to _fullName
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName; // And here we return this._fullName were calling by this.fullName
  }
}

const lucas = new PersonCL('Lucas Souza', 2000);
console.log(lucas.age);
console.log(lucas.fullName);
console.log(lucas._fullName);
