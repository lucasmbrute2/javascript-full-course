'use strict';
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  } // If no has addiotanal properties (course in this case) we don't need specify any constructor

  introduce() {
    console.log(`Hey ${this.fullName}!`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student i feel more like ${
        2037 - this.birthYear + 10
      } `
    );
  }
}

const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
martha.calcAge();
martha.introduce();
martha.calcAge(); // Polymorphism
