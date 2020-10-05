import React from 'react';
import styles from './OrderSummary.scss';
// import calculateTotal from '../../../utils/calculateTotal';
// import formatPrice from '../../../utils/formatPrice';

const OrderSummary = () => (
  <h2 className={styles.component}>Total: <strong>$12121212</strong></h2>
  // calculateTotal(formatPrice(this.props), this.props)
);

export default OrderSummary;
