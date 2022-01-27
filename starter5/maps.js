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

const rest = new Map();

// Key maps can be anything

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // The map will return updated

//Chaining set

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(true, 'value')
  .set(2, 'dois')
  .set(new Map(), 'novo map')
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :(');
console.log(rest);

const time = 8;
console.log(rest.get(time > rest.get(open) && time < rest.get('close')));
//Its a powerful way but unreadable to get values with true or false

// ====Methods from Map====

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear(); //will delete all the elements from map
console.log(rest);
console.log(rest.size);

//USING ARRAYS AND OBJECTS
rest.clear();
const arr = [1, 2];
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.set(arr, 'array value'));

console.log('===============MAPS ITERATION========================');

//Another way to create a map

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct :)'],
  [false, 'Try again :('],
]);

console.log(question);

console.log(Object.entries(restaurant.openingHours));

// Other way is use the Object entries

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//QUIZ APP
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = +prompt('Your answer');
console.log(question.get(answer === question.get('correct'))); //We can do this cuz the key in question is an Boolean

//Convert map to array
console.log([...question]);
