import { FunctionComponent } from 'react'
import { connect } from 'react-redux'

import {
  addItemToCart,
  AddItemToCartActionCreator,
} from '../../redux/cart/cartActions'
import { Button } from '..'

import './CollectionCard.scss'

export interface CollectionItem {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface CollectionCardProps {
  item: CollectionItem
  addItemToCart: AddItemToCartActionCreator
}

export const _CollectionCard: FunctionComponent<CollectionCardProps> = (
  props: CollectionCardProps
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
    <div className="collection-card">
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

export const CollectionCard = connect(null, mapDispatchToProps)(_CollectionCard)
