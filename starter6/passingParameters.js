'use strict';

const flight = 'LH234';

const lucas = {
  name: 'Lucas Victor de Souza Dantas',
  passport: 5353452168,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //isn't a good practice change the value of parameter
  passenger.name = 'Mr ' + passenger.name;

  if (passenger.passport === 5353452168) console.log('checked in');
  else console.log('Wrong passport');
};

checkIn(flight, lucas);
console.log(flight);
console.log(lucas); // The passenger name was changed, ITS WEIRD

//Explanation

//Pass a value to a function is the same thing to do this:

const flightNum = flight; //we are doing a copy of the flight, so the flight that is outside the function isn't changed.
const passenger = lucas; // we are making a copy of the object in memory heap, so the object inside and outside the function will change

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
}; // Here we have 2 functions changing the value of the object, BE CAREFUL!

newPassport(lucas);
checkIn(flight, lucas);

//JAVASCRIPT DON'T PASS BY REFERENCE
