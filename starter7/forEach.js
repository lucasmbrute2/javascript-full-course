'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Conventional FOR
for (const movement of movements) {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
}

//**ForEach
console.log('===================FOR EACH==============');
movements.forEach(movement => {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
});

//Getting the index in both FOR

for (const [i, mov] of movements.entries()) {
  if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
}

console.log('===================FOR EACH==============');

movements.forEach((mov, i) => {
  if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
});

//**FOREACH IN MAPS AND SETS

//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

//SET
console.log('=============SET=====================');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}`); //The second paremeter from forEach doesn't make sense in SET, so we can use _.
});
