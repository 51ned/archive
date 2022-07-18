import { sentences } from '../consts/sentences';
import { getRandomValuesString } from '../../utils/random-string-from-array';

const MIN_NUM_OF_SENTENCES = 1;
const MAX_NUM_OF_SENTENCES = 5;

const SHORT_DESCRIPTION_MAX_LENGTH = 139;

export const getDescription = () => {
  const descriptionFull = getRandomValuesString(sentences, MIN_NUM_OF_SENTENCES, MAX_NUM_OF_SENTENCES, ' ');

  const descriptionShort = () => {
    if (descriptionFull.length <= SHORT_DESCRIPTION_MAX_LENGTH) {
      return descriptionFull;
    } else {
      return descriptionFull.substring(0, SHORT_DESCRIPTION_MAX_LENGTH) + '…';
    }
  };

  return {
    full: descriptionFull,
    short: descriptionShort(),
  };
};
