import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { StoreState } from '../../redux/rootReducer'

import { selectCartItems } from '../../redux/cart/cartSelectors'
import { toggleCartVisibility } from '../../redux/cart/cartActionCreators'

import { CartDropdown, CartDropdownProps } from './CartDropdown'

const mapStateToProps = createStructuredSelector<
  StoreState,
  Pick<CartDropdownProps, 'items'>
>({
  items: selectCartItems,
})

const mapDispatchToProps = { toggleCartVisibility }

export const CartDropdownContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
)
