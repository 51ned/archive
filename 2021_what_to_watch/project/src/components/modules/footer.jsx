import React from 'react';

import Logo from './logo';
import Copyright from './copyright';

function Footer() {
  return (
    <footer className='page-footer'>
      <Logo classes='logo__link logo__link--light' />
      <Copyright />
    </footer>
  );
}

export default Footer;
