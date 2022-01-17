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
    tue: {
      open: 0,
      close: 20,
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

//The optional channing cames to resolve this problem:
console.log(restaurant.openingHours);

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH OPTION CHAINING

console.log(restaurant.openingHours?.mom?.open);

//============EXAMPLLES==============
const weekdays2 = ['mon', 'tue', 'wed', 'thu', 'fri'];

for (const day of weekdays2) {
  console.log(
    `We are open at:  ${
      restaurant.openingHours[day]?.open ?? 'Im sorry, actually we are not open'
    } in ${day}.`
  );
}

//METHODS

console.log(restaurant.order?.(0, 3) || 'This method doesnt exists');
console.log(restaurant.orderRisotto?.(0, 3) || 'This method doesnt exists');

//Arrays

const users = [{ name: 'lucas' }, { email: 'lucasmbrute614@gmai.com' }];

console.log(users[0]?.name ?? 'User array empty');

const users2 = [];

console.log(users2[0]?.name ?? 'User array empty'); // Dont throw a error .
