'use strict';

// Coding Challenge #4
// Your tasks:

// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class

// 2. Make the 'charge' property private

// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return `It's a ${this.speed / 1.6}mi/h`;
  }

  speedUS(speed) {
    return `It's a  ${(this.speed = speed * 1.6)}`;
  }

  accelerate() {
    console.log(`The new speed of ${this.make} is ${(this.speed += 10)}km/h.`);
  }

  brake() {
    console.log(`The new speed of ${this.make} is ${(this.speed -= 5)}km/h.`);
    return this;
  }
}

class EVCL extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    console.log(`The battery is on ${(this.#charge = chargeTo)}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const car1 = new EVCL('Rivian', 120, 23);
car1.accelerate().chargeBattery(100).accelerate().brake().brake();
