/// <reference types="react-scripts" />

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './default.module.scss';


function Test(): React.ReactNode {
  useEffect(() => {
    console.log(123)
  }, []);

  return (
    <div className={styles['wrapper']}>
      <Link to={process.env['PUBLIC_URL'] + '/products'}>products</Link>
      <Link to={process.env['PUBLIC_URL'] + '/sign-in'}>sign in</Link>
    </div>
  );
}

export default Test;