import { getRandomInteger } from './random-integer';

export const getRandomArrayValue = (inputArray) => {
  const randomIndex = getRandomInteger(0, inputArray.length - 1);
  const randomValue = inputArray[randomIndex];

  return randomValue;
};
