import { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  toggleCartVisibility,
  ToggleCartVisibilityActionCreator,
} from '../../redux/cart/cartActionCreators'

import { selectCartItemsCount } from '../../redux/cart/cartSelectors'
import { StoreState } from '../../redux/rootReducer'

import { StyledCartIcon, StyledShoppingIcon, StyledItemCount } from './Styles'

export interface CartIconProps {
  itemCount: number
  toggleCartVisibility: ToggleCartVisibilityActionCreator
}

export const _CartIcon: FunctionComponent<CartIconProps> = (
  props: CartIconProps
): JSX.Element => {
  const { itemCount, toggleCartVisibility } = props
  return (
    <StyledCartIcon onClick={toggleCartVisibility}>
      <StyledShoppingIcon />
      <StyledItemCount>{itemCount}</StyledItemCount>
    </StyledCartIcon>
  )
}

const mapStateToProps = createStructuredSelector<
  StoreState,
  Pick<CartIconProps, 'itemCount'>
>({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = { toggleCartVisibility }

export const CartIcon = connect(mapStateToProps, mapDispatchToProps)(_CartIcon)
