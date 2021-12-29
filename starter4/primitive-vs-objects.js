'use strict';

let age = 30;
let oldAge = 30;
age = 31;
console.log({ age }, { oldAge }); // in this case the age will return 31

const me = {
  name: 'Lucas',
  age: 21,
};

const friend = me;
friend.age = 27;
console.log({ friend }, { me }); // in this case the age will return 27 in both ('me' and 'friend')

//EXPLANATION
//========================================================

//OLHAR ANOTAÇÕES NA UDEMY, EXPLICAÇÃO SOBRE OS TIPOS

//Basicamente, é alterado nas duas variáveis, pois o valor é alterado no Heap, e  mantido para as duas variáveis, ou seja, o ''address' não se altera, mesmo que definido com CONST. Ou seja variáveis definidas com CONST são imutáveis apenas para valores primitivos.

//PRACTICE

//Primitive types
let lastName = 'Dantas';
let oldLastName = lastName;
lastName = 'Falci';

console.log({ lastName }, { oldLastName });

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

let marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//Making this work with Reference values

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const jessicaCopy = Object.assign({}, jessica2); // This method merge 2 objects and then return a new one.
jessicaCopy.lastName = 'Davis';
console.log(jessicaCopy, jessica2);

//jessicaCopy is now a copy of jessica2, a new object was in fact created in the Heap, and jessicaCopy is now poiting to that object.

// THE PROBLEM IS SOLVED BUT... there is a one problem. The object assign only works in the first level. Its a shallow copy, whats mean, if we have an object inside the object, this inner object will still be the same. Both the variables are b
