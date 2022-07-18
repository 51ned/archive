import films from '../mocks/films';

const getFilmById = (filmId) => {
  if (isNaN(parseInt(filmId, 8))) {
    return undefined;
  }
  return films.find((film) => film.id === parseInt(filmId, 8));
};

export default getFilmById;
