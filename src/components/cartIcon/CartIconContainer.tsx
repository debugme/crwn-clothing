import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartVisibility } from '../../redux/cart/cartActionCreators'

import { selectCartItemsCount } from '../../redux/cart/cartSelectors'
import { StoreState } from '../../redux/rootReducer'
import { CartIcon, CartIconProps } from './CartIcon'

const mapStateToProps = createStructuredSelector<
  StoreState,
  Pick<CartIconProps, 'itemCount'>
>({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = { toggleCartVisibility }

export const CartIconContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)
