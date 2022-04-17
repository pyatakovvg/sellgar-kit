
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './default.module.scss';


function Test(): React.ReactNode {
  const location: any = useLocation();

  return (
    <div className={styles['wrapper']}>
      <Link to={process.env['PUBLIC_URL'] + '/products'}>products</Link>
      <Link to={process.env['PUBLIC_URL'] + '/sign-in'}>sign in</Link>
      <div>
        <p>УУУпс! Что-то пошло не так!</p>
        <pre>{ location['state']['stack'] }</pre>
      </div>
    </div>
  );
}

export default Test;