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
