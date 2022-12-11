import { refs } from './refs';

function renderContriesList(countries) {
  const markup = countries
    .map(({ name, flags }) => {
      return `<li class="item" ><img class="flags" src="${flags.svg}" width="30">${name.official}</li>`;
    })
    .join('');

  refs.list.insertAdjacentHTML('beforeend', markup);
}

function renderCountriesCard(countries) {
  const [{ name, capital, population, flags, languages }] = countries;
  const leng = Object.values(languages);

  const markup = `
    <p class="countrie"><img class="flags" src="${flags.svg}" width="30">${name.official}</p>
    <ul class="countrie-datalist">
    <li class ="item-text"><span class="label">Capital: </span>${capital}</li>
    <li class ="item-text"><span class="label">Population: </span>${population}</li>
    <li class ="item-text"><span class="label">Languages: </span>${leng}</li>
    </ul>`;

  refs.container.insertAdjacentHTML('beforeend', markup);
}

export { renderContriesList, renderCountriesCard };
