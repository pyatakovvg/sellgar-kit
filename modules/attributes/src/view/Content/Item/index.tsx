
import { Text } from '@library/kit';
import { openDialog } from "@package/dialog";

import React from 'react';
import { useDispatch } from 'react-redux';

import cn from 'classnames';
import styles from './default.module.scss';


interface ICategory {
  uuid: string;
  name: string;
  description: string;
}

interface IUtil {
  uuid: string;
  name: string;
  description: string;
}

interface IProps {
  uuid: string;
  index: number;
  name: string;
  description: string;
  category: ICategory;
  unit: IUtil;
}


function Item({ uuid, name, description, category, unit }: IProps): JSX.Element {
  const dispatch = useDispatch();
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-ellipsis'), []);

  function handleUpdate(uuid: string) {
    dispatch<any>(openDialog('modify', { uuid }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['login']}>
        <Text type={'strong'}>{ name }</Text>
      </div>
      <div className={styles['login']}>
        <Text type={'description'}>{ description }</Text>
      </div>
      <div className={styles['login']}>
        <Text>{ category ? category['name'] : '---' }</Text>
      </div>
      <div className={styles['login']}>
        <Text>{ unit ? unit['name'] : '---' }</Text>
      </div>
      <div className={styles['control']}>
        <span className={iconClassName} onClick={() => handleUpdate(uuid)} />
      </div>
    </div>
  );
}

export default Item;