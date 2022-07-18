import { getRandomInteger } from './random-integer';

const getRandomArrayValue = (inputArray) => {
  const randomIndex = getRandomInteger(0, inputArray.length - 1);
  const randomValue = inputArray[randomIndex];

  return randomValue;
};

export default getRandomArrayValue;
