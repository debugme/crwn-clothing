import { FunctionComponent } from 'react'
import { CollectionItemProps, CollectionItem } from '..'

import './CollectionPreview.scss'

export interface CollectionPreviewProps {
  title: string
  items: CollectionItemProps[]
}

export const CollectionPreview: FunctionComponent<CollectionPreviewProps> = (
  props: CollectionPreviewProps
): JSX.Element => {
  const { title, items } = props
  const itemList = items
    .slice(0, 4)
    .map(({ id, ...rest }) => <CollectionItem key={id} id={id} {...rest} />)

  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">{itemList}</div>
    </div>
  )
}
