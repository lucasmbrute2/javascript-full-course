'use strict';

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
  countriesContainer.style.opacity = 1;
};

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getGeoLocation = async () => {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  const geoCodeResponse = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json`
  );
  const geoCodeBody = await geoCodeResponse.json();
  return geoCodeBody;
};

const whereAmI = async () => {
  // Async keyword make returns a promise automatically

  const geoCodeBody = await getGeoLocation();
  console.log(geoCodeBody);

  const response = await fetch(
    // Allows the await keyword
    `https://restcountries.com/v3.1/name/${geoCodeBody.country}`
  );
  const [body] = await response.json();
  renderCountry(body);
};
whereAmI();

// TRY CATCH
try {
  let y = 1;
  const x = 2;
  y = 3;
} catch (err) {
  console.log(err);
}
// JS will try to execute the block and any error that occurs is caught in catch
