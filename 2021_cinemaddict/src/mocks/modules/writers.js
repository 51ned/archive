import { writers } from '../consts/writers';
import { getRandomValuesString } from '../../utils/random-string-from-array';

export const getWriters = () => {
  return getRandomValuesString(writers, 1, 3, ', ');
};
