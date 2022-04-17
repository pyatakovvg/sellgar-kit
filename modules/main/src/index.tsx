
import { Button, Input, List, Select } from '@sellgar/kit';

import React from 'react';

import styles from './default.module.scss';


function Test(): React.ReactNode {
  const [value, setValue] = React.useState('');
  const [listValue, setListValue] = React.useState<any>(null);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['block']}>
          <Button>Default button</Button>
          <Button mode={'danger'}>Default button</Button>
          <Button mode={'success'}>Default button</Button>
          <Button disabled>Default button</Button>
        </div>
        <div className={styles['block']}>
          <Button form={'context'}>Context button</Button>
          <Button form={'context'} mode={'danger'}>Context button</Button>
          <Button form={'context'} mode={'success'}>Context button</Button>
          <Button form={'context'} disabled>Context button</Button>
        </div>
        <div className={styles['block']}>
          <Button form={'outline'}>Outline button</Button>
          <Button form={'outline'} mode={'danger'}>Outline button</Button>
          <Button form={'outline'} mode={'success'}>Outline button</Button>
          <Button form={'outline'} disabled>Outline button</Button>
        </div>
        <div className={styles['block']}>
          <Input value={value} disabled type={'email'} name={'email'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
        <div className={styles['block']}>
          <Select
            clearable
            mode={'primary'}
            value={listValue}
            options={[
              { id: 1, value: 'One value' },
              { id: 2, value: 'Two value' },
              { id: 3, value: 'Three value' },
            ]}
            onChange={setListValue}
          />
        </div>
        <div className={styles['block']}>
          <List
            value={listValue}
            options={[
              { id: 1, value: 'One value' },
              { id: 2, value: 'Two value' },
              { id: 3, value: 'Three value' },
            ]}
            onClick={setListValue}
          />
        </div>
      </div>
    </div>
  );
}

export default Test;