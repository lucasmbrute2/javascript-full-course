'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const owners = ['Lucas', 'Jonas', 'Adam', 'Martha'];

//**STRINGS
console.log(owners.sort());

//**NUMBERS
//return < 0 A,B (keep order)
//return > 0 B, A (switch order)
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   else if (b > a) return -1;
// });
movements.sort((a, b) => a - b); //Better way

console.log(movements);

//Descendant
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   else if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements); //Better way
