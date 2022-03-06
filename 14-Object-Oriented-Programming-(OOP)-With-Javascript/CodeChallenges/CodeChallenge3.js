'use strict';

// Coding Challenge #3
// Your tasks:

// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)

// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'

// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'

// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(`The new speed of ${this.make} is ${(this.speed += 10)}km/h.`);
};

Car.prototype.brake = function () {
  console.log(`The new speed of ${this.make} is ${(this.speed -= 5)}km/h.`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  console.log(`The battery is on ${(this.charge = chargeTo)}%`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
}; // This method will subscribe the accelerate method from Car (this is called polymorphism)

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.chargeBattery(100);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
