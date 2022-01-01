"use strict";

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

  order: function(starterIndex, mainMenuIndex){
    return [this.stater]
  }
};

const [categories1, categories2, ...rest] = restaurant.categories;
console.log({ categories1 }, { categories2 }, { rest });

// To switch variables using desestructuring 

let [starterMenu1,starterMenu2] = restaurant.starterMenu;
console.log(starterMenu1,starterMenu2);

//  =========WITHOUT DESESTRUCTURING======
// const temp = starterMenu1;
// starterMenu1 = starterMenu2;
// starterMenu2 = temp;
// console.log(starterMenu1,starterMenu2)
//==========WITH DESESTRUCTURING==========

[starterMenu1, starterMenu2] = [starterMenu2, starterMenu1]; 
console.log(starterMenu1,starterMenu2);
// Aqui as variáveis starterMenu2 e starterMenu1 estão sendo colocadas dentro de uma lista e sendo desestruturadas, sobrescrevendo os valores e invertendo as posicoes.


//OUTROE EXEMPLO
const arr= 3131
const arr2 = 31313

const [teste1, teste2] = [arr, arr2]
console.log({teste1}, {teste2})