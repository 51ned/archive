const AppRoute = {
  ADD_REVIEW: '/films/:id/review',
  FILM: '/films/:id',
  MY_LIST: '/mylist',
  NOT_FOUND: '/404',
  PLAYER: '/player/:id',
  SIGHN_IN: '/login',
};

const CommentLength = {
  MIN: 10,
  MAX: 50,
};

const FilmListSize = {
  REGULAR: 20,
  EXTRA: 4,
};

const GENRES = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

const RatingValue = {
  MIN: 0,
  MAX: 10,
};

const Tabs = ['Overview', 'Details', 'Reviews'];

export {
  AppRoute,
  CommentLength,
  FilmListSize,
  GENRES,
  RatingValue,
  Tabs
};
