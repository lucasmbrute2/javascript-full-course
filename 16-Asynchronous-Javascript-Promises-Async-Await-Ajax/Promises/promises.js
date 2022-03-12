'use strict';

// const request = new XMLHttpRequest(); // Old school method
// request.open('GET', `https://restcountries.com/v3.1/${param}/${country}`);
// request.send();

const getCountryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => console.log(data));
};

getCountryData('brasil');
