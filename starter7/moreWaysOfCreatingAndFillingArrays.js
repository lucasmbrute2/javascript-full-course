'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Normal ways to build arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
const instaArr = new Array(1, 2, 3, 4, 5, 6, 7);

//Building programattly arrays
const x = new Array(8);
console.log(x); // This wil return a empty array with length 8, cuz we just pass 1 argument at Array class

//So, what is it for ?
x.fill(3);
console.log(x); //Notice that entire array was filled with this method.

//Thats it? No, we can especify a second parameter:
const y = new Array(7);
y.fill(5, 2, 6);
console.log(y); //We can especify the starter and final index

//Remeber that fill method DOES MUTATE the arr.
arr.fill(2);
console.log(arr);

//Array.from
const z = Array.from({ length: 7 }, () => 1);
console.log(z); // This is the same thing to do new Array()

const j = Array.from({ length: 7 }, (cur, index) => index + 1); //This callback function its like a "map" method.
console.log(j);

//Creating a array with 100 dice rolls
const arrayOfRandomDiceRolls = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * (6 - 1 + 1)) + 1
);
console.log(arrayOfRandomDiceRolls);
