'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const ajaxCall = (country, param = 'name') => {
  const request = new XMLHttpRequest(); // Old school method
  request.open('GET', `https://restcountries.com/v3.1/${param}/${country}`);
  request.send();
  return request;
};

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
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX Call country 1
  const request = ajaxCall(country);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);

    // Render country 1

    // Get neighbour country(2)
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // AJAX Call country 2
    const request2 = ajaxCall(neighbour, 'alpha');

    request2.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      renderCountry(data, 'neighbour');
    });
  });
};

getCountryAndNeighbour('brasil');
getCountryAndNeighbour('usa');
getCountryAndNeighbour('mexico');
getCountryAndNeighbour('germany');
getCountryAndNeighbour('canada');
