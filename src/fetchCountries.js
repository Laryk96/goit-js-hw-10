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

export { fetchCountries };
