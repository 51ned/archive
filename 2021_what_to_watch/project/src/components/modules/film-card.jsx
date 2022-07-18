import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import FilmProps from '../../props/film';

function FilmCard({film, onHover}) {
  const {id, name, previewImage} = film;
  const history = useHistory();

  const handleMouseEnter = () => {
    onHover(id);
  };

  const handleMouseLeave = () => {
    onHover(null);
  };

  const handleCardClick = () => {
    history.push(`/films/${id}`);
  };

  return (
    <article className='small-film-card catalog__films-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='small-film-card__image'
        onClick={handleCardClick}
      >
        <img
          src={previewImage}
          alt={name}
          width='280' height='175'
        />
      </div>
      <h3 className='small-film-card__title'>
        <Link className='small-film-card__link' to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: FilmProps.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default FilmCard;
