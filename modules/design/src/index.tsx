
import { Checkbox } from "@library/kit";
import { Product, Collapse } from '@library/design';

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './default.module.scss';


function Test(): React.ReactNode {
  const [inProcess, setProcess] = React.useState<boolean>(false);
  const [products, setProducts] = React.useState<Array<any>>([]);

  function setProduct(product: object) {
    setProcess(true);
    setTimeout(() => {
      setProducts([...products, product]);
      setProcess(false);
    }, 2000);
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['block']}>
          <Link to={'/'}>Kit</Link>
        </div>
        <div className={styles['block']}>
          <div className={styles['row']}>
            <div className={styles['col']}>
              <Product
                uuid={'nmmhghjghgh'}
                count={products.length}
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
                inProcess={inProcess}
                onSelect={setProduct}
              />
            </div>
            <div className={styles['col']}>
              <Product
                uuid={'dffdgdfgdf'}
                gallery={['https://cdn1.technopark.ru/technopark/photos_resized/product/248_248/544062/1_544062.jpg']}
                title={'fhfghfhg'}
                modes={[
                  {
                    uuid: '123',
                    value: '1',
                    unit: 'sm.'
                  },
                ]}
                onSelect={(uuid) => console.log(uuid)}
              />
            </div>
            <div className={styles['col']}>
              <Product
                uuid={'dffdgdfgdf'}
                disabled
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
                onSelect={(uuid) => console.log(uuid)}
              />
            </div>
            <div className={styles['col']}>
              <Product
                uuid={'dffdgdfgdf'}
                disabled
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
                onSelect={(uuid) => console.log(uuid)}
              />
            </div>
            <div className={styles['col']}>
              <Product
                uuid={'dffdgdfgdf'}
                disabled
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
                onSelect={(uuid) => console.log(uuid)}
              />
            </div>
          </div>
        </div>
        <div className={styles['block']}>
          <div className={styles['row']}>
            <div className={styles['col']}>
              <Collapse title={'Collapse'}>
                <Checkbox value={false} onCheck={() => {}}>jhgjhgjhgjh</Checkbox>
              </Collapse>
            </div>
            <div className={styles['col']}>
              <Collapse title={'Вес товара'} active>
                <div>
                  <Checkbox value={false} onCheck={() => {}}>jhgjhgjhgjh</Checkbox>
                </div>
                <div>
                  <Checkbox value={false} onCheck={() => {}}>jhgjhgjhgjh</Checkbox>
                </div>
                <div>
                  <Checkbox value={false} onCheck={() => {}}>jhgjhgjhgjh</Checkbox>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;