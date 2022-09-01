export default function renderCountriesList(countries) {
  const markup = countries
    .map(({ flags, name, capital, population, languages }) => {
      return `  
        <li>
            <img src="{${flags.svg}} width="40"/> 
            <p class="country__title">${name.official}</p>
            <p><b>Capital</b>: ${capital}</p>
            <p><b>Population</b>: ${population}</p>
            <p><b>Languages</b>: ${Object.values(languages)}</p>
        </li>
        `;
    })
    .join('');
  refs.countryListEl.innerHTML = markup;
}
