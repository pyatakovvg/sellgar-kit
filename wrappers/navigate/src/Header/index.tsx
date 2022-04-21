
import { Logotype, Navigate } from '@sellgar/kit';

import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './default.module.scss';


function Header(): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['section']}>
        <div className={styles['logotype']}>
          <NavLink to={process.env['PUBLIC_URL'] + '/'}>
            <Logotype />
          </NavLink>
        </div>
        <div className={styles['navigate']}>
          <Navigate items={[
            {
              title: 'Хочу продавать',
              href: '/'
            },
            {
              title: 'Оплата и доставка',
              href: '/design'
            },
            {
              title: 'Оплата',
              href: '/help'
            },
          ]} />
        </div>
        <div className={styles['contacts']}>
          <a className={styles['phone']} href={'phone:+79154537766'}>+ 7 (915) 453-77-66</a>
          <a className={styles['phone']} href={'email:support@sellgar.ru'}>support@sellgar.ru</a>
        </div>
      </div>
      <div className={styles['section']}>
        <div className={styles['control']}>

        </div>
      </div>
    </div>
  );
}

export default Header;
