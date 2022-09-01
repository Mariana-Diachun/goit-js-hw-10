import './css/styles.css';
import renderCountriesList from './renderCountriesList.js';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryInfoContainer: document.querySelector('.country-info'),
  countryListEl: document.querySelector('.country-list'),
};

refs.inputEl.addEventListener('input', onInputClick);

function onInputClick(e) {
  const searchQuery = refs.inputEl.value;
  fetchCountries(searchQuery)
    .then(renderCountriesList)
    .catch(error => console.log(error));
}

// function fetchCountries(name) {
//     return fetch('https://restcountries.com/v3.1/name/${name}')
//         .then((response) => {
//             if (!response.ok) {
//             throw new Error(response.status);
//             }
//         return response.json();
//     })
// };

// function renderCountriesList(){
//     const markup = countries.map((country) => {
//         return `
//         <li>
//             <img src="${country.flags.svg} "/>
//             <p>${country.name.official}</p>
//             <p><b>Capital</b>: ${country.capital}</p>
//             <p><b>Population</b>: ${country.population}</p>
//             <p><b>Languages</b>: ${country.languages}</p>
//         </li>
//         `
//     }).join("");
//     refs.countryListEl.innerHTML = markup;
// }
