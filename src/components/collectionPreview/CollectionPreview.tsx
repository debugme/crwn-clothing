import { FunctionComponent } from 'react'
import { CartItem, CollectionItem } from '..'

import './CollectionPreview.scss'

export interface CollectionPreviewProps {
  title: string
  items: CartItem[]
}

export const CollectionPreview: FunctionComponent<CollectionPreviewProps> = (
  props: CollectionPreviewProps
): JSX.Element => {
  const { title, items } = props
  const itemList = items
    .slice(0, 4)
    .map((item) => <CollectionItem key={item.id} item={item} />)

  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">{itemList}</div>
    </div>
  )
}
