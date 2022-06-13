
import { Header } from '@library/kit';
import { Collapse } from '@library/design';

import React from 'react';

import styles from './default.module.scss';


function Aside(): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Подбор по параметрам</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['block']}>
          <Collapse title={'Вес товара'}>

          </Collapse>
        </div>
        <div className={styles['block']}>
          <Collapse title={'Вес товара'}>

          </Collapse>
        </div>
        <div className={styles['block']}>
          <Collapse title={'Вес товара'}>

          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Aside;