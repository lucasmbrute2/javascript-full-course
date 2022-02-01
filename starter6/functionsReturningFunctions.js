'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetStore = greet('Hey'); //The greetStore is the function inside the greet
greetStore('Lucas');

//ANOTHER SYNTAX
greet('Hello')('Matheus');

//Rewriting the first function using ARROW FUNCTION

// const greet2 = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('Whats up')('Carol');
