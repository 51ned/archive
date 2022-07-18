import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import AddReviewScreen from '../screens/add-review';
import FilmScreen from '../screens/film';
import MainScreen from '../screens/main';
import MyListScreen from '../screens/my-list';
import NotFoundScreen from '../screens/not-found';
import PlayerScreen from '../screens/player';
import SighnInScreen from '../screens/sighn-in';

import FilmProps from '../../props/film';
import ReviewProps from '../../props/review';

import getRandomArrayValue from '../../utils/random-value-from-array';
import getFilmById from '../../utils/film-by-id';

import { AppRoute } from '../../const';

function App(props) {
  const {films, reviews} = props;
  const promo = getRandomArrayValue(films);

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <MainScreen
            films = {films}
            reviews = {reviews}
            promo={promo}
          />
        </Route>

        <Route exact path={AppRoute.ADD_REVIEW}
          render={({match}) => {
            const film = getFilmById(match.params.id);
            return film ?
              <AddReviewScreen
                film={film}
              /> :
              <NotFoundScreen />;
          }}
        />

        <Route exact path={AppRoute.FILM}
          render={({match}) => {
            const film = getFilmById(match.params.id);
            return film ?
              <FilmScreen
                film={film}
                films={films}
              /> :
              <NotFoundScreen />;
          }}
        />

        <Route exact path={AppRoute.MY_LIST}>
          <MyListScreen
            films={films}
          />
        </Route>

        <Route exact path={AppRoute.PLAYER}
          render={({match}) => {
            const film = getFilmById(match.params.id);
            return film ?
              <PlayerScreen
                name={film.name}
                videoLink={film.videoLink}
                runTime={film.runTime}
              /> :
              <NotFoundScreen />;
          }}
        />

        <Route exact path={AppRoute.SIGHN_IN}>
          <SighnInScreen />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(FilmProps),
  reviews: PropTypes.arrayOf(ReviewProps),
};

export default App;
