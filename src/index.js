import './css/styles.css';
import _debounce, { debounce } from 'debounce';
import Notiflix from 'notiflix';
// import renderCountriesList from './renderCountriesList.js';
// import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryInfoContainer: document.querySelector('.country-info'),
  countryListEl: document.querySelector('.country-list'),
};

// console.log(refs.inputEl);

refs.inputEl.addEventListener('input', debounce(onInputClick, 300));

function onInputClick(e) {
  const searchQuery = refs.inputEl.value;

  fetchCountries(searchQuery).then(renderCountriesList).catch(onFetchError);
  // .finally(() => refs.inputEl.value.reset());
}

const BASE_URL = 'https://restcountries.com/v3.1/name';

function fetchCountries(name) {
  return fetch(`${BASE_URL}/${name}`).then(response => {
    return response.json();
  });
}

function renderCountriesList(countries) {
  const markup = countries
    .map(({ flags, name, capital, population, languages }) => {
      return `  
        <div class="country-card">
            <img src="${flags.svg}" width="100"/> 
            <p class="country__title">${name.official}</p>
        </div>
            <p class="country-info"><b>Capital</b>: ${capital}</p>
            <p class="country-info"><b>Population</b>: ${population}</p>
            <p class="country-info"><b>Languages</b>: ${Object.values(languages)
              .map(language => `${language}`)
              .join(', ')}</p>
        `;
    })
    .join('');
  refs.countryListEl.innerHTML = markup;
}

function onFetchError() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
