import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../modules/logo';
import UserBlock from '../modules/user-block';
import FilmList from '../modules/film-list';
import FilmTabs from '../modules/film-tabs';
import Footer from '../modules/footer';

import FilmProps from '../../props/film';

import { FilmListSize } from '../../const';

function FilmScreen({film, films}) {
  const {
    id,
    name,
    posterImage,
    backgroundImage,
    backgroundColor,
    rating,
    level,
    scoresCount,
    description,
    director,
    starring,
    genre,
    released,
  } = film;
  const history = useHistory();

  const handlePlayButtonClick = () => {
    history.push(`/player/${id}`);
  };

  return (
    <>
      <section className="movie-card movie-card--full"
        style={({backgroundColor})}
      >
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <header className='page-header film-card__head'>
            <Logo />
            <UserBlock />
          </header>

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{genre}</span>
                <span className='film-card__year'>{released}</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'
                  onClick={handlePlayButtonClick}
                >
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="btn film-card__button" to={`/films/${id}/review`}>
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className='film-card__desc'>
              <FilmTabs />

              <div className='film-rating'>
                <div className='film-rating__score'>{rating}</div>
                <p className='film-rating__meta'>
                  <span className='film-rating__level'>{level}</span>
                  <span className='film-rating__count'>{scoresCount}</span>
                </p>
              </div>

              <div className='film-card__text'>
                <p>{description}</p>
                <p className='film-card__director'><strong>Director: {director}</strong></p>
                <p className='film-card__starring'><strong>Starring: {starring.join(', ')}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>
          <FilmList
            films={films.filter((el) => el.genre === genre).slice(0, FilmListSize.EXTRA)}
            listSize={FilmListSize.EXTRA}
          />
        </section>

        <Footer />
      </div>
    </>
  );
}

FilmScreen.propTypes = {
  films: PropTypes.arrayOf(FilmProps).isRequired,
  film: FilmProps.isRequired,
};

export default FilmScreen;