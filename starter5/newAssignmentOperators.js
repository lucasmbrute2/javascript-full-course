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
    console.log('====================================');
  },
};

const rest1 = {
  name: 'Meu restaurante',
  numGuests: 10,
};

const rest2 = {
  name: 'Meu restaurante',
  owner: 'Lucas',
};

// OR Assisgment operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1);
console.log(rest2);

//The best way to do

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

// NULLISH ASSIGMENT OPERATOR (null or undefined)

const rest3 = {
  name: 'Meu restaurante',
  numGuests: 0, //If this value was 0, we have to change the Operator || to ??
};

const rest4 = {
  name: 'Meu restaurante',
  owner: 'Lucas',
};

rest3.numGuests ??= 10;
rest4.numGuests ??= 10;

// rest3.owner = rest3.owner && '<Anonimo>';
// rest4.owner = rest4.owner && '<Anonimo>'; // Aqui está substituindo o valor de owner

// The better way
rest3.owner &&= '<ANONIMO>'; // Desta forma é melhor pois não injeta o valor 'undefined' caso seja falsy
rest3.owner &&= '<ANONIMO>';
console.log({ rest3 });
console.log({ rest4 });
