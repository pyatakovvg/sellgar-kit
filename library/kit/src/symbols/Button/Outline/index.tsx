
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


type TType = 'submit' | 'button' | 'reset';
type TMode = 'primary' | 'danger' | 'success';

interface IProps {
  className?: string,
  type?: TType,
  mode?: TMode,
  children?: string,
  disabled?: boolean,
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void,
}


function OutlineButton({ className, type, mode, children, disabled, onClick }: IProps) {
  const buttonClassName = React.useMemo(() => cn(styles['button'], className, {
    [styles['mode--danger']]: mode === 'danger',
    [styles['mode--primary']]: mode === 'primary',
    [styles['mode--success']]: mode === 'success',
  }), [className, mode, disabled]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    if (disabled) {
      return void 0;
    }

    if (onClick) {
      onClick(event);
    }
  }

  return (
    <button
      className={buttonClassName}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >{ children }</button>
  );
}

OutlineButton.defaultProps = {
  className: null,
  type: 'button',
  mode: 'primary',
  children: 'Button',
  disabled: false,
};

export default OutlineButton;
