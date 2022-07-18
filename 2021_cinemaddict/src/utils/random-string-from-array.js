import { getRandomInteger } from './random-integer';

export const getRandomValuesString = (inputArray, minValue, maxValue, separator) => {
  const getRandomValue = () => getRandomInteger(0, inputArray.length - 1);
  const numOfValues = getRandomInteger(minValue, maxValue);
  const outputArray = [];

  for (let i = 0; i < numOfValues; i++) {
    outputArray.push(inputArray[getRandomValue()]);
  }

  const outputString = outputArray.join(separator);

  return outputString;
};
