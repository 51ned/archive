import { actors } from '../consts/actors';
import { getRandomValuesString } from '../../utils/random-string-from-array';

const MIN_ACTORS_NUM = 1;
const MAX_ACTORS_NUM = 3;

export const getActors = () => {
  return getRandomValuesString(actors, MIN_ACTORS_NUM, MAX_ACTORS_NUM, ', ');
};
