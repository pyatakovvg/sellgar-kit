
import { Header } from '@library/kit';

import React from 'react';

import Aside from './Aside';
import Products from './Products';

import styles from './default.module.scss';


function Test(): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header>Молочные продукты</Header>
      </header>
      <section className={styles['content']}>
        <aside className={styles['aside']}>
          <Aside />
        </aside>
        <section className={styles['products']}>
          <Products />
        </section>
      </section>
    </section>
  );
}

export default Test;