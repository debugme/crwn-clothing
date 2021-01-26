import { connect } from 'react-redux'
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../redux/cart/cartActionCreators'

import { CheckoutItem } from './CheckoutItem'

const mapDispatchToProps = {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
}

export const CheckoutItemContainer = connect(
  null,
  mapDispatchToProps
)(CheckoutItem)
