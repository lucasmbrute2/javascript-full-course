'use strict';

const lotteryPromise = new Promise((resolve, reject) => {
  if (Math.random() >= 0.5) return resolve('You won!!!!'); // set the Promise as "fullfield"

  reject("I'm sorry, you lose :("); // set the Promise as "rejected"
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
