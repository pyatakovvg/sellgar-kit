
import React from 'react';

import Header from './Header';

import styles from './default.module.scss';


interface IProps {
  children: React.ReactHTMLElement<any>
}


function NavigateWrapper({ children }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header />
      </header>
      <section className={styles['content']}>
        {React.Children.map(children, (child) => (
          React.cloneElement(child)
        )) }
      </section>
      <footer className={styles['footer']}>

      </footer>
    </div>
  );
}

export default NavigateWrapper;
