import { getRandomInteger } from './random-integer';

export const getRandomArray = (inputArray, minValue, maxValue) => {
  const getRandomValue = () => getRandomInteger(0, inputArray.length - 1);
  const numOfValues = getRandomInteger(minValue, maxValue);
  const outputArray = [];

  for (let i = 0; i < numOfValues; i++) {
    outputArray.push(inputArray[getRandomValue()]);
  }

  return outputArray;
};
