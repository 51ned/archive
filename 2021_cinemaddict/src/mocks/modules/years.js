import { getRandomInteger } from '../../utils/random-integer';

const EARLIEST_YEAR = 1895;
const LATEST_YEAR = 2021;

export const getYear = () => {
  const year = getRandomInteger(EARLIEST_YEAR, LATEST_YEAR);

  return year;
};
