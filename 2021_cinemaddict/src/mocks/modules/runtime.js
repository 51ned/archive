import { getRandomInteger } from '../../utils/random-integer';

const MIN_HOURS = 1;
const MAX_HOURS = 3;
const MIN_MINUTES = 1;
const MAX_MINUTES = 59;

export const getRuntime = () => {
  const hours = getRandomInteger(MIN_HOURS, MAX_HOURS);
  const minutes = getRandomInteger(MIN_MINUTES, MAX_MINUTES);

  return {
    hours,
    minutes,
  };
};
