export function renderCountriesInfo(countries) {
  return countries
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
}
