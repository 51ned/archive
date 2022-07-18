import { userRatings } from './consts/user-rating';
import { getRandomArrayValue } from '../utils/random-value-from-array';

export const getUserRating = () => {
  return {
    rating: getRandomArrayValue(userRatings),
    avatar: 'images/bitmap@2x.png',
  };
};
