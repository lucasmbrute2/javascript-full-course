'use strict';

// Object.create method allows to hand on to as many prototypes as you want with the methods or properties pre-defined

const PersonProto = {
  calcAge() {
    return 2037 - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const lucas = Object.create(PersonProto);
lucas.init('Lucas', 2000);
console.log(lucas);
console.log(lucas.calcAge());

console.log(lucas.__proto__ === PersonProto); // Indeed we pass the prototype from PersonProto to lucas

const bruna = Object.create(PersonProto); // Indeed we are passing the same prototype for 2 objects
bruna.init('Bruna', 2003);
console.log(bruna.calcAge());
