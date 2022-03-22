'use strict';

const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lotter draw is happening!');

  setTimeout(() => {
    if (Math.random() >= 0.5) return resolve('You won!!!!'); // set the Promise as "fullfield"

    reject(new Error("I'm sorry, you lose :(")); // set the Promise as "rejected"
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = seconds => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waiter of 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x)); // Will resolve immediatly
Promise.reject(new Error('Bulting a manually rejected promise')).catch(err =>
  console.error(err)
);
