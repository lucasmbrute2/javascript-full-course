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

  console.log(geoCodeResponse);
  if (geoCodeResponse.status !== 200) throw new Error('Deu erro!');

  const geoCodeBody = await geoCodeResponse.json();
  return geoCodeBody;
};

const whereAmI = async () => {
  // Async keyword make returns a promise automatically

  try {
    const geoCodeBody = await getGeoLocation();
    const response = await fetch(
      // Allows the await keyword
      `https://restcountries.com/v3.1/name/${geoCodeBody.country}`
    );
    if (!response.ok) throw new Error('Deu erro!');
    const [body] = await response.json();
    renderCountry(body);
    return `You are in ${geoCodeBody.city}, ${geoCodeBody.country}`;
  } catch (err) {
    console.error(`${err.message}`);
  }
};
// whereAmI();

// TRY CATCH
// JS will try to execute the block and any error that occurs is caught in catch
try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  console.log(err);
}

// Bahavior of async functions

console.log('1: Will get location');
// const city = whereAmI(); // Returns a promise
// console.log(city);
whereAmI().then(city => console.log(city));
console.log('3: Finished getting location');
