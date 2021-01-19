import { FunctionComponent } from 'react'
import { connect } from 'react-redux'

import {
  addItemToCart,
  AddItemToCartActionCreator,
} from '../../redux/cart/cartActions'
import { Button } from '..'

import './CollectionItem.scss'

export interface CartItem {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface CollectionItemProps {
  item: CartItem
  addItemToCart: AddItemToCartActionCreator
}

export const _CollectionItem: FunctionComponent<CollectionItemProps> = (
  props: CollectionItemProps
): JSX.Element => {
  const { item, addItemToCart } = props
  const { name, imageUrl, price } = item
  const style = {
    backgroundImage: `url(${imageUrl})`,
  }
  const handleClick = () => {
    addItemToCart(item)
  }
  return (
    <div className="collection-item">
      <div className="image" style={style} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted onClick={handleClick}>
        Add to cart
      </Button>
    </div>
  )
}

const mapDispatchToProps = { addItemToCart }

export const CollectionItem = connect(null, mapDispatchToProps)(_CollectionItem)
