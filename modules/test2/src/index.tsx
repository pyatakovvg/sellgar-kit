/// <reference types="react-scripts" />

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './default.module.scss';


function Test(): React.ReactNode {
  return (
    <div className={styles['wrapper']}>
      <Link to={process.env['PUBLIC_URL'] + '/products'}>products</Link>
      <Link to={process.env['PUBLIC_URL'] + '/sign-in'}>sign in</Link>
      <div>
        <p>Protected module</p>
      </div>
    </div>
  );
}

export default Test;