'use strict';

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking(); // Like in past sections, we are storing the return of 'secureBooking' in a variable called 'book'
booker();
booker();
booker();
booker();
booker();

//================CLOSURE===============

//**Closure makes a function remember all the variables that existed at the functions birthplace

//**Closure makes sure that a function does never lose connection to the variables that existed at the function's birthplace.

//**Apesar da 'secureBooking' já ter sido retornada (ou seja, já ter sido retirada do Call Stack) a Closure faz com que a função 'booker' continue tendo acesso ao ambiente de variáveis da função 'secureBooking'

//WE DONT NEED RETURN A FUNCTION FROM ANOTHER FUNCTION IN ORDER TO CREATE A CLORUSE.

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f(); //Perceba que mesmo a função "g" já tendo sido retornada, nós conseguimos acessar o ambiente de variáveis atráves da função "f", por causa da Closure.

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

console.log('==================Re-assigning F function=============');

h(); //Aqui nós estamos atribuindo outro valor
f();

//Another example

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); //A única forma dessas variáves ainda terem acesso as variáveis parentes é graças ao Closure.

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
//Proving that Closure have priority about over the scope chain
const perGroup = 1000;
boardPassengers(180, 3);
