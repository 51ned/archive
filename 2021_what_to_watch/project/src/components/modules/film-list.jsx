import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilmCard from './film-card';
import ShowMoreButton from './show-more-button';

import FilmProps from '../../props/film';

function FilmList(props) {
  const {films, listSize} = props;
  const [activeMovieCardId, setActiveMovieCardId] = useState(null);

  const handleMovieCardHover = (id) => {
    setActiveMovieCardId(id);
    return activeMovieCardId;
  };

  return (
    <>
      <div className='catalog__films-list'>
        {
          films.slice(0, listSize).map((film) =>
            (
              <FilmCard
                key={film.id}
                film={film}
                onHover={handleMovieCardHover}
              />
            ),
          )
        }
      </div>

      {(films.length > listSize) && <ShowMoreButton />}

    </>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(FilmProps),
  listSize: PropTypes.number.isRequired,
};

export default FilmList;
