import { authors } from './consts/authors';
import { comments } from './consts/comments';
import { emoji } from './consts/emoji';
import { months } from './consts/months';

import { getDay } from './modules/days';
import { getYear } from './modules/years';
import { getRuntime } from './modules/runtime';

import { getRandomInteger } from '../utils/random-integer';
import { getRandomArrayValue } from '../utils/random-value-from-array';

const MIN_COMMENTS_NUM = 0;
const MAX_COMMENTS_NUM = 5;

const runtime = getRuntime();

const getDate = () => {
  return `${getDay()} ${getRandomArrayValue(months)} ${getYear()} ${runtime.hours}:${runtime.minutes}`;
};

const getComment = () => {
  return {
    author: getRandomArrayValue(authors),
    comment: getRandomArrayValue(comments),
    date: getDate(),
    emoji: getRandomArrayValue(emoji),
  };
};

export const getCommentsList = () => {
  return new Array(getRandomInteger(MIN_COMMENTS_NUM, MAX_COMMENTS_NUM)).fill().map(() => getComment());
};
