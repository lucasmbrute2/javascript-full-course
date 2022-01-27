'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    [`day-${2 + 4}`]: {
      open: 0, // Open 24 hours
      close: 24,
    },
    [weekdays[2]]: {
      open: 11,
      colse: 20,
    },
  },

  order(starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainMenuIndex]];
  },

  orderDelivery({
    time = '10:15',
    address = 'Rua David Lopes',
    mainIndex,
    starterIndex,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} will be devilered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log({ mainIngredient });
    console.log({ otherIngredients });
    console.log('====================================');
  },
};

const orderSet = new Set([
  'Pizza',
  'Risotto',
  'Pizza',
  'Pasta',
  'Pizza',
  'Bread ',
]);
console.log(orderSet);
// Looks that value don't repeat

console.log(new Set('Lucas'));
console.log(orderSet.size); // Its like a "length"
console.log(orderSet.has('Pizza')); //Its like a "includes"
console.log(orderSet.has('Camarão'));
orderSet.add('Garrafa'); // It's like a "push"
orderSet.delete('Risotto');
console.log(orderSet);

//Set is good to store datas, you cant retrieve any data from there. Usually we use the method "has" to compare.

for (const order of orderSet) console.log('i was iterated : ' + order);

//Usefull example
