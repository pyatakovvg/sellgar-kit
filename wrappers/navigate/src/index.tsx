
import React from 'react';

import styles from './default.module.scss';


interface IProps {
  children: React.ReactHTMLElement<any>
}


function DefaultWrapper({ children }: IProps): React.ReactNode {
  return (
    <div className={styles['wrapper']}>
      <div>Wrapper navigate</div>
      <div className={styles['content']}>
        {children}
      </div>
    </div>
  );
}

export default DefaultWrapper;
