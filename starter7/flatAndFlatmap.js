'use strict';

const arr = [
  [200, 450, -400],
  [3000, -650, -130],
  [70, 1300],
];

const flatedArr = arr.flat();
console.log(flatedArr); //Remove the nested array and creates a big one

const arrDeep = [
  [[200, 450], -400],
  [[3000, -650], -130],
  [70, 1300],
];

console.log(arrDeep.flat()); //Notice that Flat only works for 1 level of nesting.
console.log(arrDeep.flat(2)); //But we can pass in the arguments the number of deeping
