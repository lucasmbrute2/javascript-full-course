'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');

  return [first.toUpperCase(), ...other].join(' ');
};

console.log(upperFirstWord('lucas'));

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`); //Notice that we call the function here, passing the str
  console.log(`Transformed by: ${fn.name}`); //this '.name' is a function atribute.
};

transformer('Javascript is the best language', upperFirstWord); //Notice that we pass only the value

console.log('============================');
transformer('Javascript is the best language', oneWord);
