
import { Image, Text } from '@sellgar/kit';

import React from 'react';

import Modes from './Modes';
import Button from './Button';

import styles from './default.module.scss';


interface IMode {
  uuid: string;
  value: string;
  unit: string;
}

interface IProps {
  uuid: string;
  count?: number;
  gallery: Array<string>;
  title: string;
  modes: Array<IMode>;
  disabled?: boolean;
  inProcess?: boolean;
  onClick?(): void;
  onSelect?(uuid: object): void;
}


function Product({ uuid, count, gallery, title, modes, disabled, inProcess, onSelect, onClick }: IProps): JSX.Element {
  const [selectedModeUuid, setModeUuid] = React.useState(modes[0]['uuid']);

  function handleToBucket(uuid: string) {
    if (disabled) {
      return void 0;
    }
    if (onSelect) {
      onSelect({
        uuid,
        modeUuid: selectedModeUuid,
      });
    }
  }

  function handleChangeMode(modeUuid: string) {
    setModeUuid(modeUuid);
  }

  function handleClick() {
    if (disabled) {
      return void 0;
    }
    if (onClick) {
      onClick();
    }
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['image']} onClick={handleClick}>
        <Image src={gallery[0]} />
      </div>
      <div className={styles['description']}>
        <Text>{ title }</Text>
      </div>
      <div className={styles['mode']}>
        <Modes
          selectedUuid={selectedModeUuid}
          items={modes}
          disabled={disabled}
          onClick={handleChangeMode}
        />
      </div>
      <div className={styles['controls']}>
        <Button
          count={count}
          disabled={disabled}
          inProcess={inProcess}
          onClick={() => handleToBucket(uuid)}
        />
      </div>
    </div>
  );
}

export default Product;
