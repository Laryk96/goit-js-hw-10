import './css/styles.css';
import { refs } from './refs';
import { fetchCountries } from './fetchCountries';
import { renderContriesList, renderCountriesCard } from './renderHTML';
import { information, failure } from './notification';

import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

refs.serchField.addEventListener(
  'keydown',
  debounce(onSearchField, DEBOUNCE_DELAY)
);

function onSearchField(e) {
  e.preventDefault();

  const inputName = e.target.value;

  if (inputName.trim() === '') {
    return (refs.list.innerHTML = '');
  }

  fetchCountries(inputName)
    .then(countries => {
      clearHTML();
      const renderResult = checkAmountContries(countries);

      renderResult(countries);
    })
    .catch(error => {
      console.log(error);
      failure();
    });
}

function checkAmountContries(countries) {
  const amount = countries.length;
  let result = null;

  if (amount > 10) {
    return information;
  }
  if (amount >= 2 && amount <= 10) {
    result = renderContriesList;
  }
  if (amount === 1) {
    result = renderCountriesCard;
  }

  return result;
}

function clearHTML() {
  refs.list.innerHTML = '';
  refs.container.innerHTML = '';
}
