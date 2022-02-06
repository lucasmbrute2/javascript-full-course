'use strict';

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//AT Method is usefuel in case we must get the last element in array and we don't know the length.

//Instead:
console.log(arr[arr.length - 1]);

//Or even:
console.log(arr.slice(-1)[0]);

//Use:
console.log(arr.at(-1));

//Also works in strings
console.log('lucas'.at(0));
console.log('lucas'.at(-1));
