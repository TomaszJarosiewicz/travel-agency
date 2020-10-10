import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from './../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  console.log('currentValue', currentValue),
  <div className={styles.icon}>
    {required ? '' : (
      <div key='null' value=''>---</div>
    )}
    {values.map(value => (
      <div className={styles.icon} key={value.id} onClick={() => setOptionValue(value.id)} value={value.id}>
        <Icon name={value.icon} />
        {value.name}({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

export default OrderOptionIcons;
