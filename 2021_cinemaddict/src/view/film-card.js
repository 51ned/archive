const activeClassRender = (bln) => bln ? 'film-card__controls-item--active' : '';

export const getFilmCardTemplate = (film) => {
  return `
    <article class='film-card'>
      <h3 class='film-card__title'>${film.title}</h3>
      <p class='film-card__rating'>${film.rank}</p>
      <p class='film-card__info'>
        <span class='film-card__year'>${film.year}</span>
        <span class='film-card__duration'>${film.runtime.hours}h ${film.runtime.minutes}m</span>
        <span class='film-card__genre'>${film.genre}</span>
      </p>
      <img src='./images/posters/${film.poster}' alt='' class='film-card__poster'>
      <p class='film-card__description'>${film.descriptionShort}</p>
      <a class='film-card__comments'>${film.numOfComments} comments</a>
      <div class='film-card__controls'>
        <button class='film-card__controls-item button film-card__controls-item--add-to-watchlist ${activeClassRender(film.isAddedToWatchlist)}' type="button"' type='button'>Add to watchlist</button>
        <button class='film-card__controls-item button film-card__controls-item--mark-as-watched ${activeClassRender(film.isMarkedAsViewed)}' type='button'>Mark as watched</button>
        <button class='film-card__controls-item button film-card__controls-item--favorite ${activeClassRender(film.isMarkedAsFavorite)}' type='button'>Mark as favorite</button>
      </div>
    </article>
  `;
};
