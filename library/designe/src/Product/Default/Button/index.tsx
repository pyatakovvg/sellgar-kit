
import { Spinner } from '@sellgar/kit';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  count?: number;
  disabled?: boolean;
  inProcess?: boolean;
  onClick(): void;
}


function Modes({ count, disabled, inProcess, onClick }: IProps) {
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['disabled']]: disabled,
    [styles['in-process']]: inProcess,
  }), [disabled, inProcess]);

  function handleClick() {
    if (disabled) {
      return void 0;
    }

    if (onClick) {
      onClick();
    }
  }

  return (
    <div className={wrapperClassName} onClick={handleClick}>
      { !! count && (
        <div className={styles['bucket']}>
          <span className={styles['count']}>{ count }</span>
        </div>
      )}
      <div className={styles['title']}>Купить</div>
      <div className={styles['amount']}>300 руб.</div>
      {inProcess && (
        <div className={styles['spinner']}>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Modes;
