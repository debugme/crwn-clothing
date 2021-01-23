import { FunctionComponent } from 'react'

import { ToggleCartVisibilityActionCreator } from '../../redux/cart/cartActionCreators'

import { StyledCartIcon, StyledShoppingIcon, StyledItemCount } from './Styles'

export interface CartIconProps {
  itemCount: number
  toggleCartVisibility: ToggleCartVisibilityActionCreator
}

export const CartIcon: FunctionComponent<CartIconProps> = (
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
