import { FunctionComponent } from 'react'
import { CartItemProps } from '../cartItem/CartItem'

import './CheckoutItem.scss'

export interface CheckoutItemProps {
  item: CartItemProps
}

export const CheckoutItem: FunctionComponent<CheckoutItemProps> = (
  props: CheckoutItemProps
): JSX.Element => {
  const {
    item: { name, imageUrl, price, quantity },
  } = props
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
}
