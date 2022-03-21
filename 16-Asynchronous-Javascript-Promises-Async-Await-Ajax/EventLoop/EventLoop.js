'use strict';

console.log('Test start'); // first
setTimeout(() => console.log('0 sec timer'), 0); // quarto
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // terceiro

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000; i++) {}
  console.log(res);
});
console.log('Test end'); // second

// Notice that setTimout will be resolved only after the "Resolved promise 2" is done!
