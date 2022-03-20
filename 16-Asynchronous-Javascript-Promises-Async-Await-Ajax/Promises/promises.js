'use strict';

// const request = new XMLHttpRequest(); // Old school method
// request.open('GET', `https://restcountries.com/v3.1/${param}/${country}`);
// request.send();

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, className = '') => {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${
      data.languages[Object.keys(data.languages)]
    }</p>
    <p class="country__row"><span>💰</span>${
      data.currencies[Object.keys(data.currencies)].name
    }</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = (url, error = 'Something went wrong') => {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${error} ${response.status}`); // This "throw" imediatly rejects the promise and returns

    return response.json();
  });
};

const getCountryData = country => {
  getJSON(`https://restcountries.com/v3.1/name/${country}`)
    .then(data => {
      renderCountry(data[0]);
      console.log(data[0]);

      if (!data[0].borders) throw new Error('No neighbour found!');

      const neighbour = data[0].borders[0];
      // Country 2
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`Estourou foi tudo: ${err}`); // Throw makes the promise error propagates until here
      renderError(`Somenthing went wrong: ${err.message}`);
    })
    .finally(() => {
      // This method always is happen

      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
