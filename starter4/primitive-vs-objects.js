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
