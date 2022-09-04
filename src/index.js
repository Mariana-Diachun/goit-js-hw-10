import './css/styles.css';
import _debounce, { debounce } from 'debounce';
import { fetchCountries } from './fetchCountries.js';
import { refs } from './refs.js';
import { renderCountriesList } from './renderCountriesList.js';
import { renderCountriesInfo } from './renderCountriesInfo.js';
import { onFetchError } from './onFetchError.js';
import { tooManyMatches } from './tooManyMatches.js';

const DEBOUNCE_DELAY = 300;

refs.inputEl.addEventListener('input', _debounce(onInputClick, DEBOUNCE_DELAY));

function onInputClick(evt) {
  evt.preventDefault();
  const searchQuery = evt.target.value.trim();
  if (searchQuery === '') {
    refs.countryListEl.innerHTML = '';
    refs.countryInfoContainer.innerHTML = '';
  }
  fetchCountries(searchQuery).then(renderCountryCard).catch(onFetchError);
}

function renderCountryCard(countries) {
  if (countries.length === 1) {
    refs.countryListEl.innerHTML = '';
    const countryCard = renderCountriesInfo(countries);
    refs.countryInfoContainer.innerHTML = countryCard;
  } else if (countries.length <= 10) {
    refs.countryInfoContainer.innerHTML = '';
    const markupList = renderCountriesList(countries);
    refs.countryListEl.innerHTML = markupList;
  } else {
    tooManyMatches();
  }
}
