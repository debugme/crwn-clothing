import { FunctionComponent } from 'react'

import './CollectionItem.scss'

export interface CollectionItemProps {
  id: number
  name: string
  imageUrl: string
  price: number
}

export const CollectionItem: FunctionComponent<CollectionItemProps> = (
  props: CollectionItemProps
): JSX.Element => {
  const { name, imageUrl, price } = props
  const style = {
    backgroundImage: `url(${imageUrl})`,
  }
  return (
    <div className="collection-item">
      <div className="image" style={style} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}
