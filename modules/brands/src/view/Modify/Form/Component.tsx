
import { InputField, Button, Header } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectInUploadProcess } from '../../../index';

import styles from './default.module.scss';


function ModifyForm({ handleSubmit }: any): JSX.Element {
  const inProcess = useSelector(selectInUploadProcess);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={4}>Единица измерения</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <InputField name={'code'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <InputField name={'name'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <InputField name={'description'} disabled={inProcess} />
        </div>
      </div>
      <div className={styles['control']}>
        <Button type={'submit'} disabled={inProcess}>Отправить</Button>
      </div>
    </form>
  );
}

export default ModifyForm;
