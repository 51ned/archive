import React from 'react';
import { Link } from 'react-router-dom';

import { Tabs } from '../../const';

function FilmTabs() {
  const activeTab = 'Details';

  return (
    <nav className='film-nav film-card__nav'>
      <ul className='film-nav__list'>
        {
          Tabs.map((tab) =>
            (
              <li className={`film-nav__item ${(activeTab === tab ? 'movie-nav__item--active' : '')}`}
                key={tab}
              >
                <Link to='/' className='film-nav__link'>{tab}</Link>
              </li>
            ),
          )
        }
      </ul>
    </nav>
  );
}

export default FilmTabs;
