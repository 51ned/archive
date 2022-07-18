import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../modules/logo';
import UserBlock from '../modules/user-block';
import GenreList from '../modules/genre-list';
import FilmList from '../modules/film-list';
import Footer from '../modules/footer';

import FilmProps from '../../props/film';

import { FilmListSize } from '../../const';

function MainScreen(props) {
  const {films, promo} = props;
  const {id, name, posterImage, backgroundImage, genre, released} = promo;
  const history = useHistory();

  const handlePlayButtonClick = () => {
    history.push(`/player/${id}`);
  };

  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header film-card__head'>
          <Logo />
          <UserBlock />
        </header>

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img src={posterImage} alt={`${name} poster`} width='218' height='327' />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{genre}</span>
                <span className='film-card__year'>{released}</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'
                  onClick={handlePlayButtonClick}
                >
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>
          <GenreList />
          <FilmList
            films={films}
            listSize={FilmListSize.REGULAR}
          />
        </section>

        <Footer />
      </div>
    </>
  );
}

MainScreen.propTypes = {
  films: PropTypes.arrayOf(FilmProps),
  promo: FilmProps,
};

export default MainScreen;