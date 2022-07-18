import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundScreen() {
  return (
    <>
      <p>404 Not Found</p>
      <Link to='/'>Вернуться на главную</Link>
    </>
  );
}

export default NotFoundScreen;
