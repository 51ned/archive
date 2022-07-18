import { getRandomArray } from './utils/random-array-from-array';

import { getFilmCardTemplate } from './view/film-card';
import { getFilmDetailsPopupTemplate } from './view/film-details-popup';
import { getFilmsListsTemplate } from './view/films-lists';
import { getMenuTemplate } from './view/menu';
import { getShowMoreButtonTemplate } from './view/show-more-button';
import { getUserRankTemplate } from './view/user-rank';
import { getFooterStatsTemplate } from './view/footer-stats';

import { getUserRating } from './mocks/user-rating';
import { getFilmCardMocks } from './mocks/film-card';
import { getFooterStats } from './mocks/footer-stats';

const MAX_FILMS_NUM = 20;
const MAX_FILMS_TO_RENDER_NUM = 10;
const MAX_FILMS_TO_PRERENDER_NUM = 5;

const films = new Array(MAX_FILMS_NUM).fill().map(() => getFilmCardMocks());
const filmDetails = films[0];
const footerStats = getFooterStats(films);

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector('.header');
render(siteHeader, getUserRankTemplate(getUserRating()));

const siteMain = document.querySelector('.main');
render(siteMain, getMenuTemplate());
render(siteMain, getFilmsListsTemplate());

const siteFooter = document.querySelector('.footer');
render(siteFooter, getFilmDetailsPopupTemplate(filmDetails), 'afterend');
render(siteFooter, getFooterStatsTemplate(footerStats));

const filmsList = siteMain.querySelector('.films-list');
const filmListsCollection = filmsList.querySelectorAll('.films-list__container');
const unsortedFilmsList = filmListsCollection[0];


// render film cards & button logic
const filmsToRender = getRandomArray(films, 0, MAX_FILMS_TO_RENDER_NUM);
const filmsToRenderNum = filmsToRender.length;

if (filmsToRenderNum < MAX_FILMS_TO_PRERENDER_NUM) {
  for (let i = 0; i < filmsToRenderNum; i++) {
    render(unsortedFilmsList, getFilmCardTemplate(films[i]));
  }
} else if (filmsToRenderNum >= MAX_FILMS_TO_PRERENDER_NUM) {
  for (let i = 0; i < MAX_FILMS_TO_PRERENDER_NUM; i++) {
    render(unsortedFilmsList, getFilmCardTemplate(films[i]));
  }
}

const prerenderedFilmsNum = unsortedFilmsList.querySelectorAll('.film-card').length;
const moreFilmsToRenderNum = filmsToRenderNum - prerenderedFilmsNum;

if (moreFilmsToRenderNum) {
  render(filmsList, getShowMoreButtonTemplate());
  const showMoreButton = filmsList.querySelector('.films-list__show-more');
  showMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    for (let i = 0; i < moreFilmsToRenderNum; i++) {
      render(unsortedFilmsList, getFilmCardTemplate(films[i]));
    }
    showMoreButton.remove();
  });
}

const getNonthingToRenderMessage = () => {
  const message = document.createElement('p');
  message.textContent = 'There are no movies in our database';
  unsortedFilmsList.appendChild(message);
};

if (!filmsToRenderNum) {
  getNonthingToRenderMessage();
}

// eslint-disable-next-line no-console
console.log(`сгенерировано фильмов ${filmsToRenderNum}, показано фильмов ${prerenderedFilmsNum}, ещё показать ${moreFilmsToRenderNum}`);
