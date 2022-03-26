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

  try {
    const [response1] = await getJSON(
      `https://restcountries.com/v3.1/name/${country1}`
    );
    const [response2] = await getJSON(
      `https://restcountries.com/v3.1/name/${country2}`
    );
    const [response3] = await getJSON(
      `https://restcountries.com/v3.1/name/${country3}`
    );

    console.log(response1.capital, response2.capital, response3.capital);
  } catch (err) {
    console.error(err);
  }
};
getCountries('brasil', 'germany', 'argentina');
