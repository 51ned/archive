import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../modules/logo';
import UserBlock from '../modules/user-block';
import FilmList from '../modules/film-list';
import Footer from '../modules/footer';

import FilmProps from '../../props/film';

import { FilmListSize } from '../../const';

function MyListScreen({films}) {
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo />
        <h1 className='page-title user-page__title'>My list</h1>
        <UserBlock />
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        <FilmList
          films={films.filter((film) => film.isFavorite)}
          listSize={FilmListSize.REGULAR}
        />
      </section>

      <Footer />
    </div>
  );
}

MyListScreen.propTypes = {
  films: PropTypes.arrayOf(FilmProps),
};

export default MyListScreen;
