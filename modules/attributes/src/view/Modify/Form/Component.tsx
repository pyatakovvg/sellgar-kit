
import { InputField, SelectField, Button, Header } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectUnits, selectCategories, selectInUploadProcess } from '../../../index';

import styles from './default.module.scss';


function ModifyForm({ handleSubmit }: any): JSX.Element {
  const units = useSelector(selectUnits);
  const categories = useSelector(selectCategories);
  const inProcess = useSelector(selectInUploadProcess);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={4}>Аттрибут</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <InputField name={'name'} placeholder={'Наименование'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <InputField name={'description'} placeholder={'Описание'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <SelectField clearable name={'categoryUuid'} placeholder={'Группа товаров'} options={categories} optionKey={'uuid'} optionValue={'name'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <SelectField clearable name={'unitUuid'} placeholder={'Размерность'} options={units} optionKey={'uuid'} optionValue={'name'} disabled={inProcess} />
        </div>
      </div>
      <div className={styles['control']}>
        <Button type={'submit'} disabled={inProcess}>Отправить</Button>
      </div>
    </form>
  );
}

export default ModifyForm;
