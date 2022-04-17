
import React from 'react';

import styles from './default.module.scss';


interface IProps {
  children: React.ReactNode;
}


function DefaultWrapper({ children }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div>Wrapper default</div>
        { children }
      </div>
    </div>
  );
}

DefaultWrapper.defaultProps = {
  children: null,
};

export default DefaultWrapper;
