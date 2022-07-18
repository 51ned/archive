import { getRandomInteger } from '../../utils/random-integer';

const FIST_MOUNTH_DAY = 1;
const LAST_MOUNTH_DAY = 31;

export const getDay = () => {
  return getRandomInteger(FIST_MOUNTH_DAY, LAST_MOUNTH_DAY);
};
