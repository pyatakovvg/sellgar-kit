
import React from 'react';
import { WrappedFieldInputProps } from 'redux-form';

import styles from './default.module.scss';


interface IProps extends WrappedFieldInputProps {
  mode?: 'default' | 'primary' | 'danger';
  error: string | null;
  children: JSX.Element;
  options?: Array<any>;
  [key: string]: any;
}


function BaseField({ children, error, ...props }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        {React.cloneElement(children, {
          ...props,
          mode: !! error ? 'danger' : props['mode'],
        })}
      </div>
      { !! error && (
        <div className={styles['error']}>
          <span className={styles['message']}>{ error }</span>
        </div>
      )}
    </div>
  );
}

BaseField.defaultProps = {
  children: null,
  error: null
};

export default BaseField;
