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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Método tradicional de FOR
console.log('=============FOR TRADICIONAL======');
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

console.log('==========FOR OF=================');
for (const item of menu) console.log(item);

// GETTING THE INDEX WITH FOR OF

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//===========LOOPING TROUGH OBJECTS===============

// PROPERTY NAMES
console.log(restaurant.openingHours);

const prop = Object.keys(restaurant.openingHours);
console.log(prop); // This will keep in a variable all these object's key, making a array of keys.

let openStr = `We are open at ${prop.length} days: `;

for (const day of prop) {
  openStr += `${day}, `;
} // So we can use a FOR to iteration in this list and make this effect

console.log(openStr);

// PROPERTY VALUES

const values = Object.values(restaurant.openingHours);
console.log({ values });

const entries = Object.entries(restaurant.openingHours);
console.log(entries); // Yeah, now we can loop over the object

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
