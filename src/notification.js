import Notiflix from 'notiflix';

function information() {
  Notiflix.Notify.info(
    '"Too many matches found. Please enter a more specific name."'
  );
}

function failure() {
  return Notiflix.Notify.failure('Oops, there is no country with that name');
}

export { information, failure };
