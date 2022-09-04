import Notiflix from 'notiflix';

export function onFetchError() {
  Notiflix.Notify.failure('Oops, there is no country with that name', {
    timeout: 2000,
  });
}
