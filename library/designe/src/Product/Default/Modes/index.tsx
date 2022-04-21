
import React from 'react';

import Mode from './Mode';

import styles from './default.module.scss';


interface IMode {
  uuid: string;
  value: string;
  unit: string;
}

interface IProps {
  items: Array<IMode>;
  selectedUuid: string;
  disabled?: boolean;
  onClick(uuid: string): void;
}


function Modes({ selectedUuid, items, disabled, onClick }: IProps) {
  return (
    <div className={styles['wrapper']}>
      {items.map((item: IMode) => (
        <Mode
          key={item['uuid']}
          active={selectedUuid === item['uuid']}
          disabled={disabled}
          {...item}
          onClick={() => onClick(item['uuid'])}
        />
      ))}
    </div>
  );
}

export default Modes;
