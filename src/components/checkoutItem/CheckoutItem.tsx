import { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
  AddItemToCartActionCreator,
  ClearItemFromCartActionCreator,
  RemoveItemFromCartActionCreator,
} from '../../redux/cart/cartActionCreators'

import { CartItemProps } from '../cartItem/CartItem'

import {
  StyledCheckOutItem,
  StyledImageContainer,
  StyledName,
  StyledPrice,
  StyledQuantity,
  StyledArrow,
  StyledValue,
  StyledRemove,
} from './Styles'

export interface CheckoutItemProps {
  item: CartItemProps
  addItemToCart: AddItemToCartActionCreator
  removeItemFromCart: RemoveItemFromCartActionCreator
  clearItemFromCart: ClearItemFromCartActionCreator
}

export const _CheckoutItem: FunctionComponent<CheckoutItemProps> = (
  props: CheckoutItemProps
): JSX.Element => {
  const { item, addItemToCart, removeItemFromCart, clearItemFromCart } = props
  const { name, imageUrl, price, quantity } = item
  const clearItem = () => clearItemFromCart(item)
  const addItem = () => addItemToCart(item)
  const removeItem = () => removeItemFromCart(item)

  return (
    <StyledCheckOutItem>
      <StyledImageContainer>
        <img src={imageUrl} alt={name} />
      </StyledImageContainer>
      <StyledName>{name}</StyledName>
      <StyledQuantity>
        <StyledArrow onClick={removeItem}>&#10094;</StyledArrow>
        <StyledValue>{quantity}</StyledValue>
        <StyledArrow onClick={addItem}>&#10095;</StyledArrow>
      </StyledQuantity>
      <StyledPrice>{price}</StyledPrice>
      <StyledRemove onClick={clearItem}>&#10005;</StyledRemove>
    </StyledCheckOutItem>
  )
}

const mapDispatchToProps = {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
}

export const CheckoutItem = connect(null, mapDispatchToProps)(_CheckoutItem)
