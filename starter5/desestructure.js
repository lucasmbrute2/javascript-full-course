'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
};

const [categories1, categories2, ...rest] = restaurant.categories;
console.log({ categories1 }, { categories2 }, { rest });

// To switch variables using desestructuring

let [starterMenu1, starterMenu2] = restaurant.starterMenu;
console.log(starterMenu1, starterMenu2);

//  =========WITHOUT DESESTRUCTURING======
// const temp = starterMenu1;
// starterMenu1 = starterMenu2;
// starterMenu2 = temp;
// console.log(starterMenu1,starterMenu2)
//==========WITH DESESTRUCTURING==========

[starterMenu1, starterMenu2] = [starterMenu2, starterMenu1];
console.log(starterMenu1, starterMenu2);
// Aqui as variáveis starterMenu2 e starterMenu1 estão sendo colocadas dentro de uma lista e sendo desestruturadas, sobrescrevendo os valores e invertendo as posicoes.

//OUTROE EXEMPLO
const arr = 3131;
const arr2 = 31313;

const [teste1, teste2] = [arr, arr2];
console.log({ teste1 }, { teste2 });

const [starter, main] = restaurant.order(1, 2); //Assim nós podemos desestruturar a resposta de uma função.
console.log(starter, main);

//========NESTED DESESTRUCTURING=========================

const nested = [2, 4, [5, 6]];

const [value1, , value2] = nested;
console.log(value1, value2);

const [value3, , [value1Nested, value2Nested]] = nested; //Aqui está sendo foi a desestruturação dentro da desestruturação

console.log(value3, value1Nested, value2Nested);

//======SETTING DEFAULT VALUES IN DESESTRUCTURING.=============

const [p, q, r = 1] = [8, 9]; //Para evitar que a variável R fosse undefined, nós atribuimos como valor Default 1, sendo assim, sempre que ela não receber nenhum valor da desestruturação, irá por padrão ser o 1 o seu valor.
console.log(p, q, r);

//===============DESESTRUCTURING OBJECTS===============
const { name: restaurantName, openingHours, categories } = restaurant; //We can change the name with ':'.
console.log(restaurantName, openingHours, categories);

//DEFAULT VALUES
const { menu = [], starterMenu: starters = [], teste: abc = [] } = restaurant; //We can set default values and set new names.

console.log(menu, starters, abc);

//MUTATING VARIABLES
let a = 2121;
let b = 3131;

const obj = { a: 23, b: 12, c: 4 };

({ a, b } = obj); // This will only works to variables that were be mutaded.

console.log(a, b);
