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
};

//=======HOW TO USE SPREAD======
const arr = [7, 8, 9];
const newArr = [1, 2, 3, 4, ...arr];
console.log({ newArr });

console.log(...newArr); // O Spread espalha os elementos, sendo assim, eles realmente serão logados 1 por 1.

teste(...newArr); // Podemos passa-lo dessa forma para a função, sendo cada elemento do spread um paramentro da função.

function teste(params, params2, ...rest) {
  return console.log({ params }, { params2 }, { rest });
}

//=====CREATING ITEMS WITH SPREAD======
console.log(restaurant.mainMenu);
const newItem = [...restaurant.mainMenu, 'Lasagna'];
console.log(newItem);

//OBS: os '[]' antes do '=' significa que algo está sendo desestruturado, após o '=' significa que uma nova lista está sendo criada.
