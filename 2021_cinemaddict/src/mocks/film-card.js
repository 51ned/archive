import { directors } from './consts/directors';
import { ages } from './consts/ages';
import { countries } from './consts/countries';
import { genres } from './consts/genres';
import { months } from './consts/months';
import { posters } from './consts/posters';
import { titles } from './consts/titles';

import { getRandomInteger } from '../utils/random-integer';
import { getRandomArrayValue } from '../utils/random-value-from-array';

import { getID } from './modules/id';
import { getRank } from './modules/rank';
import { getYear } from './modules/years';
import { getRuntime } from './modules/runtime';
import { getDescription } from './modules/description';
import { getWriters } from './modules/writers';
import { getActors } from './modules/actors';
import { getDay } from './modules/days';

import { getCommentsList } from './comment.js';

export const getFilmCardMocks = () => {
  return {
    id: getID(),
    poster: getRandomArrayValue(posters),
    title: getRandomArrayValue(titles),
    rank: getRank(),
    year: getYear(),
    runtime: getRuntime(),
    genre: getRandomArrayValue(genres),
    descriptionShort: getDescription().short,
    descriptionFull: getDescription().full,
    numOfComments: getCommentsList().length,
    director: getRandomArrayValue(directors),
    country: getRandomArrayValue(countries),
    writers: getWriters(),
    actors: getActors(),
    age: getRandomArrayValue(ages),
    day: getDay(),
    month: getRandomArrayValue(months),
    isAddedToWatchlist: Boolean(getRandomInteger()),
    isMarkedAsViewed: Boolean(getRandomInteger()),
    isMarkedAsFavorite: Boolean(getRandomInteger()),
  };
};
