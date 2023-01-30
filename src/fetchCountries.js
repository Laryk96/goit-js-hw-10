const baseUrl = 'https://restcountries.com';
const filter = 'fields=name,capital,population,flags,languages';

function fetchCountries(name) {
  const url = `${baseUrl}/v3.1/name/${name}?${filter}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response);
    }

    return response.json();
  });
}

async function fetchCountriesAsyc(name) {
  const url = `${baseUrl}/v3.1/name/${name}?${filter}`;

  const response = await fetch(url);
  return await response.json();

  // в одну строку
  //  return (await fetch(url)).json();
}

export { fetchCountries, fetchCountriesAsyc };
