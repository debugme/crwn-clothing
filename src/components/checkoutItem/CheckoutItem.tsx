import { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { CartItemProps } from '../cartItem/CartItem'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  AddItemToCartActionCreator,
  RemoveItemFromCartActionCreator,
  ClearItemFromCartActionCreator,
} from '../../redux/cart/cartActions'

import './CheckoutItem.scss'

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
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
}

export const CheckoutItem = connect(null, mapDispatchToProps)(_CheckoutItem)
