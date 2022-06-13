
import { Filter, Product } from '@library/design';

import React from 'react';

import styles from './default.module.scss';


function Products(): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Filter />
      </div>
      <div className={styles['content']}>
        <div className={styles['container']}>
          <div className={styles['item']}>
            <Product
              uuid={'Творог крупно-зерновой из цельного молока'}
              count={0}
              gallery={['https://cdn1.technopark.ru/technopark/photos_resized/product/248_248/544062/1_544062.jpg']}
              title={'fhfghfhg'}
              modes={[
                {
                  uuid: '234',
                  value: '6',
                  unit: 'sm.'
                }
              ]}
            />
          </div>
          <div className={styles['item']}>
            <Product
              uuid={'Творог крупно-зерновой из цельного молока'}
              count={0}
              gallery={['https://st.depositphotos.com/1325441/1367/i/450/depositphotos_13671733-stock-photo-handsome-guy-with-dreamy-eyes.jpg']}
              title={'fhfghfhg'}
              modes={[
                {
                  uuid: '123',
                  value: '1',
                  unit: 'sm.'
                },
                {
                  uuid: '234',
                  value: '6',
                  unit: 'sm.'
                }
              ]}
            />
          </div>
          <div className={styles['item']}>
            <Product
              uuid={'nmmhghjghgh'}
              count={0}
              gallery={['https://st.depositphotos.com/1325441/1367/i/450/depositphotos_13671733-stock-photo-handsome-guy-with-dreamy-eyes.jpg']}
              title={'fhfghfhg'}
              modes={[
                {
                  uuid: '123',
                  value: '1',
                  unit: 'sm.'
                },
                {
                  uuid: '234',
                  value: '6',
                  unit: 'sm.'
                }
              ]}
            />
          </div>
          <div className={styles['item']}>
            <Product
              uuid={'nmmhghjghgh'}
              count={0}
              gallery={['https://st.depositphotos.com/1325441/1367/i/450/depositphotos_13671733-stock-photo-handsome-guy-with-dreamy-eyes.jpg']}
              title={'fhfghfhg'}
              modes={[
                {
                  uuid: '123',
                  value: '1',
                  unit: 'sm.'
                },
                {
                  uuid: '234',
                  value: '6',
                  unit: 'sm.'
                }
              ]}
            />
          </div>
          <div className={styles['item']}>
            <Product
              uuid={'nmmhghjghgh'}
              count={0}
              gallery={['https://st.depositphotos.com/1325441/1367/i/450/depositphotos_13671733-stock-photo-handsome-guy-with-dreamy-eyes.jpg']}
              title={'Творог крупно-зерновой из цельного молока'}
              modes={[
                {
                  uuid: '123',
                  value: '1',
                  unit: 'sm.'
                },
                {
                  uuid: '234',
                  value: '6',
                  unit: 'sm.'
                }
              ]}
            />
          </div>
          <div className={styles['item']}>
            <Product
              uuid={'nmmhghjghgh'}
              count={0}
              gallery={['https://st.depositphotos.com/1325441/1367/i/450/depositphotos_13671733-stock-photo-handsome-guy-with-dreamy-eyes.jpg']}
              title={'fhfghfhg'}
              modes={[
                {
                  uuid: '123',
                  value: '1',
                  unit: 'sm.'
                },
                {
                  uuid: '234',
                  value: '6',
                  unit: 'sm.'
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;