'use strict';

// Rendering 3 countries data without caring about the sort of arrival in promises.

const getJSON = (url, error = 'Something went wrong') => {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${error} ${response.status}`); // This "throw" imediatly rejects the promise and returns

    return response.json();
  });
};

const getCountries = async (...countries) => {
  const [country1, country2, country3] = countries;

  // This is a bad way, cuz all the promises will depends of each one other
  try {
    /*const [response1] = await getJSON(
      `https://restcountries.com/v3.1/name/${country1}`
    );
    const [response2] = await getJSON(
      `https://restcountries.com/v3.1/name/${country2}`
    );
    const [response3] = await getJSON(
      `https://restcountries.com/v3.1/name/${country3}`
    );*/

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${country1}`),
      getJSON(`https://restcountries.com/v3.1/name/${country2}`),
      getJSON(`https://restcountries.com/v3.1/name/${country3}`),
    ]);
    console.log(data.map(country => country[0].capital[0])); // If one of the promises are reject, the whole promise.all actually rejects as well

    // console.log(response1.capital, response2.capital, response3.capital);
  } catch (err) {
    console.error(err);
  }
};
getCountries('brasil', 'germany', 'argentina');

// PROMISE COMBINATORS
