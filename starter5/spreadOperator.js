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
//

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

//Shallow copy Array

const mainMenyCopy = [...restaurant.mainMenu];

//Joining Arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: arrays, strings, maps, set. NOT objects

const str = 'Lucas';
const letters = [...str, '', 'S.'];
console.log(letters);

const ingredients = [
  /*prompt*/ 'Lets make pasta!, Ingredient 1? ',
  /*prompt*/ 'Ingredient 2?',
  /*prompt*/ 'Igredient3? ',
];

//Nós temos algumas formas de passar argumentos para uma função, sendo com Hard-code, escrevendo na mão os parametros.
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//Ou podemos passar com o Spread.
restaurant.orderPasta(...ingredients);

//================SPREAD OBJECTS=============

const newRestaurant = {
  foundedIn: 2001,
  ...restaurant,
  founder: 'Lucas Victor',
};
console.log(newRestaurant);

//====CHANGING THE ORDER
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restaurante do Sorão!';

console.log(restaurantCopy.name);
console.log(restaurant.name);

// =========REST PATERN================

const array = [1, 2, ...[3, 4, 5]]; // Sabemos que é um SPREAD comum pois está do lado direito do =

const [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 0, 0]; // Sabemos que é um Rest por que está do lado esquerdo do =

console.log(a, b, { rest });

const [pizza, , risotto, ...rest2] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; // Exemplo de desestruturação com Rest parameter.
console.log(pizza, risotto, rest2);

//Objects

const { sat, ...restObject } = restaurant.openingHours;
console.log(sat, restObject);

//Functions

const add = (...numbers) => {
  return console.log(numbers.reduce((acc, curr) => acc + curr));
  //or
  // let poll = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   poll += numbers[i];
  // }
  // return poll;
};
add(13, 31, 3, 13, 14, 14, 1, 41, 41, 41); // Aqui foi criado uma função que aceita uma quantiade indefinida de números.

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('cheese', 'bacon', 'salamigno');
