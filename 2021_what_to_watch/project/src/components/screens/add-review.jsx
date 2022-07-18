import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../modules/logo';
import UserBlock from '../modules/user-block';
import AddCommentForm from '../modules/add-comment-form';

import FilmProps from '../../props/film';

function AddReviewScreen({film}) {
  const {id, name, posterImage, backgroundImage, backgroundColor, rating} = film;

  return (
    <section className='film-card film-card--full'
      style={({backgroundColor})}
    >
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <Logo />
          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <Link to={`/films/${id}`} className='breadcrumbs__link'>{name}</Link>
              </li>
              <li className='breadcrumbs__item'>
                <Link to='' className='breadcrumbs__link'>Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img src={posterImage} alt={`${name} poster`} width='218' height='327' />
        </div>
      </div>

      <div className='add-review'>
        <AddCommentForm
          rating={rating}
        />
      </div>
    </section>
  );
}

AddReviewScreen.propTypes = {
  film: FilmProps.isRequired,
};

export default AddReviewScreen;
