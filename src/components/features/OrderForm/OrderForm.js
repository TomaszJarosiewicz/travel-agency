import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

const OrderForm = ({tripCost, options, setOrderOption}) => (
  console.log('tripCost', typeof tripCost),
  console.log('options', typeof options),
  <Row>
    {pricing.map(option => (
      console.log('option.id', option.id),
      <Col md={4} key={option.id}>
        <OrderOption currentValue={options[option.id]} setOrderOption={setOrderOption} {...option} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
