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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, index) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__value">${mov} €</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html); //Here we are adding a template from JS.
  });
};

function updateUI(currentAccount) {
  displayMovements(currentAccount.movements);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}

const convertCoin = function (movements) {
  let eurToUsd = 1.1;
  let brToUsd = 5.3;

  const coin = eurToUsd;

  return movements.map(mov => (mov * coin).toFixed(2));
};

convertCoin(account1.movements);

//DISPLAYING THE BALANCE VALUE
function calcDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = acc.balance + '€';
}

//Getting a maximum value

function displayTheBiggest(movements) {
  return movements.reduce((acc, cur) => {
    if (cur > acc) return (acc = cur);
    else return acc;
  }, movements[0]);
}

console.log(displayTheBiggest(account1.movements));

//THE BOTTOM OF THE SITE
function calcDisplaySummary(account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = incomes + '€';

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumOut.textContent = Math.abs(out) + '€';

  const interest =
    account.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * account.interestRate) / 100)
      .filter(int => int >= 1)
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2) + '€';

  labelSumInterest.textContent = interest;
}

//CREATING A USERNAME
const username = function (accounts) {
  accounts.forEach(acc => {
    //This function are creating a property 'username' in each object 'account'
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

username(accounts);
console.log(accounts);

//Event Handler
//LOGIN ACCOUNT
let currentAccount;
let autorization;
btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    autorization = true;

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = '100';

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

//TRANSFERING THE MONEY
btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const to = inputTransferTo.value;
  const amount = Number(inputTransferAmount.value);

  if (to && amount) {
    if (amount > 0) {
      const accountToTransfer = accounts.find(acc => acc.username === to);

      if (
        accountToTransfer &&
        currentAccount.balance >= amount &&
        to !== currentAccount.username
      ) {
        currentAccount.movements.push(-amount); //Getting of the amount of the current account
        accountToTransfer.movements.push(amount);

        updateUI(currentAccount);

        alert('Transfer valid!');
      } else alert('User was not found.');

      //Cleaning the fields
      inputTransferTo.value = inputTransferAmount.value = '';
    } else alert('Please tell a valid amount!');
  } else alert('I wanna see your words in all fields :(');
});

//LOAN FEATURE

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amountInput = Number(inputLoanAmount.value);

  if (
    amountInput > 0 &&
    currentAccount.movements.some(mov => mov >= amountInput * 0.1)
  ) {
    currentAccount.movements.push(amountInput);
    inputLoanAmount.value = '';
    updateUI(currentAccount);
  } //In our business rule, the user can only take a loean if has a account movement.
  else {
    alert("You don't have the requirements.");
  }
});

//CLOSING A ACCOUNT

btnClose.addEventListener('click', e => {
  e.preventDefault();

  const userInput = inputCloseUsername.value;
  const userPin = Number(inputClosePin.value);

  if (userInput === currentAccount.username && userPin === currentAccount.pin) {
    const index = accounts.findIndex(user => user.username === userInput);
    accounts.splice(index, 1);

    inputCloseUsername.value = inputClosePin.value = '';

    containerApp.style.opacity = '0';
    currentAccount = '';

    alert(`Account deleted with success!`);
  } else alert('Some field is wrong.');
});

//COUNTING ALL THE MOVEMENTS OF ALL ACCOUNTS
//**Flat
function countingAllMovements(accounts) {
  const accountMovements = accounts
    .map(acc => acc.movements)
    .flat() //Flat method are joining all elementes in one array.
    .reduce((acc, cur) => acc + cur, 0);
  return accountMovements;
}

console.log(countingAllMovements(accounts));

//**FlatMap

function countingAllMovements2(accounts) {
  const accountMovements = accounts
    .flatMap(acc => acc.movements) //Flatmap combines the Map with flat. Flat happens in the end.
    .reduce((acc, cur) => acc + cur, 0);
  return accountMovements;
}
console.log(countingAllMovements2(accounts));

let sorted = false;
//Sorting the movementes
btnSort.addEventListener('click', e => {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//EXAMPLE --- IN THIS EXAMPLE WE GONNA SIMULATE THAT WE DONT HAVE A LIST OF MOVEMENTS
labelBalance.addEventListener('click', () => {
  const movementesUI = Array.from(
    document.querySelectorAll('.movements__value'),
    cur => Number(cur.textContent.replace('€', ''))
  );
  console.log(movementesUI); //Notice that a Nodelist is returned, we can only iterate this array because Array.from()

  //Another way to do this:
  const movementesUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementesUI2.map(cur => cur.textContent.replace('€', '')));
});
('');

//====================================
//EXCERCIES::

//*1 CALCULATE HOW MUCH HAS BEEN DEPOSITED IN TOTAL IN THE BANK (ALL ACCOUNTS)

const bankDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositsSum);

//2. HOW MUCH DEPOSITS WITH AT LEAST 1000

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

//
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur, arr) => (cur >= 1000 ? ++acc : acc + 0), 0);
console.log(numDeposits1000);

//EXPLANATION ABOUT ++ OPERATOR
let a = 10;

console.log(a++); // Notice that results still 10
console.log(a); //We have to log again to fix it
console.log(++a); //We can solve this using the ++operator before the expression
