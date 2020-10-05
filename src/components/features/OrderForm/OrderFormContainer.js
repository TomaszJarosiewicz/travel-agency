import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';

const mapDispatchToProps = dispatch => ({
  getOrderOptions: options => dispatch(getOrderOptions(options)),
});

export default connect(mapDispatchToProps)(OrderForm);
