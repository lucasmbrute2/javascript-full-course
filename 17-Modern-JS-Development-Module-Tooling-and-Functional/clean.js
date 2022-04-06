'use strict';
// const { get } = require('core-js/core/dict');

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
}); // Object.freeze you can no longer put any new property.

const getLimit = (user, limit) => limit?.[user] ?? 0;

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
//Pure function :D
const addExpense = function (budget, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(cleanUser, spendingLimits)
    ? [...budget, { value: -value, description, cleanUser }]
    : budget;
};

const newBudget1 = addExpense(budget, 10, 'Pizza 🍕');
console.log(newBudget1);
const newBudget2 = addExpense(newBudget1, -1, 'Stuff', 'Jay');
console.log(newBudget2);
const newBudget3 = addExpense(newBudget2, 100, 'Going to movies 🍿', 'Matilda');
console.log(newBudget3);

const checkExpenses = (budget, limit) =>
  budget.map(el =>
    el.value < -getLimit(el.user, limit) ? { ...el, flag: 'limit' } : el
  );

const expense = checkExpenses(newBudget3, spendingLimits);
console.log(expense);

const logBigExpenses = function (bigLimit) {
  let output;
  for (const entry of budget)
    output =
      entry.value <= -bigLimit
        ? (output += `${entry.description.slice(-2)} / `)
        : '';

  output = output.slice(0, -2); // Remove last '/ '
};
logBigExpenses(100);
