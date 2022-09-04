import Notiflix from 'notiflix';

export function tooManyMatches() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.',
    {
      timeout: 2000,
    }
  );
}
