'use strict';

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthyear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
