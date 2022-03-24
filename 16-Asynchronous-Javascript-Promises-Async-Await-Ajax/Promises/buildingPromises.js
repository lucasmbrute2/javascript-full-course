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

// Promisifying the Geolocation API

const getPosition = function () {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     resolve(console.log(position));
    //   },
    //   err => reject(console.error(err))
    // );

    // The same thing:

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

function gettingUrl(url) {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`Something was wrong, error: ${response.status}`);
    return response.json();
  });
}

function whereAmI() {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return gettingUrl(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(data => {
      const { country, region } = data;

      console.log(`You are in ${region}, ${country}`);
      return gettingUrl(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(data => {
      const [country] = data;
      console.log(country.name.common);
    })
    .catch(error => console.error(error.message));
}

whereAmI();
