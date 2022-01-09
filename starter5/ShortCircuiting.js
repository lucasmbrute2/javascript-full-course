'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainMenuIndex]];
  },

  orderDelivery: function ({
    time = '10:15',
    address = 'Rua David Lopes',
    mainIndex,
    starterIndex,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} will be devilered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log({ mainIngredient });
    console.log({ otherIngredients });
  },
};

console.log('------------OR-----------------');
console.log(3 || 'Lucas');
console.log('' || 'Lucas');
console.log(true || 0);
console.log(undefined || null); // This will return null

//Explanation

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //This will return ''Hello'' cuz JS returns the first truthy value.

// restaurant.numGuest = 'exists';
const guests1 = restaurant.numGuest ? restaurant.numGuest : 'dont exists';
console.log(guests1);

//The other way to do this:

restaurant.numGuest = 'exists';
const guests2 = restaurant.numGuest || 'dont exists';
console.log(guests2);

//The problem is when we set the numGuest with 0, wich is't this truthy value. Resolution about this problem later
restaurant.numGuest = 0;
const guests3 = restaurant.numGuest || 'dont exists';
console.log(guests3);

console.log('------------AND-----------------');

console.log(0 && 'Lucas'); // This will return 0, cuz with && operator the short-circuiting will occurr when the fist value was falsy
console.log(7 && 'Lucas'); //This will return 'Lucas', cuz the 7 is true, so the evaluation continues

console.log('Hello' && 23 && null && 'Lucas'); // This will return null

//We can change this

if (restaurant.orderPizza) {
  restaurant.orderPizza('abobora', 'feijão');
}

//To this

restaurant.orderPizza && restaurant.orderPizza('abobora', 'feijão'); // Isso é possível, pois como foi aprendido, o primeiro elemento (restaurant.orderPizza) é truthy, sendo assim, o circuit break irá acontecer no segundo elemento.
