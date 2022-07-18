import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

function Logo(props) {
  return (
    <div className='logo'>
      <Link to='/' className={props.classes}>
        <span className='logo__letter logo__letter--1'>W</span>
        <span className='logo__letter logo__letter--2'>T</span>
        <span className='logo__letter logo__letter--3'>W</span>
      </Link>
    </div>
  );
}

Logo.defaultProps = {classes: 'logo__link'};
Logo.propTypes = {classes: string};

export default Logo;
