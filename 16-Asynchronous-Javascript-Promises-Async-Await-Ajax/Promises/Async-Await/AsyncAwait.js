'use strict';

const whereAmI = async country => {
  // Async keyword make returns a promise automatically

  const response = await fetch(
    // Allows the await keyword
    `https://restcountries.com/v3.1/name/${country}`
  );
  const body = await response.json();
  console.log(response);
};
whereAmI('brazil');
