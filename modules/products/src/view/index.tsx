
import { Header, Button } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';

import Content from './Content';

import { getProducts, resetStateAction } from '../index';

import styles from './default.module.scss';


function Users(): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getProducts());
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header level={2}>Витрина</Header>
        <Button>Добавить</Button>
      </header>
      <section className={styles['content']}>
        <Content />
      </section>
    </section>
  );
}

export default Users;