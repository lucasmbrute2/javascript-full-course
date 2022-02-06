'use strict';

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//Making a function be called only once

(function () {
  console.log('THIS will never run again');
})(); //Immediately Invoked Function Expression

//Arrow Function
(() => console.log('THIS also will never run again'))();

//To make a variable private in ES6

{
  const isPrivate = 23;
}
console.log(isPrivate);
