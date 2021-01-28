import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors'
import { StoreState } from '../../redux/rootReducer'
import { Checkout, CheckoutProps } from './Checkout'

const mapStateToProps = createStructuredSelector<StoreState, CheckoutProps>({
  items: selectCartItems,
  total: selectCartTotal,
})

export const CheckoutContainer = connect(mapStateToProps, null)(Checkout)

export default CheckoutContainer
